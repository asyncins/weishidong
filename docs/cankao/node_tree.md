---
title: 地泽万物，无限极分类树状结构生成算法
sidebar: 'auto'
date: 2021-03-11
tags:
 - 算法
 - Python
 - Python 编程参考
categories:
 - 编程参考
---
后端研发的同学对无限级分类肯定映像深刻，当初花了不少时间吧？

无限级分类树状结构的应用场景很多，例如后端研发需要把用户相关权限读取出来并生成树状结构，前端研发拿到权限树之后可以按照结构展示用户有权限访问的栏目；再例如网页上的栏目分级：
![图片.png](https://img.weishidong.com/1610779816020-6347da32-58cd-4f4f-982e-89c625f3907b.png)
作者在初次接触树状结构生成需求的时候，也是挠头，后来找到了一个代码少且清晰易懂的生成算法：递归。


首先，确保数据库中存储的类别信息如下：

```python
[
    {"id": 1, "name": '电器', "parent": 0},
    {"id": 2, "name": '水果', "parent": 0},
    {"id": 3, "name": '家用电器', "parent": 1},
    {"id": 4, "name": '电吹风', "parent": 3},
    {"id": 5, "name": '电风扇', "parent": 3},
    {"id": 6, "name": '台灯', "parent": 3},
    {"id": 7, "name": '商用电器', "parent": 1},
    {"id": 8, "name": '大型电热锅', "parent": 7},
]
```

字段 parent 记录的是此条目的父编号，例如电吹风的父编号是 3，即电吹风属于家用电器，而家用电器的父编号是 1，即家用电器属于电器类产品。电吹风条目跟电器条目并无直接的标识进行关联，但需要用树状结构来表明 电器 <- 家用电器 <- 电吹风  的关系。


> 版权水印 微信公众号 Python 编程参考



通过 parent 寻找父编号，并建立关联关系的操作实际上是循环往复的，直到找完所有的结点，这跟递归算法非常契合，很轻松便能写出对应的递归代码：

```python
def generate_tree(source, parent):
    tree = []
    for item in source:
        if item["parent"] == parent:
            item["child"] = generate_tree(source, item["id"])
            tree.append(item)
    return tree
```

只需要将数据库中存储的信息传递给 generate_tree 函数即可。这段递归代码在往复循环的过程中通过 parent 来寻找子结点，找到子结点后将其添加到树中。完整代码如下：

```python
import json


def generate_tree(source, parent):
    tree = []
    for item in source:
        if item["parent"] == parent:
            item["child"] = generate_tree(source, item["id"])
            tree.append(item)
    return tree


if __name__ == '__main__':
    permission_source = [
        {"id": 1, "name": '电器', "parent": 0},
        {"id": 2, "name": '水果', "parent": 0},
        {"id": 3, "name": '家用电器', "parent": 1},
        {"id": 4, "name": '电吹风', "parent": 2},
        {"id": 5, "name": '电风扇', "parent": 3},
        {"id": 6, "name": '台灯', "parent": 3},
        {"id": 7, "name": '商用电器', "parent": 1},
        {"id": 8, "name": '大型电热锅', "parent": 7},
    ]

    permission_tree = generate_tree(permission_source, 0)

    print(json.dumps(permission_tree, ensure_ascii=False))
```

终端输出结果如下图所示：
![Untitled.jpeg](https://img.weishidong.com/1610780651699-24b22409-325c-47cc-b985-01fa297da430.jpeg)


## 使用缓存优化算法


递归算法中有很多重复的计算，这些计算不仅占用额外资源，还会降低函数执行效率，因此需要对递归进行优化。这里选用缓存优化法提升函数执行效率。


基本思路是每次找到结点关系后将此条目的编号添加到一个列表中缓存起来，代表此条目已找到结点关系。当往复循环执行函数时再次遇到此条目可以跳过。代码改动很简单，增加一个缓存列表和控制流语句即可：

```python
def generate_tree(source, parent, cache=[]):
    tree = []
    for item in source:
        if item["id"] in cache:
            continue
        if item["parent"] == parent:
            cache.append(item["id"])
            item["child"] = generate_tree(source, item["id"], cache)
            tree.append(item)
    return tree
```

至此，无限级分类树状结构生成算法完成。


你学会了吗？

<Vssue :title="$title" />
