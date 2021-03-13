---
title: Python 编程风格指南
sidebar: 'auto'
date: 2021-03-12
tags:
- Python 编程参考
- Python
- 指南

categories:
 - 编程参考
---

Python 开发团队为开发者们编写了一份编程风格指南——[《Style Guide for Python Code》](https://www.python.org/dev/peps/pep-0008/)，这就是业内工程师口口相传的 PEP8 编程规范。这份风格指南里面提供了非常明确的代码案例，因此它也一直作为 Python 开发者甚至是开发团队或者公司的代码规范参考。这里挑选一些重要或者具有代表性的内容进行翻译或转述，同时也鼓励大家前往 Python 文档查看原文。


### 代码缩进
Python 代码选用 4 空格的缩进，看起来就像下面这样：
![](https://img.weishidong.com/20210312230040.png)
用代码表示则为：
```python
def example():
    EXPIRE = 3600
```
如果缩进不正确，我们将会在运行代码时得到内容类似 unindent does not match any outer indentation level 的 IndentationError 错误提示。不过这个问题不需要太放在心上，因为 IDE （例如 VSCode、PyCharm）会帮助我们检查并给出提示，同时 IDE 也提供了符合语言要求的缩进快捷键（通常是 Tab 键），我们只需要按下缩进快捷键就可以快速调整代码缩进。


### 单行字符数长度
虽然现代显示器的屏幕越来越宽，能显示的内容也越来越多，但为了保持良好的可阅读性和风格的一致性，Python 开发团队建议大家将单行字符数限制在 79 个内，不要到达 80 个字符。对于那些实在要写到一起的内容，可以采用悬挂缩进的方式编写：
```python
# 代码超过字符长度上限，但未采用悬挂缩进
def reader(name: str, path: str, storage: FileStorage, header_line: int = 1, classify: str = "csv", threshold: int = 100) -> FileStorage:

# 代码超过字符长度上限，但已采用悬挂缩进
def reader(name: str, path: str, storage: FileStorage, 
           header_line: int = 1, classify: str = "csv", 
           threshold: int = 100) -> FileStorage:
```
太长的字符确实影响阅读，采用悬挂缩进后明显方便了很多。另外，如果悬挂缩进时有符号，将符号放在下一行的行首更好，而不是像写作文一样放在行末，例如：
```python
consumer = (age
            + height
            + weight
            * threshold)
```
当然，像列表、元组、字典等内容太长的话也推荐采用悬挂缩进的方式编写：
```python
name = [
    "Java", "Python", "Golang", 
    "Rust", "C++", "C",
]


case = [
    "黄金大劫案", "珠宝大劫案", "现钞大劫案",
    "贵金属大劫案", "稀有金属大劫案",
]
```


### 模块的导入
对于模块导入的语句，指南中也有约定：


- [x] 导入模块的语句应当放置在文件注释和代码的中间，如果没有文件注释则将导入模块的语句放在文件顶部；
- [x] 导入语句自上而下，以换行符分隔；
- [x] 导入模块的语句应当按照导入类型进行位置归类，不同类以换行符分隔；
- [x] 不同模块的导入应当放置在不同行，内置模块优先，第三方库次之，本地对象置于末尾；
- [x] 从相同模块导入对象时，相同模块中的对象导入语句何以合并在一行；
- [x] 不推荐使用相对路径，而应该显式指明导入路径；



**正确的示范**：模块顺序正确、不同行导入不同模块、使用显式路径


> 示例中所带有的注释为方便读者理解，实际编程中不应在导入语句处添加注释



```python
import os  # 导入内置的 os 模块
import sys  # 导入内置的 sys 模块
from flask import Flask, request  # 从第三方库中导入对象
from project.utils import translate  # 从本地模块中导入对象
```


**错误的示范**：模块顺序不正确、同一行导入不同模块、使用相对路径等；
```python
import os, sys
from .utils import translate
from flask import Flask, request
```


### 表达式和语句中的空格
该约定的目的是为了让代码整洁且易于阅读，避免开发者阅读的时候头晕眼花，主要约定事项有：


- [x] 表达式中符号左右的对象与符号以 1 个空格进行分隔；
- [x] 表达式符号后方如果没有其它对象则不应有空格；
- [x] 除表达式外，对象与符号之间不应有空格；
- [x] 相邻行的表达式不应按照符号进行强制对齐；
- [x] 行末 `:` 符号与左侧相邻的对象之间不应有空格；



**正确的示范**：符合约定；
```python
nick = "公众号【Python 编程参考】"
if number == 300:
def send(message: bytes, host: str, name: str) -> bool:
language = ["Java", "Python"]
```


**错误的示范**：不符合约定；
```python
nick= "公众号【Python 编程参考】"
if number == 300 :
def send(message : bytes, host: str, name: str)-> bool:
language = ["Java", "Python", ]
pick     =  "You"
```


> 版权水印 微信公众号 Python 编程参考

### 多行注释
多行注释以 `"""` 符号标记，当只有 1 行内容时， 注释符号的开头和结尾在同一行；当有多行内容时， 注释符号的结尾需在单独一行，且第一行文字注释紧跟在注释符号的后面 。


**正确的示范**：符合约定；
```python
"""只有 1 行内容时，注释符号的开头和结尾在同一行"""

def consumer():
	"""消费者
    当有多行内容时，注释符号的结尾单独一行，且第一行文字注释紧跟在注释符号的后面
    """
```


**错误示范**：不符合约定；
```python
"""只有 1 行内容时，注释符号的开头和结尾在同一行，但这里并不是这样
"""

def consumer():
	"""
    消费者
    当有多行内容时，注释符号的结尾单独一行，且第一行文字注释紧跟在注释符号的后面
    但这里并不是这样"""
```


#### 异常处理


编程新手最常犯的错误就是使用 try except 包裹住一大段代码，当异常发生的时候却不知道问题到底出在哪。


- [x] 捕获明确的异常，而不是用 Exception 捕获所有异常；
- [x] try except 包裹尽量少的代码，避免因为包裹太多代码而忽略真正的问题；
- [x] try except 后可以用 else 保证代码按正常逻辑执行；
- [x] 如果涉及资源使用，应当在 try except 后用 finally 释放资源；



**正确的示范**：符合约定；
```python
try:
    resp = requests.get("", timeout=10)
except TimeoutError as ext:
    logging.error(ext)
else:
    logging.info(resp.status_code)
```


**错误的示范**：不符合约定；
```python
try:
    resp = requests.get("", timeout=10)
    html = resp.content.decode("utf-8")
    sel = Selector(html)
    logging.info(sel)
except Exception as ext:
    logging.error(ext)
```


### 控制流语句
控制流中的 return 是最容易让人忽视的问题，很多编程新手总是只记得 if 代码块和代码块中的 return，但却忘记在 else 代码块中做处理。


- [x] 所有 return 语句都应当返回表达式或者 None；
- [x] 如果没有返回值，函数中也应当显式地返回 None；
- [x] 显式地 return 应当在函数的末尾或者代码执行终止的地方出现；



**正确的示范**：符合约定；
```python
def foo(x):
    if x >= 0:
        return math.sqrt(x)
    else:
        return None

def bar(x):
    if x < 0:
        return None
    return math.sqrt(x)
```


**错误的示范**：不符合约定；
```python
def foo(x):
    if x >= 0:
        return math.sqrt(x)

def bar(x):
    if x < 0:
        return
    return math.sqrt(x)
```


> 作者标注：实际上不使用完整的 if else 代码块，用 if return 也挺好的，还能够减少 if else 的嵌套层级，是否遵守这项规范，看个人取舍。




### 条件判断语句
无论是编程新手还是经验丰富的开发者，都会写出各式各样风格的条件判断语句，糟糕。


布尔值的判断不使用 `==` 符号；
空序列不应以长度作为判断依据；
类型的判断应当使用 isinstance 函数；
对于头尾的判断不应使用切片，而使用 startwith 和 endwith 函数；


**正确的示范**：符合约定；
```python
if foo.startswith('bar'):
if greeting:
if not seq:       
```


**错误的示范**：不符合约定；
```python
if foo[:3] == 'bar':
if greeting == True:
if not len(seq):
```

<Vssue :title="$title" />


