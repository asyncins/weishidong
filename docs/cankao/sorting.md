---
title: 重要排序算法的原理与代码实现
sidebar: 'auto'
date: 2021-02-18
tags:
- Python 编程参考
- 算法
- Python

categories:
 - 编程参考
---

> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识



排序算法是工作中常用的一类算法，也是面试中必问的知识点。


## 排序算法的分类


按照排序算法的实现方式，可以粗略的分为**比较类排序算法**和**非比较类排序算法**。这里的**比较**指的是在排序过程中通过比较的手段进行位置选定的方式。


按照数字出现的位置，可以分为**稳定的排序算法**和**不稳定的排序算法**，这里的**稳定**指的是假如 a、b 两个值相等，无论排序多少次，它们的**位置**都**不会交替**，排序结果不会出现 a,b 和 b,a 交替的情况。


有开发者为几种排序算法制作了一份属性表，通过表格我们可以清晰地了解到每一种排序算法的特性。

| 算法名称 | 时间复杂度均值 | 时间复杂度优值 | 时间复杂度差值 | 空间复杂度 | 稳定性 |
| --- | --- | --- | --- | --- | --- |
| 冒泡排序 | O(n) | O(n) | O(n) | O(1) | 稳定 |
| 插入排序 | O(n) | O(n) | O(n) | O(1) | 稳定 |
| 归并排序 | O(nlogn) | O(nlogn) | O(n) | O(logn) | 稳定 |
| 桶排序 | O(n+k) | O(n+k) | O(n) | O(n+k) | 不稳定 |
| 选择排序 | O(n) | O(n) | O(n) | O(1) | 不稳定 |
| 快速排序 | O(nlogn) | O(nlogn) | O(n) | O(logn) | 不稳定 |
| 堆排序 | O(nlogn) | O(nlogn) | O(nlogn) | O(1) | 不稳定 |



排序算法如此之多，我们不必要掌握所有算法的实现，这里挑选几款较有代表性（抹茶色）的进行分析演示。接下来，我们就来学习这些算法的排序过程和具体代码实现。


## 冒泡排序的原理与代码实现


冒泡排序的英文写作 Bubble Sort，它是一种简单易懂的排序算法，也是大家在学校接触算法时的入门选择。冒泡排序按照从左到右（实际上也可以从右到左，这里我们遵循大多数原则）的顺序比较相邻的两个元素大小，如果左边的元素大于右边的元素，则把它们的位置互换。这种一次次比较与交换，感觉就像一个气泡从水里浮上来一般，冒泡因此得名。


假设待排序的列表为 [1, 5, 0, 9, 2]，冒泡排序的操作过程如下图所示：
![](https://img.weishidong.com/20210312220118.png)
冒泡排序通常会经过很多轮次，每一轮的操作均为比较与位置交换，直到执行完所有轮次。上图中的第一轮第二次以将5 和 0 进行比较，由于 5 比 0 大，所以它们的位置互换，列表从 [1, 5, 0, 9, 2] 变成 [1, 0, 5, 9, 2]，其他轮次以此往复。不同轮次的排序结果如下图所示：

![](https://img.weishidong.com/20210312220133.png)
虽然在第二轮已经完成了排序结果，但实际上排序的轮次依然会进行，如果想要在排序完成后立即停止，可以考虑增加一个标识，标记该轮是否有位置交换，如果没有则视为排序完成。


聪明的你从图示中应该想到了，遍历一轮可以用 for 循环实现，在每轮中按次操作则是在之前的 for 循环中再次嵌套一个 for 循环，因此推导出排序函数的基本结构为：
```python
def bubble_sort(meta):
    for:
        for:
    return meta
```
有了基本结构之后，我们继续构思其他的代码实现。轮与次，通过设定 for 循环的几个关键值即可实现，但要考虑循环越界的问题，还有按照从左到右的顺序进行比较，因此推导出排序函数代码为：
```python
def bubble_sort(meta):
    length = len(meta)
    for i in range(length):
        for k in range(1, length-i-1):
    return meta
```
最后是相邻元素的比较操作与元素位置替换操作，这就更容易了！完整的冒泡排序的 Python 代码实现如下：
```python
def bubble_sort(meta):
    length = len(meta)
    for i in range(length):
        for k in range(1, length-i-1):
            if meta[k] > meta[k+1]:
                meta[k], meta[k+1] = meta[k+1], meta[k]
    return meta
```
我们传入待排序的列表，并打印每个轮次的排序结果，用以印证之前的分析。代码为：
```python
def bubble_sort(meta):
    length = len(meta)
    for i in range(length):
        for j in range(1, length - i):
            print(meta)
            print("第 {} 轮 第 {} 次, {}>{}".format(i + 1, j, meta[j - 1], meta[j]))
            if meta[j - 1] > meta[j]:
                meta[j - 1], meta[j] = meta[j], meta[j - 1]
    return meta


source = [1, 5, 0, 9, 2]
result = bubble_sort(source)
print(result)
```
代码执行后终端输出结果如下：
```python
[1, 5, 0, 9, 2]
第 1 轮 第 1 次, 1>5
[1, 5, 0, 9, 2]
第 1 轮 第 2 次, 5>0
[1, 0, 5, 9, 2]
第 1 轮 第 3 次, 5>9
[1, 0, 5, 9, 2]
第 1 轮 第 4 次, 9>2
[1, 0, 5, 2, 9]
第 2 轮 第 1 次, 1>0
[0, 1, 5, 2, 9]
第 2 轮 第 2 次, 1>5
[0, 1, 5, 2, 9]
第 2 轮 第 3 次, 5>2
[0, 1, 2, 5, 9]
第 3 轮 第 1 次, 0>1
[0, 1, 2, 5, 9]
第 3 轮 第 2 次, 1>2
[0, 1, 2, 5, 9]
第 4 轮 第 1 次, 0>1
[0, 1, 2, 5, 9]
```
从输出信息中可知，实际上第二轮第三次已经达到了目的，不过由于 for 循环的设定，它依旧执行了后面的轮循。我们可以按照上面介绍的增加标识的方式优化排序。冒泡排序优化后的具体代码为：
```python
def bubble_sort(meta):
    length = len(meta)
    for i in range(length):
        exchange = False
        for j in range(1, length - i):
            if meta[j - 1] > meta[j]:
                meta[j - 1], meta[j] = meta[j], meta[j - 1]
                exchange = True
        if not exchange:
            return meta
    return meta
```
代码编写完成后，我们再来回顾一下算法的稳定性。由于是相邻元素的比较和位置交换，所以当列表中存在值相等的相邻元素时，无论进行多少次排序，它们排序后的位置都是稳定不变的，例如 [1, 5, 5, 2, 9]，假设这里的第一个 5 我们称为 a，第二个 5 我们称为 b，那么排序的结果永远都是 [1, 2, a, b, 9]，不可能出现 [1, 2, b, a, 9]。

## 归并排序的原理与代码实现


归并排序的英文写作 Merge Sort，归并排序算法中的**归并**指的是将 2 个已经排序完成的序列合并称为一个序列的操作。归并排序算法有 2 个关键点：拆、并，即先将列表拆分为多个最小子序列，接着将两两最小子序列逐步合并成为新的子序列，在合并的时候比较元素，直到只剩下 1 个序列，列表排序完成。了解过算法的朋友应该看出来了，这里用的是分而治之的思想。


假设待排序的列表为 [1, 5, 0, 9, 2]，归并排序中的的拆分操作过程如下图所示：
![](https://img.weishidong.com/20210312220148.png)
这种拆分是最细致的，最后会将列表拆成多个仅有 1 个元素的子列表。每一轮合并的时候对元素进行排序，合并完成即对应的两个子列表排序完成。归并排序中的合并操作过程如下图所示：


![](https://img.weishidong.com/20210312220206.png)
归并排序的第一部分是拆，而且是无限循环地拆，因此很容易联想到使用递归算法实现，对应的代码结构如下：
```python
def recursion(meta):
    if len(meta) <= 1:
        return meta
    pass
```
既然是分而治之，那就取列表的中间进行拆分，即拆成左、右 2 个子列表，对应代码如下：
```python
def recursion(meta):
    if len(meta) <= 1:
        return meta
    middle = len(meta) // 2
    left = recursion(meta[:middle])
    right = recursion(meta[middle:])
```
拆完之后需要合并，于是乎需要一个合并的函数。这个合并子列表的函数在合并的过程中比较左、右 2 个子列表中的元素，小的放在左侧，大的放在右侧，稍微构思一下代码就出来了：
```python
def merge(left, right):
    result = []
    i, k = 0, 0
    while i < len(left) and k < len(right):
        if left[i] <= right[k]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[k])
            k += 1
    result += left[i:]
    result += right[k:]
    return result
```
现在将拆和并连接在一起，得到的便是归并算法的具体实现：
```python
def recursion(meta):
    if len(meta) <= 1:
        return meta
    middle = len(meta) // 2
    left = recursion(meta[:middle])
    right = recursion(meta[middle:])
    return merge(left, right)


def merge(left, right):
    result = []
    i, k = 0, 0
    while i < len(left) and k < len(right):
        if left[i] <= right[k]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[k])
            k += 1
    result += left[i:]
    result += right[k:]
    return result
```


同样的，为了验证我们的分析过程和思路，可以在代码中插入一些 print 语句打印出拆、并过程中的列表变化，对应代码如下：
```python
def recursion(meta):
    print("meta: {}".format(meta))
    if len(meta) <= 1:
        return meta
    middle = len(meta) // 2
    left = recursion(meta[:middle])
    right = recursion(meta[middle:])
    return merge(left, right)


def merge(left, right):
    print("left: {}, right: {}".format(left, right))
    result = []
    i, k = 0, 0
    while i < len(left) and k < len(right):
        if left[i] <= right[k]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[k])
            k += 1
    result += left[i:]
    result += right[k:]
    print("merge result: {}".format(result))
    return result


source = [1, 5, 0, 9, 2]
result = recursion(source)
print(result)
```
代码执行后终端输出信息为：
```python
meta: [1, 5, 0, 9, 2]
meta: [1, 5]
meta: [1]
meta: [5]
left: [1], right: [5]
merge result: [1, 5]
meta: [0, 9, 2]
meta: [0]
meta: [9, 2]
meta: [9]
meta: [2]
left: [9], right: [2]
merge result: [2, 9]
left: [0], right: [2, 9]
merge result: [0, 2, 9]
left: [1, 5], right: [0, 2, 9]
merge result: [0, 1, 2, 5, 9]
[0, 1, 2, 5, 9]
```
从终端输出的信息可知，归并算法会将列表拆分为仅有 1 个子元素的子列表，接着在合并的时候先对元素进行比较，通过比较结果选择合并后的位置，循环往复，直到所有的子列表合并为 1 个列表，排序完成。

由于归并排序也采用了相邻元素相互比较的方式，所以归并排序和冒泡排序一样，都是稳定的排序算法。

## 堆排序的原理与代码实现


堆排序的英文写作 Heap Sort，这是一种借助堆结构的特性设计的一种排序算法。堆是一个类似完全二叉树的数据结构，利用堆结构实现元素排序的基本概念如下图所示：
![](https://img.weishidong.com/20210312220223.png)
堆结构分为大顶堆和小顶堆，大小指的是顶堆（根结点）的值是所有结点中值的最大或最小，且根结点的值大于（大顶堆）/小于（小顶堆）左右孩子结点的值。这里以 [1, 5, 0, 9, 2] 为例，图示表明大、小顶堆堆差异：
![](https://img.weishidong.com/20210312220238.png)
大顶堆的根结点是 9，9 大于左右孩子结点 5 和 0；如果将 5 视为根结点，则 5 大于左右孩子结点 1 和 2；小顶堆则反过来，根结点是 0，0 小于左右孩子结点 2 和 1；如果将 2 视为根结点，则 2 小于左右孩子结点 9 和 5；


由此可推导，升序降序可以通过选择大顶堆或小顶堆实现。将堆中的结点按层和左右进行编号，把编号映射到列表中就能得到排序好的列表。堆排序的基本思路是将待排序的列表构造成一个堆，此时整个序列的最大/最小值就是根结点。将根结点的值与末位结点的值进行互换，此时末位结点的值便是最大/最小的，然后将剩余的 N-1 个元素重新构造成一个堆，循环往复，直到排序完成。


要实现堆排序，首先需要将列表转换为堆，这里设定为大顶堆。接着对堆中的各个结点进行值的比较和位置互换操作，最后把排序后的大顶堆转换为列表即可。由此可得出基本的代码结构：
```python
def create_big_heap(meta)

def heap_sorted(meta)

def node_location_option(meta, start, end)
```
这里比较难的是 node_location_option 函数，即结点位置操作的函数。具体思路是：传进来一个列表，同时传入需要比较的元素下标，接着根据堆的结构取元素的值，将值进行比较，满足条件则互换值，对应的代码如下：
```python
def node_location_option(meta, start, end):
    root = start
    while True:
        child = 2 * root + 1
        if child > end:
            break
        if child + 1 <= end and meta[child] < meta[child + 1]:
            child += 1
        if meta[root] < meta[child]:
            meta[root], meta[child] = meta[child], meta[root]
            root = child
        else:
            break
```
按照之前的分析，我们需要先创建一个大顶堆，也就是利用 node_location_option 来进行乾坤大挪移，把列表转换为大顶堆。因为堆结构中只有父结点才会有子结点，所以循环的时候取能够作为父结点的位置，然后把列表父结点的下标、其余结点数量传递给结点位置操作函数 node_location_option，对应代码如下：
```python
def create_big_heap(meta):
    for start in range((len(meta) - 2) // 2, -1, -1):
        node_location_option(meta, start, len(meta) - 1)
    return meta
```
剩下的就是往复循环地对顶堆结点值和末堆结点值进行比较和值互换操作，对应代码如下：
```python
def heap_sorted(meta):
    for end in range(len(meta) - 1, 0, -1):
        meta[0], meta[end] = meta[end], meta[0]
        node_location_option(meta, 0, end - 1)
    return meta
```
最后将 create、 heap_sorted 和待排序的列表组合起来，对应代码如下：
```python
def heap_sort(meta):
    big_heap = create_big_heap(meta)
    return heap_sorted(big_heap)


def create_big_heap(meta):
    for start in range((len(meta) - 2) // 2, -1, -1):
        node_location_option(meta, start, len(meta) - 1)
    return meta


def heap_sorted(meta):
    for end in range(len(meta) - 1, 0, -1):
        meta[0], meta[end] = meta[end], meta[0]
        node_location_option(meta, 0, end - 1)
    return meta


def node_location_option(meta, start, end):
    root = start
    while True:
        child = 2 * root + 1
        if child > end:
            break
        if child + 1 <= end and meta[child] < meta[child + 1]:
            child += 1
        if meta[root] < meta[child]:
            meta[root], meta[child] = meta[child], meta[root]
            root = child
        else:
            break


source = [1, 5, 0, 9, 2]
result = heap_sort(source)
print(result)
```
实际上在创建大顶堆或者小顶堆的时候，元素的位置是稳定的，但是在不同结点的值位置互换时有可能出现位置选择不固定的情况，也就是排序不稳定。

<Vssue :title="$title" />

