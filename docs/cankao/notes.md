---
title: Python 注释指南
sidebar: 'auto'
date: 2021-03-12
tags:
- Python 编程参考
- Python

categories:
 - 编程参考
---

相较于既给人看也给编译器看的代码而言，注释完全就是写给人看的，因此注释要更偏向于人类阅读习惯。好的注释能够让人快速理解对象的逻辑或者含义，而不好的注释则有可能让阅读者产生另一种理解，从而把人带到坑里。


编程新手很容易产生两种截然不同的注释风格，令人头疼。一种是根本不知道要些注释或者些什么样的注释，你很难在他的代码里找到注释内容；另一种则是很喜欢在代码里写上非常详细的注释，深怕自己或者阅读代码的其他人看不懂。


相信你前面已经看过了命名参考，那也就知道其实对象在起名的时候就已经具备了表达含义的能力，我们只需要用注释表达一些处理逻辑或者特别要留意的内容即可。如果你的注释需要写的很详细或者用来标注一个函数、一个变量的作用，那么你应该考虑的是给那个对象换一个更能表达含义的名字，而不是给它加上注释。下面这样的写法，就是很不好的例子：
```![](https://img.weishidong.com/20210312225329.png)
t = int(time.time()) * 1000 # 获取 13 位时间戳
```
你为什么选择用注释的方式来表达意图，而不是给它起一个好名字呢？像下面这样：
```![](https://img.weishidong.com/20210312225329.png)
timestamp_thirteen = int(time.time()) * 1000
```
虽然一行注释都没有，但并不妨碍你读懂这行代码的作用，不是吗？


## 注释的分类


在 Python 语言中，常见的注释有以下几种：


- [x] 变量注释
- [x] 常量注释
- [x] 函数注释
- [x] 类型注释
- [x] 类注释
- [x] 文件注释



### 变量或常量注释
Python 的变量或常量注释以 `#` 符号作为标记，后续跟随 1 个空格和对应的文字描述即可。要注意的是，如果在代码尾部编写注释时需要空出 2 个空格：
![](https://img.weishidong.com/20210312225958.png)
用代码表示，就是这样：
```python
EXPIRE = 3600  # 调用方指定的时间数值
# 如果注释不在代码尾部则不需要空出 2 个空格
```
变量注释和常量注释指的是对变量值或者常量值的解释说明，例如 `EXPIRE = 3600  # 调用方指定的时间数值`，表明了这是调用方指定的数值，不能擅自改动，而不是用注释告诉我们有效时间为 3600 秒。


### 函数注释
函数注释常以 `#` 号或者 `"""` 号开头，其中 `"""` 号通常在函数名下的第一行开始，用以描述与函数相关的信息，例如：
```python
def send(message, host, name):
	pass


def send(message, host, name):
    """ 消息推送器
    将消息推送到指定服务器的指定队列中
    :param message: 消息体
    :param host: 服务器地址
    :param name: 队列名称
    :return: 推送结果
    """
    pass
```
上方展示的是 `send` 函数添加注释前和添加函数注释后的不同展现方式。


> 说明：注释中的 param 和 return 是 PyCharm 编辑器根据函数参数自动生成的注释



其实这样简单的函数不写注释也是没有问题的，只要不是编程新手，一眼就能读懂这个函数的作用。这里只是将其用作注释符号的案例，这不是自相矛盾，请读者不要深陷泥潭。


在函数内部的一些处理逻辑或者变量、常量的注释则用 `#` 符号来标记注释，例如：
```python
def send(message, host, name):
    """ 消息推送器
    将消息推送到指定服务器的指定队列中
    :param message: 消息体
    :param host: 服务器地址
    :param name: 队列名称
    :return: 推送结果
    """
    # 消息类型检查与转换
	if isinstance(message, str):
        message = message.encode("utf-8")
    if not isinstance(message, bytes):
        return False
    result = self._sent(message, host, name)  # 执行消息发送
   	return result
```
### 类型注释
有静态语言（例如 Java、Golang）编程经验的朋友都知道，用静态语言编写代码在定义对象时必须要指定对象的类型，例如 int、 string、 []int 等，如果没有定义则会在编译时报错。虽然 Python 不是静态语言，也不支持编译时的类型检查，但是它支持类型注释。


Python 的类型注释以 `:` 符号为标记，符号前为对象名称，符号后为对象类型，例如：
```python
number: int
name: str
```
赋值语句保持原格式不变，即：
```python
number: int = 1003
name: str = "公众号【Python 编程参考】"
EXPIRE: int = 3600
```
除了支持常量和变量的类型注释之外，对于容器以及容器中元素的类型也是支持的，例如：
```python
from typing import Tuple, List, Dict


class FileStorage:
    pass


class DataStorage:
    pass


coupons: Tuple[str, str, int] = ("折扣券", "新用户专享", 5)
message: List[str, str, str, str, str] = ["请大家", "关注", "公众号", "Python 编程参考", "获取新资料"]
information: Dict[str: str] = {"作者": "韦世东", "公众号": "Python 编程参考"}
file_storage: FileStorage
data_storage: DataStorage
storage: Dict[str: FileStorage]
```
要注意的是，容器类型需要从 typing 模块中导入。容器类型在使用的时候也是相当简单且直观，具体可参考上面给出的示例代码即可。


**Python 的类型注释似乎有些狐假虎威，毕竟不是真的会检查，但我们不要忽视带来的改变。借助类型注释，我们可以在开发过程中更好地保持代码风格统一，同时也能够减少代码在运行时发生类型异常。**


### 类和函数的类型注释
既然 Python 支持类型注释，那在函数定义的时候是不是可以指明参数类型和返回值类型呢？


当然了！要说这类型注释真正发挥有效作用的地方，还是函数参数和返回值的标记。变量、常量的类型注释作用相对较弱，似乎不指明类型也不会有大的影响，但是函数参数和返回值的类型注释可以有效减少运行时的类型异常问题。函数添加参数类型注释和返回值类型注释的对比如下：
```python
# 函数未添加类型注释
def reader(name, threshold= 100):
    if len(name) > threshold:
        return None
    pass


# 函数添加类型注释
class FileStorage:
    pass


def reader(name: str, threshold: int = 100) -> FileStorage:
    file_storage = FileStorage()
    if len(name) > threshold:
        return file_storage
    pass
```
添加了类型注释的代码看起来和静态语言代码非常接近，传入的参数是什么类型、返回的结果是什么类型一目了然，调用方小王在看到小陈编写的带有类型注释的 reader 函数时，很清楚自己应该传递什么样的参数，函数执行后返回什么样的结果。


如果不给 reader 函数添加注释，那么对于调用方小王来说 reader 就是一个不透明的盒子，只知道要传递参数，返回结果，这样很容易传递类型不正确的值，从而造成运行时的类型异常。如果给 reader 传递的 threshold 不是 int 类型就会得到 TypeError 的运行时错误。


> 版权水印 韦世东的技术专栏 [https://www.weishidong.com](https://www.weishidong.com)



在实际开发过程中，我们可能不会点击每一个函数，跳转到函数定义时的源代码处，而是通过 import reader 的方式将其导入，在使用的时候调用它即可，并不会感知函数类型，这时候函数类型注释的意义在哪里呢？


如果我们编写代码时使用的 IDE 是 PyCharm，只需要在写完函数名后将鼠标悬停在函数名称上，这时候 PyCharm 便会用一个小的悬浮框显示函数的类型注释，显示效果如下：
![](https://img.weishidong.com/20210312230013.png)
另外，如果我们使用 `"""`  符号为函数编写文字注释，那么悬浮框还会显示文字注释的内容，显示效果如下：
![](https://img.weishidong.com/20210312230025.png)
> 感谢 PyCharm 开发团队为 Python 开发者提供如此趁手的开发工具！

真正的一目了然，这让函数的调用者能够清楚地知道自己在做什么、怎么做、将得到什么样的结果。


**注意**：类类型注释与函数的类型注释是相同的，这里不再重复介绍。

### 文件注释


文件注释通常写在文件的开头，后续才是代码内容。文件注释通常被用于表明法律或版权信息、作者介绍以及文件内容的相关信息。Python 的文件注释以 `#` 符号或者 `"""` 符号标记，通常情况下，单行内容用 `#` 符号标记，而多行内容用 `"""` 标记。文字的格式并没有要求，可以按照团队约定的风格或者自己的习惯编写，例如：
```python
"""
@author: 韦世东
@time: 2020-12-05
@description: 关于文件注释的描述与示例
@message: 微信公众号【Python 编程参考】
"""

# comment: 2020-12-05 韦世东 关于文件注释的描述与示例 微信公众号【Python 编程参考】
```

<Vssue :title="$title" />