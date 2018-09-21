---
title: 开发技巧
date: 2018-09-11 09:20:28
pageid: skills
---

### 健忘

#### 1、在MAC终端中用sublime、VSCode打开目录

```sh
$ vi ~/.zshrc
```

在vi编辑器增加两行

```
alias sublime='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'
alias vscode='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'
~                                                                                            
"~/.zshrc" 2L, 166C
```

进入文件夹，执行，即可打开文件夹

```sh
$ vscode ./sublime .
```

### 2、设置npm镜像

1.通过config命令

```sh
$ npm config set registry https://registry.npm.taobao.org
$ npm info underscore （如果上面配置正确这个命令会有字符串response）
```

2.命令行指定

```sh
$ npm --registry https://registry.npm.taobao.org info underscore
```

3.编辑 .npmrc 加入下面内容

```
$ vi ~/.npmrc
```

添加

```
registry = https://registry.npm.taobao.org
npm config set registry https://registry.npmjs.org/
```

### 3、sublime配置eslint自动修复

安装sublime插件SublimeLinter-eslint、SublimeLinter-contrib-eslint、ESLintAutoFix

配置ESLintAutoFix的usersetting

```
{
  "eslint_path": "/usr/local/bin/",
  "show_panel": true
}
```

最后安装项目需求安装所需要的插件，如下

```sh
$ sudo npm i eslint-plugin-react -g
$ sudo npm i eslint-plugin-babel -g
$ sudo npm i eslint -g
$ sudo npm i babel-eslint -g
$ sudo npm i eslint-config-standard -g
$ sudo npm i eslint-plugin-import -g
$ sudo npm i eslint-plugin-node -g
$ sudo npm i eslint-plugin-standard -g
```

### 4、sublime如何支持jsx

打开.js, .jsx 后缀的文件;

打开菜单view， Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel)，选择babel为默认 javascript 打开syntax

### 4、VirtualBox虚拟机ubuntu如何远程登录

1⃣️设置网路连接方式，保证和电脑处于同一网段（能ping通）
2⃣️进入虚拟机安装openssh-client和openssh-server

```sh
$ sudo apt-get install openssh-client
$ sudo apt-get install openssh-server
```

3⃣️启动ssh服务

```sh
$ sudo /etc/init.d/ssh start
$ sudo /etc/init.d/ssh restart(重启ssh服务)
```

4⃣️ssh root@192.168.0.68

```
$ ssh sunny@192.168.0.68
```

5⃣️停止服务

```
$ sudo /etc/init.d/ssh stop
```

