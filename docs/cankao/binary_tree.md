---
title: 二叉树前序遍历/中序遍历/后序遍历实现
sidebar: 'auto'
date: 2021-02-15
tags:
- Python 编程参考
- 算法

categories:
 - 编程参考
---


> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识


二叉树 Binary tree 指的是是每个结点最多有 2 个子结点，且子结点有左右之分的树状结构。二叉树的结构和算法并不复杂，一些问题可以抽象为二叉树后求解。另外，面试的时候有相当大的概率考察二叉树的几种顺序遍历方式。所以这是一个重要的知识点。
![图片.png](https://img.weishidong.com/20210312211030.png)
上图左侧的结构就是二叉树的通用表示，为了便于理解，右侧的二叉树以 ABCDE 为结点打上了标识。


## 二叉树的几种遍历顺序


二叉树的遍历指的是以不重复访问结点的方式遍历二叉树的所有结点，如果在遍历过程中遇到没有子结点的结点则在遍历完成后返回。二叉树的遍历顺序通常分为：


- [ ] 前序遍历：根结点 - 左结点 - 右结点
- [ ] 中序遍历：左结点 - 根结点 - 右结点
- [ ] 后序遍历：左结点 - 右结点 - 根结点



遍历顺序其实是访问结点的先后之分，不同的遍历顺序是为了适应不同的需求场景，例如二分搜索树的中序遍历符合从小到大的顺序，遍历完成后得到的是一个有序列表。前/中/后序遍历中的序，指的是根结点的访问顺序，例如中序遍历指的是根结点在访问次序的中间；


## 树的构造和遍历的代码实现
二叉树遍历的基础是构造一个仅有左结点和右结点的树状结构，在得到结构之前，我们需要创造结点对应代码如下：
```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
```
多个结点才能组成二叉树，这里按照上方图示中的 ABCDE 构造一棵二叉树：
```python
tree = TreeNode("A")
tree.left = TreeNode("B")
tree.right = TreeNode("C")
tree.left.left = TreeNode("D")
tree.left.right = TreeNode("E")
```
二叉树的前/中/后序遍历，实际上就是按照不同的结点顺序将结点值放到一个空列表里，当所有结点访问完成后，遍历完成，返回列表。结点的遍历是一个重复的过程，例如前序遍历会一直按照**根结点 - 左结点 - 右结点**的顺序访问结点，直到访问完所有结点，看到这里，聪明的你肯定又想起了递归，遍历的递归如下：
```python
def recursion()
		if:
    	  return
    return recursion()
```
现在我们需要编写一个遍历二叉树的类，这个类中有前/中/后序三个遍历函数，对于代码的分析上面已经提到了，这里直接看代码：
```python
class Solution:
    def __init__(self):
        self.traverse = []

    def preorder(self, node):
        # 前序遍历
        pass
    
    def inorder(self, node):
        # 中序遍历
        pass
    
    def postorder(self, node):
        # 后序遍历
        pass
```
前/中/后序遍历函数的代码结构是一样的，仅仅是函数名和将结点值添加到列表时的顺序不同而已。思路是传入一个结点，按照前/中/后序的要求，按照次序将结点值添加到列表，具体代码实现如下：
```python
class Solution:
    def __init__(self):
        self.traverse = []

    def preorder(self, node):
        # 前序遍历
        if node:
            self.traverse.append(node.val)
            self.preorder(node.left)
            self.preorder(node.right)
        return self.traverse

    def inorder(self, node):
        # 中序遍历
        if node:
            self.inorder(node.left)
            self.traverse.append(node.val)
            self.inorder(node.right)
        return self.traverse

    def postorder(self, node):
        # 后序遍历
        if node:
            self.postorder(node.left)
            self.postorder(node.right)
            self.traverse.append(node.val)
        return self.traverse
```
在使用时，先按照上面的方式构造二叉树，然后实例化 Solution 类，接着按需调用遍历函数，将二叉树实例对象传递给遍历函数即可，例如中序遍历：
```python
solution = Solution()
in_result = solution.inorder(tree)
```
输出结果为['B', 'D', 'E', 'A', 'C']，完全按照中序遍历 **左结点 - 根结点 - 右结点**的次序，符合预期，完成。

<Vssue :title="$title" />