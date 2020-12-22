---
title: 程序设计的基石 UML
date: 2020-07-21
tags:
 - 时序图
 - 用例图
 - 流程图
 - 泳道图
 - 状态图
 - 构件图
---

很多学习编程不久的朋友会有诸如“**这个模块应该具备哪些功能呢？**”、“**这个类应当包含哪几个函数？**”、“**在用户下单购物的场景需要实现哪些接口呢？**”、“**从开机到关机，系统会经历哪些状态？**”这样的疑问，**如果你不知道如何设计程序**、**规划模块的时候总是漏掉功能**、**写代码总是改**、**不知道什么是好的程序设计**，那这个专栏很适合你。

专栏将**手把手**教你学会绘制结构清晰、配色优秀、引人注目的各种类型的 UML 图，就算你之前没有绘图基础，一点都不会也没关系。只要花 5 天时间就能取得很大进步，学完就能够绘制专业的、标准的、规范的 UML 图，学习成果看起来像下面这样：

![image-20200719114955911](http://can.sfhfpc.com/uPic/image-20200719114955911.png)



![SSBxfm](http://can.sfhfpc.com/uPic/image-20200720163103690.png)

![image-20200720162544623](http://can.sfhfpc.com/uPic/image-20200719155833815.png)



## UML 是什么，为什么要学？

软件开发过程中，设计几乎要占用三分之一的时间。一个好的系统或者程序要经过各种各样的辩证，要求无论从从时间角度、空间角度还是状态角度来观察，它都能表现得足够好。

**那么问题来了，怎么样才能让系统表现得够好呢？**

答案就是建模。统一建模语言（Unified Modeling Language，UML）是一种面向对象设计的建模工具。UML 独立于任何具体程序设计语言，突破了软件的限制，广泛吸收了其他领域的建模方法，并根据建模的一般原理，结合了软件的特点，因此具有坚实的理论基础和广泛性，是软件建模语言的集大成者。

![80c5G0](http://can.sfhfpc.com/uPic/80c5G0.jpg)

::: tip

温馨提示：UML 不仅可以用于软件建模，还可以用于其他领域的建模工作哦。

:::

UML 采用一组**图形符号**来**描述软件模型**，这些图形符号具有简单、直观和规范的特点，开发人员学习和掌握起来比较简单。所描述的软件模型可以直观地理解和阅读。由于统一规范，因此能够保证不同人绘制出来的模型相近。

掌握 UML 各种图的绘制方法和每种图适应的场景和它们本身具备的优势，能够让我们在程序设计的阶段发现问题，进而找到合适的解决办法，避免后期改动。比如在设计阶段我们常常会遗漏功能点，等开发到一半的时候才想起来漏掉了一个重要的组成部分，但是加进来又需要改动大部分代码。如果在设计阶段你通过用例图来整理功能点，那有大概率能够在这个过程中发现遗漏的那部分，这样就避免了代码的改动。

![](http://can.sfhfpc.com/uPic/image-20200720133138539.png)

再比如你在设计用户购物相关的接口时，你如何确定各个环节接口的关系呢？又如何确定具体需要哪些组件呢？如果你在设计阶段通过构件图描述购物、结算、库存相关的接口，你就会发现还需要补充一个支付接口，还会发现结算和支付之间存在实现关系和依赖关系，发现了这些状况后，问题就能提前解决。



## 专栏针对哪些人群

这是为广大 IT 工程师准备的学习资料，如果你已经拥有多年程序设计开发经验那专栏对你帮助不大，但如果你工作中遇到了上面提到的那些问题，而且还没有很好的办法避免问题的出现，那么这个专栏很适合你。

在我学习 UML 之前，图都是随手画的。但这样的问题是大家用的图形和表达方式都不同，同事看不懂我画的图，我也看不懂同事画的图，这不仅增加了沟通成本，还很容易产生误解，导致产生更多的工作。

![Tzfpk1](http://can.sfhfpc.com/uPic/Tzfpk1.jpg)



## 专栏参考了哪些资料

在写这个专栏前我入手了一本《UML 基础、案例与应用》，专栏上很多知识都参考自此书。在学习的过程中，我对一些观点或者思路进行了研究，所以专栏里面会有一些加了我的感受或者加了我的理解的内容，但我认为这对学习有帮助。这本书是译本，而且国外是出了名的喜欢创造名词，所以学习的时候有些地方挺别扭的。

如果专栏上有你也不是很认可的内容，我推荐你去翻阅 UML 文档或者购买这本书，多多参考对学习有帮助。



## 应该学到什么程度

既然你来到了专栏，我觉得你应该把专栏中介绍到的内容都学完，建议亲自动手实践。UML 的规范并不是每个人都能掌握的，在实际工作中可以根据团队状况约定绘图标准，一些繁杂的标记方式或者绘图方式可以简化，只要团队能够看明白就可以了。
