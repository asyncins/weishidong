---
title: Snowflake 算法原理与代码实现
date: 2021-03-12
tags:
- Python 编程参考

categories:
 - 编程参考
---


Twitter 于 2010 年开源了内部团队在用的一款全局唯一 ID 生成算法 Snowflake，翻译过来叫做雪花算法。Snowflake 不借助数据库，可直接由编程语言生成，它连续生成的 3 个 ID 看起来像这样
563583455628754944、563583466173235200、563583552944996352。


![图片.png](https://img.weishidong.com/20210312211223.png)


Snowflake 以 64 bit 来存储组成 ID 的4 个部分：


- [ ] 最高位占1 bit，值固定为 0，以保证生成的 ID 为正数；
- [ ] 中位占 41 bit，值为毫秒级时间戳；
- [ ] 中下位占 10 bit，值为工作机器的 ID，值的上限为 1024；
- [ ] 末位占 12 bit，值为当前毫秒内生成的不同 ID，值的上限为 4096；



这样的设计允许在 1 毫秒内生成最多 4096 个 ID，同时由于中位是时间戳，使得生成的 ID 是有序递增的。


## Snowflake 的代码实现


代码实现中有一个重要的知识点——位运算。不了解位运算的朋友请阅读本书（《Python 编程参考》）的**位运算**章节展开学习。

首先我们引入必要的库，并设定中下位和末位的长度：
```python
import time
import logging

# 分配位置
WORKER_BITS = 5
DATACENTER_BITS = 5
SEQUENCE_BITS = 12
```
这里的中下位包含 5 位机房 ID 和 5 位机器 ID，它们一起组成 10 位的中下位。接着通过中下位的长度计算机房和机器的上限值；
```python
# 设定设备数量上限
WORKER_UPPER_LIMIT = -1 ^ (-1 << WORKER_BITS)
DATACENTER_UPPER_LIMIT = -1 ^ (-1 << DATACENTER_BITS)
```
上面提到过这是一组 64 位长度的组合，在获取到每一段之后我们需要将它们按位组合到一起，所以这里需要计算出位置的偏移量：
```python
# 组合时的位运算偏移量
WORKER_SHIFT = SEQUENCE_BITS
DATACENTER_ID_SHIFT = SEQUENCE_BITS + WORKER_BITS
TIMESTAMP_LEFT_SHIFT = SEQUENCE_BITS + WORKER_BITS + DATACENTER_BITS
```
然后设定掩码和元时间：
```python
SEQUENCE_MASK = -1 ^ (-1 << SEQUENCE_BITS)  # 掩码
EPOCH = 1577808001000  # 元时间戳 此处元设为 2020-01-01 00:00:01
```
按照 Snowflake 设定的 41 位长度，时间戳最多也只能用 70 年，如果从个1970 年开始，那么就白白浪费了几十年，所以这里的元时间可以设定为代码编写的时间或者近年时间。


> 版权水印 微信公众号 Python 编程参考



一切准备就绪后，开始设计 Snowflake 类的结构，这个算法涉及时间边界、时间戳生成、编号获取操作，代码基本结构如下：
```python
class SnowFlake:
    def __init__(self, data_center_id, worker_id, sequence=0):
        pass
        
    def _timestamp():
        """指定位数的时间戳"""
    		pass
        
    def take(self):
    		"""获取一个编号"""
    		pass
        
    def _generate(self):
    		"""生成一个编号"""
        
    def _wait_next_time(self, last_timestamp):
    		"""等到下一次单位时间"""
    		pass
```
一些初始化工作和基本边界检查工作在 init 函数中开展，例如检查 WORKER ID 和 DATACENTER ID 的边界，ID 的初始化等，对应代码如下：
```python
    def __init__(self, data_center_id, worker_id, sequence=0):
    
        # 编号上限检查
        if worker_id > WORKER_UPPER_LIMIT:
            raise ValueError('WORKER ID 高于上限')
        if worker_id < 0:
            raise ValueError('WORKER ID 低于下限')
        if data_center_id > DATACENTER_UPPER_LIMIT:
            raise ValueError('DATA CENTER ID 高于上限')
        if data_center_id < 0:
            raise ValueError('DATA CENTER ID 低于下限')

        self.worker_id = worker_id
        self.datacenter_id = data_center_id
        self.sequence = sequence

        self.last_timestamp = -1  # 最近一次生成编号的时间戳
```
时间戳的生成很简单，但是我们编写代码的时候要注意函数单一职责原则，因此把它单独拿出来做一个函数：
```python
    @staticmethod
    def _timestamp(n=1e3):
        """指定位数的时间戳"""
        return int(time.time() * n)
```
如果单位时间内生成的数超过上限，就需要等到下一个单位时间，对应代码如下：
```python
    def _wait_next_time(self, last_timestamp):
        """等到下一次单位时间"""
        timestamp = self._timestamp()
        while timestamp <= last_timestamp:
            timestamp = self._timestamp()
        return timestamp
```
取号时涉及的操作比较多，例如校验时间是否回拨、单位时间生成的数是否超限、生成账号等，因此需要拆分称多个小函数，遵循单一职责原则：
```python
    def take(self) -> int:
        """获取一个编号"""
        timestamp = self._timestamp()
        self._check(timestamp)
        self.last_timestamp = timestamp  # 更新最近一次生成编号的时间戳
        return self._generate(timestamp)

    def _generate(self, timestamp):
        """生成一个编号"""
        number = ((timestamp - EPOCH) << TIMESTAMP_LEFT_SHIFT) | (self.datacenter_id << DATACENTER_ID_SHIFT) | \
                 (self.worker_id << WORKER_SHIFT) | self.sequence
        return number
        
        def _check(self, timestamp):
        """超限检查"""
        self._time_back_off_check(timestamp)
        self._number_check(timestamp)

    def _number_check(self, timestamp):
        """数超限检查
        检查当前时间生成的编号是否超过上限 超过上限则等到下一个时间生成
        """
        if timestamp == self.last_timestamp:
            self.sequence = (self.sequence + 1) & SEQUENCE_MASK
            if self.sequence == 0:
                timestamp = self._wait_next_time(self.last_timestamp)
        else:
            self.sequence = 0

    def _time_back_off_check(self, timestamp):
        """检查时钟回拨"""
        if timestamp < self.last_timestamp:
            logging.error('发现时钟回退，记录到最近一次的时间戳为 {}'.format(self.last_timestamp))
            raise Exception("时钟回拨异常")
```
> 版权水印 韦世东的技术专栏 https://www.weishidong.com



至此，Snowflake 算法编写完成。完整代码下如图所示:
![](https://img.weishidong.com/20210312224706.png)

<Vssue :title="$title" />
