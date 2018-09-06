---
author: sunny
title: 微信H5移动端真机调试技巧。
date: 2018-09-04 10:47:20
tags: codeing
categories: 编程
---

[原文链接](https://sunnyshining.github.io/2018/debug-skill/index.html)

## 背景

在移动端开发过程中，尤其像在万师傅[微信个人中心](https://wxuser.wanshifu.com/)开发过程中，如果遇到比较棘手的bug，想通过F12调出控制台看下哪里出了问题，是不可能的，但是有bug总得解决所以，需要掌握下移动端的调试技巧

<!-- more -->

## 方法

以下介绍几种方法

### 1、使用vconsole（适用于ios和Android）

[vConsole](https://github.com/Tencent/vConsole)是由腾讯出品的一个轻量、可拓展、针对手机网页的前端开发者调试面板，它的功效有很多：查看 console 日志、查看网络请求、查看页面 element 结构、查看 Cookies 和localStorage、手动执行 JS 命令行、自定义插件。
具体使用：

```javascript
const Vconsole = require('PLUGINS/vconsole.min');
/* eslint-disable no-new */
if (/MicroMessenger/i.test(window.navigator.userAgent.toLowerCase())) {
    new Vconsole();
}
```

或者

```html
<head>
  <script src="path/to/vconsole.min.js"></script>
  <script>
    var vConsole = new VConsole();
  </script>
</head>
```
效果：

![wechat](https://qncdn.wanshifu.com/7081e388fa8740319848b429cb459e12)

其他高级用法可参考[文档](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)

### 2、使用chrome://inspect调试（适用于android）

移动端开发时，我们常使用chrome自带的模拟器，模拟各种手机设备。 但模拟毕竟是模拟，当开发完毕，使用真机访问页面出现问题时如何调试呢？
答案是可以使用谷歌提供chrome://inspect进行像pc页面一样的调试，具体步骤如下

1、使用usb将手机的PC相连接；

2、手机中打开“设置”->"开发人员选项"->"USB调试"

3、打开pc侧chrome, 在地址栏中输入chrome://inspect/#devices 选中discover usb devices。可以看到我们的手机设备，如下图所示

![chrome](https://qncdn.wanshifu.com/57ad65c61444944b300485ef97fd1ccf)

4、点击inspect即可像调试pc页面一样调试移动端页面，如下

![example](https://qncdn.wanshifu.com/e70a00b53e9d01e33996e62c971903f0)

以上所讲调试适合移动端项目，微信里面h5页面也想实现这样调试，多做1个步骤即可。

1、微信浏览器打开http://debugx5.qq.com这个链接，选择信息tab页，将打开TBS内核Inspector调试功能☑️即可，下方还有vconsole感兴趣也可以☑️

![tbs](https://qncdn.wanshifu.com/e0c124057be5e57ff03f9f2db325e84c)

2、而后参考上面chrome://inspect调试

> 如出现页面空白可参考链接https://www.cnblogs.com/slmk/p/7591126.html解决