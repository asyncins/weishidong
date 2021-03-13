---
title: Python 并发编程基本操作
sidebar: 'auto'
date: 2021-03-12
tags:
- Python 编程参考
- Python
- 并发

categories:
 - 编程参考
---


> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识



并发编程相对于普通的单进程程序来说，不仅仅是多几个执行单元这么简单。单体架构和分布式架构的区别，也不单纯是从一变多，资源竞争的问题往往让新手猝不及防。


Python 的多进程和多线程有多种官方接口，例如 Subprocess/Threading/MultiProcessing/Concurrent，除此之外，还提供了支持协程的 AsyncIO。这里介绍的是 Python 官方提供的并高级发编程接口 Concurrent.futures。看到这你可能会问，什么是高级接口？


这是 Python 文档中给出的一种分层名词，越抽象越接近用户的称为高级接口，越接近底层越远离用户的称为低级接口。它们并没有真正的高低之分，只不过是用来描述抽象程度而已。高级接口是在低级接口的基础之上封装而来，通常来说，如果你需要更多定制化的功能选择低级接口会更好，反之你只想简单使用这个对象就选择高级接口。


Concurrent.futures 提供了两个具体的类对象 ThreadPoolExecutor 和 ProcessPoolExecutor，对应的是多线程执行器和多进程执行器。有意思的是这两个对象的封装是相同的，如果你之前使用的是 ThreadPoolExecutor，有一天想改成 ProcessPoolExecutor，可以无缝切换。一个简单的多线程执行实例如下：
```python
import time
from concurrent import futures


executor = futures.ThreadPoolExecutor(max_workers=3)


def draft(i):
    time.sleep(1)
    return i


if __name__ == "__main__":
    start = time.time()
    for i in range(0, 30):
        executor.submit(draft, i)
    executor.shutdown()
    end = time.time()
    print(end - start)
```
首先从 concurrent 模块中导入 futures，接着实例化一个多线程执行器并设置最大线程数为 3。draft 函数中的 sleep 是为了模拟线程执行时的耗时，后续通过多线程执行器的实例对象 executor 为多线程执行器创建了 30 个任务并记录了这些任务的执行总耗时。


在执行之前我们先来计算一下大概的耗时，最大线程数为 3，每次执行耗时 1 秒，共 30 个任务，这么算下来执行耗时应该是 10 秒。程序运行后终端输出的结果为 10.017648220062256，符合预期。


## 从并发代码中获取函数返回值


同步代码中，通常使用一个变量或者多个变量接收函数执行后返回的值，例如 `nec = genreate()`。但在并发编程时需要注意，不可直接在函数调用处获取返回值，这会使并发代码变成同步代码。


错误实例：
```python
for i in range(0, 30):
        result = executor.submit(draft, i).result()
    executor.shutdown()
```
试试这样执行，终端输出的执行时间一定是 30+ 秒。正确的获取返回值方式应该是这样：
```python
    tasks = []
    for i in range(0, 30):
        task = executor.submit(draft, i)
        tasks.append(task)
    executor.shutdown()
    for k in tasks:
        k.result()
```
终端输出的执行时间为 10 秒，并且有效地获取到了值。


## 等待并发代码执行完毕


同步代码中，代码的执行是自上而下的。在并发代码中也是一样，执行完上一行代码才会执行下一行代码。但这里有个暗坑，由于多线程和多进程并不在当前的主进程执行，当我们调用 submit 方法后代码块交给执行器，立即返回并执行下一行代码，因此会出现 submit 后面的代码执行完成时间比执行器调用的代码块更早执行完毕。具体代码如下：
```python
    tasks = []
    print("before submit")
    for i in range(0, 30):
        task = executor.submit(draft, i)
        tasks.append(task)
    print("after submit")
    for k in tasks:
        print(k.result())
```
执行结果就会变成这样；
```
before submit
after submit
0
1
2
3
```
而我们想要的结果则是：
```
before submit
0
1
2
3
after submit
```
那应该怎么办呢？只需要在 `print("after submit")` 增加执行器的 shutdown 函数调用即可：
```python
    for i in range(0, 30):
        task = executor.submit(draft, i)
        tasks.append(task)
    executor.shutdown()
    print("after submit")
```
这个函数的作用是等待所有未完成的任务执行完毕且相关资源释放完毕后才会执行下一行代码。在实际工作中常常用在 shutdown 之后关闭资源或者记录日志。


## 并发代码执行完毕后调用指定函数


有一些场景调用并发代码并不需要阻塞等待结果，而是期望先返回任务状况，后续的数据或者操作由一个回调函数处理。


例如 Scrapyd 中的任务调度接口，当用户发起一个爬虫调度请求的时候，接口将爬虫交给子进程执行，立即返回任务已添加的提示，后续执行完毕后通过回调函数记录任务日志和执行期间的输出。Concurrent.future 的执行器提供了一个 add_done_callback 函数给我们实现这样的需求。具体代码如下：
```python
def record(n):
    print(n)

task = executor.submit(draft, i)
task.add_done_callback(record)
```


## 资源竞争问题与解决办法


上面提到并发情况下会产生资源竞争，而资源竞争的直接结果是导致数据错误。假设小陈和老陈共用一个银行账户，现在银行账户里有 3000 元，小陈和老陈恰好在同一时间取款。这个场景就是基本的并发资源竞争，小陈、老陈同一时间取款可以看作 2 个线程竞争存款，对应代码如下：
```python
from concurrent import futures

executor = futures.ThreadPoolExecutor(max_workers=5)


class Account:
    def __init__(self, idx, balance):
        self.id = idx
        self.balance = balance


def draw(account, amount):
    if account.balance >= amount:
        print("本次取款:" + str(amount) + "\n")
        account.balance -= amount
        print("\t当前余额为: " + str(account.balance))
    else:
        print("余额不足，取款失败！")


if __name__ == "__main__":
    for i in range(0, 10):
        account = Account("9527", 3000)
        executor.submit(draw, account, 2500)
        executor.submit(draw, account, 1500)
```
由于并发资源竞争并不会每次准时出现，所以代码中用了 10 次循环，以期待执行中出现竞争的情况，当出现资源竞争时终端输入为：
```
本次取款:2500
本次取款:1500
当前余额为: 500	
当前余额为: 500
当前余额为: -1000	
当前余额为: -1000
```
正确的应该是在第一次取款 2500 元后的取款提示余额不足，但并发情况下出现资源竞争，导致几个线程读取到余额相同，就出现金额错的情况。可以通过给资源上锁来解决这个问题，当一个线程获取到锁后必须在（扣减金额）执行完毕后才释放，这样下一个线程阻塞等待当前线程的锁释放后才能执行，就不会出现金额错误的情况，对应代码如下：
```python
+ from threading import Lock
+ locker = Lock()

def draw(account, amount):
+   locker.acquire()
    if account.balance >= amount:
        print("本次取款:" + str(amount))
        account.balance -= amount
        print("\n当前余额为: " + str(account.balance))
    else:
        print("余额不足，取款失败！")
+   locker.release()
```
添加完代码后试试再次执行，终端输出结果为：
```
本次取款:2500

当前余额为: 500
余额不足，取款失败！
```
锁的存在保障了同一个资源有序地使用，避免了数据错误的现象。


如果是分布式应用程序的公共资源竞争，这种加锁的方式并不能起到作用，而是需要对应的分布式锁。分布式锁的具体实现可翻阅本书（《Python》编程参考）的**基于 Redis 的分布式锁实现**学习。


<Vssue :title="$title" />
