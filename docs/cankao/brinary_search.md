---
title: 二分查找算法的原理与具体实现
sidebar: 'auto'
date: 2021-02-10
tags:
- Python 编程参考
- 算法

categories:
 - 编程参考
---

> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识



二分查找的英文写作 Brinary Search，它算法是一种高效的元素查找算法。二分的具体思路是将一个列表一分为二地拆分，根据拆分时的中间元素选择查找左边的子列表或者右边的子列表，如果拆分时的中间值正好是我们要找的，那可以直接返回结果。


要注意的是，列表本身有序是二分查找算法的实现前提，否则无法根据某个中间位置的值划分左右子列表。它的重点是查找，并不是排序。


假设待查找的列表为 [1, 5, 0, 9, 2]，查找的数值为 9，二分查找的操作过程如下图所示：
![](https://img.weishidong.com/20210312220323.png)
列表会经过很多轮的拆分，每一轮拆分取中间位置进行截断，分为左右 2 个子列表，接着根据中间值与目标数值的比较结果选择在左或者右边的子列表中查找（也就是继续拆分），直到找到数值或者列表拆分至最小（只剩下 1 个元素，无法再拆分）列表即可返回结果。


从图示中可知，列表的拆分是一个**重复的操作**，可以用**递归**实现，推导出代码基本结构如下：

```python
def binary_search():
		if 
				return binary_search()
    return result
```

在基础结构上，再思考一分为二的操作以及中间值的比较，很轻松就可以推导出这部分代码：

```python
def binary_search(meta, position, length, x):
    if length >= position:
        middle = int(position + (length - position) / 2)
        if meta[middle] == x:
            return middle
```

接下来通过中间值与目标数值的大小比较，选择左子列表或者右子列表。选择后的子列表需要继续拆分，所以可以用 return binary_search 这样的调用方式让它循环往复：

```python
def binary_search(meta, position, length, x):
    if length >= position:
        middle = int(position + (length - position) / 2)
        if meta[middle] == x:
        		return middle
        elif meta[middle] > x:
            return binary_search(meta, position, middle - 1, x)
        else:
            return binary_search(meta, middle + 1, length, x)
```

如果目标数值不在列表中，返回 None，如果在列表中则返回下标。

<Vssue :title="$title" />