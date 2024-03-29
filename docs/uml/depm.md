---
title: 部署图 Deployment
sidebar: 'auto'
date: 2020-07-20
tags:
 - 绘图指南

categories:
 - 实用技能
---

> 使用快捷键 Ctrl+D 或 Command+D 可快速收藏本技术专栏 收获爬虫架构/爬虫逆向/存储引擎/消息队列/Python/Golang相关知识




程序开发完毕后大概率要部署到服务器上。根据业务需求，一个程序有可能部署在一个服务器上，也有可能部署在多个服务器上（分布式）。服务器与程序之间的关系、服务器与服务器之间的关系就用部署图来表示。



## 什么是节点

在部署图中，一个硬件就是一个节点，而不是说一个服务器就是一个节点。节点分为两种：

1. 能够执行程序的处理器 Processor；
2. 不能执行程序的设备 Device;

我举个例子你就懂了，处理器就是平时工作中我们说的服务器，而设备就是硬件防火墙、路由器、交换机等。在 UML 中，节点通常用立方体来表示，节点的类型用构造型进行说明，具体表示如下。

![image-20200720144026064](https://img.weishidong.com/image-20200720144026064.png)

## 部署图

构件或者程序在部署图中以矩形表示，但将构件或程序与节点结合时可以有多种表达方式，具体如下。

![image-20200720144747661](https://img.weishidong.com/image-20200720144747661.png)

上图描述了 3 中不同的表达方式，在实际应用中我们只需要选择合适的一种即可。另外，节点与节点之间的关联关系用实心线表示，具体如下图所示。

![image-20200720145206009](https://img.weishidong.com/image-20200720145206009.png)

上图描述了分布式场景下服务端多个处理器之间的关系以及服务端与客户端的关系。



## 更好的表示方式

说实话，一个个立方体看得头都方了。时代在进步，我们的设计图里应该有更美观、更直观、更具有表现力的图形元素，立方体实在是太方了。diagrams 里提供了比立方体更形象的图形元素，例如防火墙、交换机、显示器、计算机、手机等。

![image-20200720150326572](https://img.weishidong.com/image-20200720150326572.png)

能够直接用图形表示的可以直接使用，不能够用的再用 UML 部署图中约定的立方体。你说防火墙设备和处理器设备用图标表示它不比立方体看起来更舒坦吗？

![image-20200720151225504](https://img.weishidong.com/image-20200720151225504.png)

