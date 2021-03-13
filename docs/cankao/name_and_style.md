---
title: 命名选择与风格指南
sidebar: 'auto'
date: 2021-02-21
tags:
- Python 编程参考

categories:
 - 编程参考
---


听说起名能够让大部分工程师犯难，项目需要起名、类需要起名、接口需要起名、变量需要起名、数据库需要起名……


起名其实并不难，只不过平时你没有好好梳理而已。还有，不要怕错，虽然我们总是秉承着认真谨慎的思想展开工作，但有些时候奔放一些会更好。

编程界常用的几种命名风格分别是：**大驼峰风格**、**小驼峰风格**、**匈牙利风格**和**蛇形风格**。不同编程语言所推崇的风格亦不相同，例如 Java 开发者、Golang 开发者习惯使用驼峰风格，而 Python 开发者则推崇蛇形风格。但也有例外，像 Rust 开发者就会同时使用驼峰风格和蛇形风格。


命名风格没有绝对的好与坏，但开发者们保持同一种风格总是有好处的。统一风格的命名能够让我们编写的代码看上去更加整齐，代码阅读起来不会让人有情绪起伏，阅读的效率相对更高。我们先来看看几种命名风格的示例：


- [x] **大驼峰风格**：每个单词的首字母均以大写呈现，例如 UserModel、 CrontabRule、 PandaCount 等;
- [x] **小驼峰风格**：第一个单词的首字母以小写呈现，例如 userModel、 crontabRule、 pandaCount 等；
- [x] **匈牙利风格**：命名风格剑走偏锋，不是很好描述，例如 m_lpszStr 表示指向一个以 0 字符结尾的字符串的长指针成员变量；
- [x] **蛇形风格**：用下划线作为单词之间的连接符号，所有字母均以小写呈现，例如 user_model、 crontab_rule、 panda_count 等；  



上面所说的推崇某一种风格或者习惯某一种风格，更多的时候指的是变量或函数的命名风格，而类的命名风格、接口的命名风格大多数开发者在使用 Java、Golang、Python 等语言时都会选用驼峰风格。


## 语言无关的通用命名参照表


编程界的起名只需要抓住几个关键点即可：


- [x] 名称的用途，这个名称用来做什么？是变量名？类名？还是表名？
- [x] 名称的意图，这个名称要表达什么？描述？操作？



### 错误的起名
常见的**错误起名**大体是这样的：


- [ ] 变量名/对象名：xx_list、xx_json、redis、mysql；
- [ ] 类名/接口名：Tanslate、DoSave;



啊，为什么说这些是错误的起名呢？


以 xx_list 为基础模板，常见的例如 car_list、shop_list、coupon_list，这里使用了 list 作为后缀，表达的是集合的意思，但问题就出现在这儿！如果有一天 list 变成了 set 或者 tuple（也就是数据类型发生变化），那么 xx_list 就会引发误解。正确的名称应该是 cars、shops、coupons 这样的复数来代替可能发生变化的 xx_list，从语言角度上来说，cars 是针对于人类世界的理解，car_list 更偏向技术世界。


再来看 Translate，这是一个动词，与之对应的名词是 Translation。这个词如果用来作为函数名，是没有问题的，但是作为类名、变量名则是不合适的。


你或许想问，为什么 redis、mysql 会是错误的？


你仔细回想一下，redis 和 mysql 在项目中通常用来做什么，存储数据对吧。以 redis 为例，我们可以用它作为数据缓存，提高读效率，这个场景下 redis 扮演的角色是缓存，更合适且更准确的的命名是 cache，因为它能够准确的表达**意图**。


如果你想将缓存组件从 redis 换成 mamcache，是不是名字还得改？但如果用 cache 作为名称，就可以不用改了。




### 按照这个做就好


笔者本身不是英语很好的人，但基本常识还是了解的——变量名/类名/常量名/接口名/文件名/项目名用名词、函数名用动词。起名这件事，我们不求完美，只求不出现明显错即可，不要钻牛角尖。如果你不知道如何起名，参照下面的表格即可。



| **类别** | **类型** | **常用组合词** | **示例** | **说明** |
| :--- | :--- | :--- | :--- | :--- |
| 类名/接口名 | 名词 | Interface | ShopInterface | 表示接口 |
| 类名/接口名 | 名词 | Cache | UserCache | 表示缓存 |
| 类名/接口名 | 名词 | Storage | ElasticStorage | 表示存储 |
| 类名/接口名 | 名词 | Multi | MultiFileIntercace | 表示多个 |
| 变量名/常量名 | 名词 | 复数 | titles | 表示多个 |
| 变量名/常量名 | 名词 | multi | multi_sku | 表示多个 |
| 变量名/常量名 | 名词 | prev/current/net | prev_/current_/net_ | 表示上一个/当前/下一个 |
| 变量名/常量名 | 名词 | info | author_info | 表示信息 |
| 变量名/常量名 | 名词 | structure | shop_structure | 表示结构 |
| 函数名 | 动词 | get/set | get_id/set_id | 表示获取/设置 |
| 函数名 | 动词 | take | take_money | 表示拿走 |
| 函数名 | 动词 | do | do | 表示做什么事 |
| 函数名 | 动词 | make | make_car | 表示制造 |
| 函数名 | 动词 | generate | generate_email | 表示生成 |
| 函数名 | 动词 | extract | extract_user_id | 表示提取 |
| 函数名 | 动词 | execute | execute | 表示执行 |
| 函数名 | 动词 | find | find_number | 表示查找 |
| 函数名 | 动词 | load | load_source | 表示加载 |
| 函数名 | 动词 | read | read | 表示读取 |
| 函数名 | 动词 | bind | bind | 表示绑定 |
| 函数名 | 动词 | sent/send | sent/send | 表示发送 |
| 函数名 | 动词 | submit/commit | submit/commit | 表示提交 |
| 函数名 | 动词 | parse | parse_publish | 表示解析 |
| 函数名 | 动词 | lock/unlock | lock/unlock | 表示锁定/解锁 |
| 函数名 | 动词 | add/remove | add/remove | 表示添加/移除 |
| 函数名 | 动词 | create/delete | create/delete | 表示创建/删除 |
| 函数名 | 动词 | luanch/run | luanch/run | 表示运行 |
| 函数名 | 动词 | observe | observe | 表示观察 |
| 函数名 | 动词 | push/pull | push/pull | 表示推送/拉取 |
| 函数名 | 动词 | collect | collect | 表示收集 |
| 函数名 | 动词 | translate | translate | 表示转换 |





## Python 的命名参考


### 命名风格参考
在开发过程中需要定义名称的有：常量名、变量名、函数名、类名、接口名、包名、文件名和项目名，其中：


- [x] 变量名采用小写蛇形风格，例如 coupon_name、 user_last_name 等；
- [x] 常量名采用大写蛇形风格，例如 COUPON_NAME、 USER_LAST_NAME 等；
- [x] 函数名采用小写蛇形风格，并要求以动词开头，例如 take_last_name、 translate 等；
- [x] 类名采用大驼峰命名风格，例如 Storage、 ImageDownload 等；
- [x] 接口名采用大驼峰命名风格，例如 StorageInterface、 AbstractDownload 等；
- [x] 包名采用小写蛇形命名风格，例如 file_storage、 components 等；
- [x] 文件名采用小写蛇形命名风格，例如 urils.py、 remote_cache.conf 等；
- [x] 项目名采用小写蛇形命名风格，例如 sequence、 translation_machine 等；



根据上述命名风格参考，一个风格统一的项目（translation_machine）结构大体如下：
```
translation_machine
├── components
│   ├── __init__.py
│   ├── coupons.py
│   ├── downloads
│   │   ├── __init__.py
│   │   ├── files.py
│   │   └── images.py
│   ├── permissions.py
│   └── storages
│       ├── __init__.py
│       ├── cache_remote.py
│       └── sql.py
├── main.py
├── models
│   ├── __init__.py
│   ├── coupons.py
│   ├── permissions.py
│   ├── roles.py
│   └── users.py
├── static
│   └── logo.png
└── utils.py
```
Python 的命名风格并不是本文莫须有推荐出来的，这个风格来自 Python 官方的编程风格指南 ——《[Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)》，也就是大家熟知的 PEP8。


### 起一个有意义的名字
看完命名风格之后，我们还需要了解如何起一个合适的名字。有些开发者喜欢简短的名称，例如 n、 k、 err 等；有些开发者喜欢用完整的单词表达对象代表的含义，例如 phone_number、 warriors_basketball_team 等。实际上不同的团队、不同的开发者背景甚至是不同的使用场景都会影响起名时的选择，“合适”本就是一个表达相对含义的词，但如果放任团队成员随意为对象取名，又会为协作开发和后续维护带来困扰。


小陈是简洁流派、小王是完整流派，它们二人合作时很容易产生意见分歧。下面是小陈提供给小王的进行调用函数：
```python
def number(s, t, n, t1, b):
    sl = len(s)
    nl = len(n)
    if sl == t:
        return s
    if nl == t1:
        return b + n
    return ""
```
小王看了函数和需要传递的参数表示虽然看得懂，但是理解起来有点绕，后面如果要改动函数，还需要花费一些时间来理解编写这个函数时的意图。还不如写成：
```python
def get_number(phone, tel, threshold_phone, threshold_tel, area_code=0773):
    len_phone = len(phone)
    len_tel = len(tel)
    if len_phone == threshold_phone:
        return phone
    if len_tel == threshold_tel:
        return "{}-{}".format(area_code, tel)
    return ""
```
虽然代码的作用是相同的，但小王的写法看起来确实比小陈的更能表达函数的作用，几乎不需要注释就能够让阅读代码的人知道 get_number 函数的主要作用是提取电话号码。


但并不是说简短的命名完全是不可取的，Golang 就推崇简单明了的起名方式。实际上在一些场景中，简短的名称是不会影响代码阅读和函数理解的，例如：
```python
def translate(k):
    if isinstance(k, str):
        k = k.encode("utf-8")
        return k
    if isinstance(k, int):
        k = str(k).encode("utf-8")
        return k
    return None
```
在 translate 函数中，只有 1 个参数  k，并且这个参数并没有复杂的计算或者转换逻辑，无论它取名为 k 或是 param 都不会影响我们的阅读，因此 translate 函数的参数取名为 k 没有问题。


《代码整洁之道》推荐开发者给对象起一个有意义、含义明确、无副作用、不会引起误导的名称，名字长一些不要紧，重要的是要让人一眼就明白它的含义。起名并不是无规矩可寻，我们需要做到以下几点：


- [x] 类名、包名、文件名、项目名、变量名、常量名用名词，例如 ticket_vending_machine、 document_management 等；
- [x] 函数名用动词或者动词配合名词，例如 get、 take、 push、 extract、 extract_digest、 get_number、 take_tickets 等；  
- [x] 项目名、包名、文件名、类名对应的单词可以用复数形式表示，例如 components、 utils 等；
- [x] 长度控制在 5 个单词内，追求见名知意，例如 pen_coupons、 wine_glass 等；
- [x] 不要占用语言或者系统保留词，例如 class、 sum、 random 等； 
- [x] 不要使用简短的字母或者单词缩写作为名称，例如用 n、 ed、 pam 这样的简写词来表示 number、extract_digest、 paramter 等应当具有明确含义的词；
- [x] 类名、包名、文件名、项目名、变量名、常量名不应包含动词；
- [x] 名称中除了字母和下划线外，不应包含其他字符，例如 `#`、 `$`、 `-`、 `&` 等；
- [x] 接口名、抽象类名、基类名、异常类名、错误类名以特定的单词开头或结尾，例如 TimeException、 StorageBase、 PermissionInterface、 ParseError 等；



看到这里，可能有些朋友还是不明白，怎么样才算**见名知意**呢？假设我们要为一个时间对象取名，不能用 t 或者 tim 这样的名称，因为这样起名后我们还需要在后面加上注释，才能够让别人看懂它代表的是什么，而应该用 runtime、 cycle_time 这些能够**准确描述**时间**类型**或者**属性**的词。


之所以不推崇用简洁的单个字母或者单词缩写来命名，是因为代码被阅读的次数总是远远多于被编写的次数，而且代码除了让编译器和能够看懂外，也需要让人能够看懂。


> 版权水印 韦世东的技术专栏 https://www.weishidong.com




### 正反例参考


Python 中一切皆可称为对象，我们一起来欣赏不同对象起名时的正例和反例吧！


#### 变量名正反例参考
**正例**：采用小写蛇形命名风格，力求表达完整含义，不参杂特殊字符且长度控制在 5 个单词；
```python
timestamp_tens = int(time.time())
timestamp_thirteen = int(time.time()) * 13
price_unit = ["分", "角", "元"]
numebrs = (1, 3, 5, 7, 9)
```
**反例**：不遵循正例要求，采用其他风格、简写、参杂特殊字符或长度超过 5 个单词；
```python
nickName = "Python 编程参考"
AuthorName = "韦世东"
message_For_Reader = "关注公众号 Python 编程参考获取新版资料"
sl = "10k+"  # salary of month
the_salary_of_one_month_unit_k = 10
job-name = "研发工程师"
```


#### 常量名正反例参考
**正例**：采用大写蛇形命名风格，力求表达完整含义，不参杂特殊字符且长度控制在 5 个单词；
```python
MAX_NUMBER_THRESHOLD = 50000
EXPIRE = 3600
PRICE_UNIT = ("分", "角", "元")
```
**反例**：不遵循正例要求，采用其他风格、简写、参杂特殊字符或长度超过 5 个单词；
```python
max_number_threshold = 50000
expireNumber = 3600
JobName = "研发工程师"
AUTHORNAME = "韦世东"
PRICE_¥ = "元"
EXPIRE2COOKIE = 60
```


#### 函数名正反例参考
**正例**：采用小写蛇形命名风格，力求表达完整含义，不参杂特殊字符，以动词或者动词配合名词表示且长度控制在 5 个单词；
```python
def get()
def set()
def translate()
def take_tickets()
def extract_author()
```
**反例**：不遵循正例要求，采用其他风格、简写、参杂特殊字符，使用形容词、不明其意的词或长度超过 5 个单词；
```python
def kn()
def GET()
def trans()
def translation
def str2bytes()
def take_tel_number_from_phone_str()
def extractAuthor()
def ExtractAuthor()
```


#### 类名正反例参考
**正例**：采用大驼峰命名风格，力求表达完整含义，不参杂特殊字符，长度控制在 5 个单词，特殊的基类、抽象类、接口、错误类、异常类以对应的单词作为开头或者结尾；
```python
class UserModels
class ParseException
class Sotrage
class SotrageInterface
class AbstractPermission
```
**反例**：不遵循正例要求，采用其他风格、简写、参杂特殊字符，长度超过 5 个单词，特殊的基类、抽象类、接口、错误类、异常类无明显区分；
```python
class userModels
class Parse_Exception
class Stg
class Storage  # storage interface
class permission  # abstract permission
class StorageForCSVAndXLSFile
class Png2Jpeg
```
#### 
#### 文件名正反例参考
**正例**：采用小写蛇形命名风格，力求表达完整含义，不参杂特殊字符且长度控制在 3 个单词；
```
components.py
utils.py
models.py
file_storages.py
```
**反例**：不遵循正例要求，采用其他风格、简写、参杂特殊字符，长度超过 3 个单词；
```
fileStorage.py
dln.py
file2image.py
captcha_slider_jigsaw_interface.py
SETTINGS.py
Config.ini
```

<Vssue :title="$title" />

