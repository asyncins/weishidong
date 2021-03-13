---
title: 基于 Redis 的分布式锁实现
sidebar: 'auto'
date: 2021-03-01
tags:
- Python 编程参考
- 实用技能
- Python
- Redis

categories:
 - 编程参考
 - 实用技能
---

> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识



锁是为了应对资源竞争而设计的一种机制，在单体架构中，我们可以使用编程语言内置的锁来有序地安排进程或者线程访问同一个资源，在出现并发的情况下不会造成数据错误。在分布式场景下，就需要一个语言无关且都能够访问和控制的公用锁，这就是分布式的需求背景。


经过长时间的发展，业内出现了不少的分布式锁实现。例如基于 MySQL 数据库实现、基于 Zookeeper 实现以及这里介绍到的基于 Redis 实现。分布式锁的大体要求如下：


- [x] 性能要高，越接近内存性能越好；
- [x] 可重入，可以多次获取相同的锁；
- [x] 可用性要高，不会因为小范围的网络分区或者设备故障影响使用；
- [x] 无死锁，具备超时自动释放能力；
- [x] 非阻塞，没有获取到锁立即返回结果，不阻塞等待；



## Redis 官方推荐的方式


基于 Redis 的分布式锁实现方式有很多种，例如通过 setnx 实现、通过 lua 指令实现等，但是网上随意找到的文章中介绍的具体实现不甚可靠，不知道哪里有暗坑。这里要介绍的 Redis 官方 [https://redis.io/topics/distlock/ ](https://redis.io/topics/distlock/)给出的 RedLock 实现。


### RedLock
Redis 官方表示有很多库和文章描述了如何基于 Redis 实现分布式锁，但大家使用的方法各有差异，一些实现的可靠性不高，因此 Reids 官方提出一种称为 RedLock 的算法，且认为这种实现比普通的单例实现更为可靠，将 RedLock 发表出来，期望社区进行分析和讨论。


RedLock 围绕 3 个属性设计，并认为这 3 个属性是有效使用分布式锁的必要条件：


- [x] 安全属性：互斥，在任何时刻，最多允许 1 个客户端获得锁；
- [x] 活力属性：无死锁，即使小部分节点发生网络分区或者崩溃，也不会影响其它客户端获得锁；
- [x] 活力属性：容错能力，只要大多数结点处于正常运行状态，客户端就可以正确获得锁和释放锁；



其它基于 Redis 的分布式锁设计方案有一个缺点，当 Redis 单节点宕机时锁功能不可用。就算设定了 Redis 集群（Master-Slave），由于 Redis 的信息同步是异步进行的，所以有可能在这个环节丢失锁。这就使得方案存在竞争条件：


1. Client-A 在主节点中获得锁；
1. 集群多节点数据同步完成之前主节点崩溃，拒绝服务；
1. 从节点升级为主节点；
1. Client-N 在新的主节点中获取锁，但锁被 Client-A 占用未释放；



RedLock 的设计是选用多个相互独立的主节点，这样能够有效地避免上面提到的主从信息同步问题。这样一来，只要大多数节点可用，锁就可用。


### 上锁和释放锁的标准操作
Redis 官方给出的上锁标准操作为：
```
SET resource_name my_random_value NX PX 30000
```
nx 命令可以确保仅当锁不存在的时候才设置锁，px 命令可以确保锁在指定的时间内自动释放。


Redis 官方给出的释放锁标准操作为：
```
if redis.call("get",KEYS[1]) == ARGV[1] then
    return redis.call("del",KEYS[1])
else
    return 0
end
```
由于 lua 语言的特性，释放锁的操作是原子的，可以确保操作能够完整执行。传入指定的 KEY 用于确保要求释放锁的 Client 是拿到了锁的 Client，不会被冒名顶替。


## RedLock 的 Python 实现


RedLock Python 的具体代码实现在 RedLock 提案文章上，代码仓库地址是 [https://github.com/SPSCommerce/redlock-py](https://github.com/SPSCommerce/redlock-py)。以下内容基本基于这份源码展开，感兴趣的朋友可以前往仓库阅读源码。


RedLock 类主要有几个函数，上锁的函数、释放锁的函数以及锁操作所需要的一些功能函数，代码结构如下：
```
class RedLock:

		def __init__():
    		pass
        
		def lock():
    		pass
        
    def unlock():
    		pass 
```
RedLock 的思路是初始化时连接多个独立的 Redis 节点，每次上锁和释放锁均在多个节点中执行。只要操作（上锁/释放锁）成功的节点数量大于操作失败（例如网络分区、节点崩溃的情况）的节点数量，即视为操作成功。考虑到网络通信的延迟，还设定了一定的时间容忍度，使得多个节点上锁的自动超时时间一致。


### 多节点操作的相关代码
选用多个独立节点共同工作的原因是考虑到单节点或者主从模式发生故障时会影响分布式锁的可用性，那么多节点的取舍又是怎么样的呢？


首先是初始化，RedLock 实例化时要求传入一个 Redis 服务器列表，在 init 函数中使用 for 循环依次连接列表中的每个 Redis 并确认能够正常访问：
```python
for connection_info in connection_list:
    try:
        if isinstance(connection_info, string_type):
            server = redis.StrictRedis.from_url(connection_info)
        elif type(connection_info) == dict:
            server = redis.StrictRedis(**connection_info)
        else:
            server = connection_info
        self.servers.append(server)
    except Exception as e:
        raise Warning(str(e))
self.quorum = (len(connection_list) // 2) + 1

if len(self.servers) < self.quorum:
    raise CannotObtainLock()
```
要注意的是，Redis 在创建连接时并不确定是否连接正常，而是在执行读写的时候才能确定。将确认连接正常（**redis.StrictRedis.from_url(connection_info)**）的 Redis 添加到一个新的列表中，待 for 循环结束后比较正常节点数和传入的列表元素数（**len(self.servers) < self.quorum**），只要正常节点数超过传入列表元素数的一半即视为 RedLock 可以正常工作，否则主动抛出异常（**raise CannotObtainLock**）。


> 版权水印 微信公众号 Python 编程参考



在获得锁和释放锁的地方一样这么操作，例如释放锁的代码为：
```python
for server in self.servers:
    try:
        self.unlock_instance(server, lock.resource, lock.key)
    except RedisError as e:
        redis_errors.append(e)
```
### 锁定与释放的具体执行
锁的释放按照 Redis 官方推荐使用了 lua 语言，首先定义执行代码：
```python
unlock_script = """
if redis.call("get",KEYS[1]) == ARGV[1] then
    return redis.call("del",KEYS[1])
else
    return 0
end"""
```
然后在具体操作的地方调用 eval 函数执行：
```python
server.eval(self.unlock_script, 1, resource, val)
```
上锁也按照 Redis 官方推荐，使用 nx 和 px：
```python
server.set(resource, val, nx=True, px=ttl)
```
要注意的是，上锁和释放锁都在正常节点列表的 for 循环中执行，也就是依次在每个正常的节点进行操作。


至此，基于 Redis 的分布式锁实现学习完毕。

<Vssue :title="$title" />
