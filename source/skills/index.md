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
### 5、阿里云mongodb数据库远程访问

1⃣️打开配置文件

```sh
$ vi /etc/mongod.conf

修改成
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
```
2⃣️修改安全组，开放27017端口
3⃣️启动

```sh
$ service mongod start
```
4⃣️远程访问


### 6、阿里云安装mysql数据库和使用(Ubuntu)

1⃣️安装

```sh
$ apt install mysql-server
$ apt isntall mysql-client
$ apt install libmysqlclient-dev
```

2⃣️测试安装是否成功

```sh
$ netstat -tap | grep mysql
```

出现

```
tcp6       0      0 [::]:mysql              [::]:*                  LISTEN      2209/mysqd
```

3⃣️添加用户和设置管理员root密码

删除不需要用户名和密码就能登录

```sh
$ mysql -uroot
$ use mysql;
$ delete from user where user = "";
$ flush privileges;
```

给root设置密码

```sh
$ set password = password("您的密码");
```

创建允许本地访问的用户

```sh
$ create user sunny@localhost identified by '123456';
```

创建允许公网IP访问的用户

```sh
$ create user 'sunny'@'%' identified by '123456';
```

授予本地访问用户权限

```sh
$ grant all privileges on dbname.* to sunny@localhost identified by '123456';
```

授予公网IP访问用户权限

```sh
$ grant all privileges on dbname.* to 'sunny'@'%' identified by '123456';
```

刷新权限

```sh
$ flush privileges;
```

修改配置

```sh
$ vi /etc/mysql/mysql.conf.d/mysqld.cnf

bind-address            = 127.0.0.1 => bind-address            = 0.0.0.0

$ service mysql restart
```

### 7、阿里云安装redis(Ubuntu)

1⃣️安装


```sh
$ apt install redis-server
```

2⃣️修改配置

```sh
$ cd /etc/redis/
$ vi redis.conf

修改配置
bind 127.0.0.1 ::1 => # bind 127.0.0.1 ::1
# requirepass foobared => requirepass 2786270

protected-mode yes => protected-mode no

重启服务
$ service redis-server restart

远程登录
$ redis-cli -h host -p port -a password
```

### 6、git终端避免多次输入密码

```sh
$ git config --global credential.helper osxkeychain
```

