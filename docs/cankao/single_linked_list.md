---
title: 单链表反转实现
sidebar: 'auto'
date: 2021-03-07
tags:
- Python 编程参考
- 算法
- Python

categories:
 - 编程参考
---

> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识



单链表反转是面试中常问的问题，作者之前面试阿里巴巴时就被这道题击中过，当时做了丰富的准备，没曾想倒在了算法题上。


> 暗语：你看看，多么重要！


链表是一种物理存储单元上非连续的存储结构，链表中元素的逻辑顺序通过链表的指针安排次序。相对于那些需要连续空间的数据结构来说，链表的优势是可以利用零散（非连续性）的空间，链表优势如下图所示：
![](https://img.weishidong.com/20210312230205.png)
其他普通的结构（本文可以粗浅地理解为非链表结构）存储数据时，申请的空间是连续的，这要求存储空间中必须有连续的空余空间，那些不连续的空间无法被利用。由于链表指针的存在，链表结构可以利用那些不连续的物理存储空间，再通过链表指针让它们在逻辑上是连续的。


> 其它细致的信息请翻阅百科


单链表指的是单向链表，这是相对于双向链表的称呼。链表中的每个结点会存储相邻节点的位置信息，单链表中每个结点只存储下一个结点的位置信息，双链表中每个结点存储上一个结点和下一个结点的位置信息，具体区别如下 2 幅图所示：
![](https://img.weishidong.com/20210312230218.png)
![](https://img.weishidong.com/20210312230230.png)
单链表比较著名的应用场景是 LRU 缓存淘汰，具体细节可以深入了解 LRU 缓存淘汰算法。下面我们一起动手写起来吧！


## 单链表反转算法实现


实现单链表反转的前提是实现一个链表结点结构，从上面的介绍可知，单链表的结点存储 2 个信息：数据内容和指针，代码自然在脑海中 biu biu biu 浮现：
```python
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None
```
单链表的指针是单向的，反转其实就是让它们的指向反过来。其实挺简单的，看到代码就懂了：
```python
class Solution:
    def reverse(self, head):
        prev = None
        current = head
        while current:
            middle, current.next = current.next, prev
            prev, current = current, middle
        return prev
```
很多文章或者算法平台到此结束，像我们这样初入门的小朋友根本不知道怎么用。不慌，这个坑我踩过，我来帮你。上面构建了结点，要实现单链表，我们只要把几个结点关联起来即可，把一个结点的 next 设置为另一个结点就可以了，例如创建一个 A->B->C 的单向链表可以这么写：
```python
first_node = ListNode("A")
second_node = ListNode("B")
third_node = ListNode("C")
first_node.next = second_node
second_node.next = third_node
```
这时候， first_node 就是这个链表的表头，它们 3 个一起组成了一个单向链表。反转的时候，先实例化 Solution 对象，然后调用 reverse 函数并把链表的表头 first_node 传进去:
```python
solution = Solution()
result = solution.reverse(first_node)
```
如果你想查看这个单向链表的内容顺序，可以这样写：
```python
print(result.val, result.next.val, result.next.next.val)
```
终端输出结果为 C B A，完全符合要求，完成。

<Vssue :title="$title" />
