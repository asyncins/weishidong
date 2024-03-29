---
title: 状态图 State
sidebar: 'auto'
date: 2020-07-20
tags:
 - 绘图指南

categories:
 - 实用技能
---

> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识



状态指的是事物生命周期中或者转化临界点时的形态或者态势。当我们按下计算机电源键的时候就改变了计算机的状态，它由关机状态变成了启动状态。家里的洗衣机洗衣服的时候分为几个阶段，例如清洗、漂洗和甩干等，当处于漂洗阶段时，我们也可以称之为漂洗状态。状态是大家都理解的一个词，这里就不咬文嚼字地解释了。

在 UML 中，状态图用来表示不同状态之间的变化，并给出了状态变化序列的起点和终点。在程序设计中，我们经常会遇到类似“用户提交了个人信息，现在处于验证状态”、“用户个人信息审核通过，现在处于已验证状态”。



## 状态图的表示

在 UML 中，约定以圆角矩形来表示状态，状态的迁移或者改变以实心圆和环形圆表示，状态迁移的方向以箭头表示。下图是状态图中主要组成元素的图示。

![image-20200719144334846](https://img.weishidong.com/image-20200719144334846.png)

其中，实心圆代表初始状态，环形圆代表终止状态。状态以横线划分为两个区域，上半区显示的是状态名称，下半区显示的是状态中发生的活动。

状态图中的活动约定了入口动作、动作和出口动作，即 entry、exit 和 do。其中，入口动作表示系统进入该状态时要发生的动作、出口动作表示系统离开该状态时要发生的动作、动作是系统处于该状态时要发生的动作。这么一听，还是觉得有点绕。我们以一个文件写入模块为例，来看看应该怎么表示状态。

在编程中，要向文件写入内容时需要打开文件，写完之后需要关闭文件，期间可以调用一些文本处理函数或者计算类函数，然后将处理后得到的字符写入文件。在 Python 语言中，可以用上下文管理器来实现这样的操作逻辑，具体代码如下：

```python
class WriteToFile:

    def __enter__():
        # 入口动作
        pass

    def __exit__():
        # 出口动作
        pass

    def do_transe():
        # 动作-转换格式
        pass

    def do_reverse():
        # 动作-值的反转
        pass

    def do_doubling():
        # 动作-值翻倍
        pass

    def write():
        # 动作-写入文件
        pass

```

在 Python 中，以 with 关键字调用 WriteToFile 时，程序会先执行魔法函数 enter，在其他函数运行完毕后执行魔法函数 exit，期间可以自由调用和执行其他函数。以状态图来表示这段代码的话，具体如下。

![image-20200719144248030](https://img.weishidong.com/image-20200719144248030.png)

## 状态的迁移

实际工作中，状态的迁移往往是复杂多变的，而不是只有一个初始状态和一个终止状态，期间可能会经历多种状态的变化。以洗衣机为例，通常有初始化、工作和关闭等几个状态，当我们按下电源时它的系统会进入初始化状态，接着根据我们选择的指令进入工作状态，最后当我们再次按下电源键时它就进入关闭状态。

在这个过程中，按下电源键是一个引起状态发生迁移的事件，使洗衣机从关闭状态进入初始化状态。初始化是一个自动执行的过程，不需要外力去改变，等它初始化完成后就可以洗衣服了。这个过程的状态图如下所示。

![image-20200719144157184](https://img.weishidong.com/image-20200719144157184.png)

为了保证用户的安全，洗衣机都会有锁机制。当它开始工作时会上锁，工作结束后或者关闭时才会释放锁，锁住的时候我们无法打开洗衣机盖，这样就确保了人身安全。锁在工作状态中会自动上锁和释放锁，但在关机时也会自动释放锁，用状态图来表示的话，应该是下面这样。

![image-20200719145213953](https://img.weishidong.com/image-20200719145213953.png)



## 子状态

现实总是比理论更复杂，我们常常会遇到一个状态下包含多个状态的场景，例如洗衣机工作的时候分为进水状态、漂洗状态、甩干状态，又比如风扇在工作的时候可以处于强风状态和摇头状态。有些情况下，状态只能顺序迁移，有些时候会拥有多个不同状态。

在 UML 中，在一个状态内部顺序迁移的状态称为顺序子状态，在一个状态内部同时拥有多个不同状态称为并发子状态。

### 顺序子状态

刚才讲到的洗衣机工作的集中状态就是顺序子状态，它们的父状态是工作。挺好理解的，所以绘图的时候也比较简单，一个父状态里面包裹着多个子状态，子状态之间线性关联即可，具体如下图所示。

![image-20200719154358546](https://img.weishidong.com/image-20200719154358546.png)

### 并发子状态

上面提到的风扇工作时的强风和摇头时同时进行的，因此强风和摇头是风扇工作的子状态，你甚至还可以在这个时候开启灯光，具体表示如下。

![image-20200719154802940](https://img.weishidong.com/image-20200719154802940.png)

子状态之间以虚线进行分隔，表示它们是并发关系。



## 历史状态

有时候我们需要表达一个生命周期，例如风扇的风速从弱到强会经历几个过程。我桌面上这个迷你小风扇的风速调节只有一个按键，我必须按几次才能够得到我想要的风速，这时候状态就像是一个循环，具体表示如下。

![image-20200719155833815](https://img.weishidong.com/image-20200719155833815.png)

如果生命周期中有多个状态，那么最初的那个状态以圆圈和 H 标记。



## 状态的连接点

在 UML 2.0 中新增了一些符号，其中就有为状态图设定的入口和出口符号。一个状态可能有多个入口，这时候可以用多入口进行表示。例如洗衣机工作状态包含了很多子状态，我们可以选择直接甩干，而不用前面的进水和漂洗，这就是洗衣机工作状态的多入口场景。出口也可以有多个，例如洗衣机工作结束后自动停止和断电直接停止可以看作两个出口。状态连接点的具体表示如下。

![image-20200719160913892](https://img.weishidong.com/image-20200719160913892.png)

连接点以圆圈表示，入口符号以空心圆或实心圆表示，出口符号以带有 **X** 的空心圆或实心圆表示。要注意的是，在 UML 2.0 规范中约定连接点以空心圆表示，这里配色仅仅是为了好看，如果要保持和 UML 规范一致，应当采用空心圆。



## 实战 英雄联盟启动状态图

学了几十分钟，想必你已饥渴难耐了。话不多说，我们尝试绘制英雄联盟游戏程序启动的状态图。首先，我们知道游戏启动分为几个阶段：初始化、登录和主界面，由此可以画出如下所示的基本结构。

![image-20200719162739398](https://img.weishidong.com/image-20200719162739398.png)

初始化的时候通常会做一些校验文件或检查更新的操作，这就意味着初始化状态中还包含有字状态，具体表示如下图所示。

![image-20200719163323817](https://img.weishidong.com/image-20200719163323817.png)

如果一切顺利，那么就会进入到启动环节。启动的时候可以由玩家输入账户密码，但如果之前选择了自动登录的话是可以实现自动化的。启动中状态包含账号已配置和未配置两个子状态，同时还包含登录状态，具体表示如下图所示。

![gqymfE](https://img.weishidong.com/gqymfE.png)

要注意的是，一些子状态是顺序进行的，一些则是并发进行的。上图以箭头指向表示顺序关系，以虚线表示并发关系。登录成功后程序会打开游戏主界面，此时整个游戏程序启动完成。