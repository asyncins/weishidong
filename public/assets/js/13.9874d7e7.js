(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{495:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("SSH 是 Secure Shell 的缩写，耿直地翻译过来可以称作安全外壳协议。我们可以借助 SSH 协议连接到远程服务器并完成身份校验操作，也就是说使用了 SSH 密钥进行身份验证可以免去每次都输入密码的繁琐操作，同时账户安全性也得到大幅提高。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.weishidong.com/carbon8937589kjahyf87q.png",alt:""}})]),s._v(" "),a("p",[s._v("以 Centos 为例，SSH 默认存放在 "),a("code",[s._v("~/.ssh")]),s._v(" 目录下，我们可以通过 "),a("code",[s._v("$cd ~/.ssh && ls")]),s._v(" 组合命令查看目录下存放的 SSH 密钥文件。如果目录下什么文件都没有代表服务器未生成 SSH 密钥，否则你将会看到类似 "),a("code",[s._v("id_rsa")]),s._v(" 和 "),a("code",[s._v("id_rsa.pub")]),s._v(" 这样的文件。")]),s._v(" "),a("h3",{attrs:{id:"生成-ssh-密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh-密钥"}},[s._v("#")]),s._v(" 生成 SSH 密钥")]),s._v(" "),a("p",[s._v("业内工程师通常会使用非对称算法 RSA 来生成一对密钥——公钥和私钥，在终端输入以下命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ssh-keygen -t rsa -C "vansenb@foxmail.com"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("参数 "),a("code",[s._v("-t")]),s._v(" 和 "),a("code",[s._v("-C")]),s._v(" 并非必填项，但我们可以借助它们来指定生成时候使用的算法（RSA）和个人标识（邮箱）。"),a("code",[s._v("ssh-keygen")]),s._v(" 的完整含义是 "),a("code",[s._v("ssh key generating")]),s._v("，也就是生成 SSH 键（密钥）。输入上方命令并回车，终端会给出如下提示:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Generating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第一行是提醒我们正在生成一对密钥；第二行则是让我们选择密钥存放的文件路径，通常我们都会选择使用默认路径，此时不用输入任何路径，直接回车即可；回车后终端给出如下提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Enter passphrase (empty for no passphrase): \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("它提示我们输入一串密码短语，这里不输入任何值也不会影响生成结果，直接回车即可；回车后终端给出如下提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Enter same passphrase again:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里是让我们再次输入一遍密码短语，免得我们在第一次输入的时候误操作。如果上一步没有输入值，那么这里也直接回车即可；回车后终端给出如下提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Your identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:/k7eBzEwIUHIjh0osGBEkoRMLKKbCV4XzyhHJ3ffsj0 vansenb@foxmail.com\nThe key's randomart image is:\n+---[RSA 3072]----+\n|%O   o o+...     |\n|O+. .++o oo      |\n|=  ..+O.. .o.    |\n|o  o.+oo   oo.   |\n|o+. +   S   +o   |\n|+.     .   ..E   |\n|        . .  ..  |\n|         + .  .  |\n|         .+ ..   |\n+----[SHA256]-----+\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("从提示中我们可以看到密钥存放的文件路径，默认情况下公钥和私钥都存放在 "),a("code",[s._v("～/.ssh")]),s._v(" 目录下，这也是为什么一开始我们要去 "),a("code",[s._v("~/.ssh")]),s._v(" 目录下查看密钥文件的原因。")]),s._v(" "),a("h3",{attrs:{id:"免密登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免密登录"}},[s._v("#")]),s._v(" 免密登录")]),s._v(" "),a("p",[s._v("通常情况下，我们会用 "),a("code",[s._v("ssh username@ip")]),s._v(" 命令登录服务器，执行命令后终端会提示我们输入密码。更好的做法是借助 SSH 密钥帮助我们验证身份，直接省去输入密码的步骤。")]),s._v(" "),a("p",[s._v("前面学会了如何生成 SSH 密钥，接下来我们将学习如何实现云服务器的免密登录。首先按照上面的介绍"),a("strong",[s._v("在自己的计算机上")]),s._v("生成密钥对，并复制公钥文件 "),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" 中的内容（可以用 "),a("code",[s._v("cat ~/.ssh/id_rsa.pub")]),s._v(" 命令查看公钥文件内容），也就是下面一长串")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh-rsa AAAA ... ... 5ztuiXs= vansenb@foxmail.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("从 "),a("code",[s._v("ssh-rsa")]),s._v(" 开始，直到个人标识结束，全部复制。")]),s._v(" "),a("p",[s._v("接下来到目标服务器（也就是你想要免密登录的云服务器，假设云服务器的公网 IP 是 10.1.1.1）上操作。在云服务器的 "),a("code",[s._v("~/.ssh")]),s._v(" 目录下新建一个名为 "),a("code",[s._v("authorized_keys")]),s._v(" 的文件，并将刚才复制的你的个人计算机生成的公钥字符串写入到 "),a("code",[s._v("authorized_keys")]),s._v(" 中。如果你使用的是 vim 编辑器，那么命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd ~/.ssh\n$ vim authorized_keys \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用 vim 编辑器打开文件后按 "),a("code",[s._v("i")]),s._v(" 键进入编辑模式，使用键盘快捷键 "),a("code",[s._v("Ctr V")]),s._v(" 粘贴刚才复制的公钥字符串。接着按 "),a("code",[s._v("ESC")]),s._v(" 键进入 vim 编辑器的命令行模式，输入 "),a("code",[s._v(":wq")]),s._v(" 并回车。此时你计算机中的公钥已经在云服务器上存放了一份，当你需要登录的时候，只需要输入：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh root@10.1.1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后按下回车即可，如果是第一次登录到这台云服务器，终端会提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("The authenticity of host '10.1.1.1 (10.1.1.1)' can't be established.\nECDSA key fingerprint is SHA256:nGvmS+JKzQf1gG+Nzc0QN/qS6xSp1iV0rJFP1dILel4.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这时候我们输入 "),a("code",[s._v("yes")]),s._v(" 并回车即可。回车之后终端给出了新的提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Warning: Permanently added '10.1.1.1' (ECDSA) to the list of known hosts.\nLast login: Wed Dec 23 21:43:28 2020 from 111.94.33.65\n\nWelcome to Cloud Elastic Compute Service !\n\n[root@iZ1nmehZ ~]# \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这代表我们不需要输入密码即可通过 SSH 协议连接远端服务器了，免密登录成功！")]),s._v(" "),a("h3",{attrs:{id:"免密登录失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免密登录失败"}},[s._v("#")]),s._v(" 免密登录失败")]),s._v(" "),a("p",[s._v("有些服务器中的 "),a("code",[s._v("sshd")]),s._v(" 服务配置并未开启公钥登录选项，如果上面的 "),a("code",[s._v("ssh root@10.1.1.1")]),s._v(" 回车后终端显示的不是云服务器相关信息，而是输入密码的话，就需要我们到云服务器上开启 "),a("code",[s._v("sshd")]),s._v(" 服务的公钥登录配置。")]),s._v(" "),a("p",[s._v("在云服务器上执行 "),a("code",[s._v("$ vim /etc/ssh/sshd_config")]),s._v(" 命令，进入到 "),a("code",[s._v("sshd")]),s._v(" 配置文件后找到 "),a("code",[s._v("PubkeyAuthentication")]),s._v(" 项，删除该项的注释符 "),a("code",[s._v("#")]),s._v(" 并确保该项对应的开关为 "),a("code",[s._v("yes")]),s._v("。错误的配置和正确的配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#PubkeyAuthentication no  # -> 错误的配置\n\nPubkeyAuthentication yes  # -> 正确的配置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("一顿操作猛如虎，操作完之后重新启动 "),a("code",[s._v("sshd")]),s._v(" 服务，重启命令为 "),a("code",[s._v("service sshd restart")]),s._v("。")]),s._v(" "),a("p",[s._v("这时候再在个人计算机中执行 "),a("code",[s._v("ssh root@10.1.1.1")]),s._v(" 命令，就不会让你输入密码了，免密登录成功！")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("当然，除了用个人计算机连接云服务器之外，云服务器与云服务器之间也可以这么配置。")])]),s._v(" "),a("h3",{attrs:{id:"免用户名和-ip-登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免用户名和-ip-登录"}},[s._v("#")]),s._v(" 免用户名和 IP 登录")]),s._v(" "),a("p",[s._v("虽然我们省去了输入密码的步骤，不过用户名和 IP 地址也不短。如果想要省略用户名和 IP 地址，可以通过配置 "),a("code",[s._v("~/.ssh/config")]),s._v(" 实现。默认情况下 "),a("code",[s._v("~/.ssh")]),s._v(" 目录下是没有 "),a("code",[s._v("config")]),s._v(" 文件的。我们可以通过 "),a("code",[s._v("$ vim ~/.ssh/config")]),s._v(" 创建。接着写入以下配置信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host s-crawl\nHostName 10.1.1.1\nPort 22\nUser root\nIdentityFile ~/.ssh/id_rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("Host")]),s._v(" 代表云服务器昵称、"),a("code",[s._v("HostName")]),s._v(" 为云服务器的公网 IP 地址、"),a("code",[s._v("Port")]),s._v(" 代表连接时使用的端口号、"),a("code",[s._v("User")]),s._v(" 代表连接时选用的用户名、"),a("code",[s._v("IdentityFile")]),s._v(" 代表本地私钥文件的路径。配置完成后退出编辑器，这时候我们就可以用云服务器昵称登录云服务器啦，在终端输入 "),a("code",[s._v("$ ssh s-crawl")]),s._v(" 即可。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("在拥有多台服务器后，你就能感受到这种登录方式是多么的便捷，运维同学已经习以为常了呢！")])])])}),[],!1,null,null,null);e.default=t.exports}}]);