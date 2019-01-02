---
author: sunny
title: 项目难点总结
date: 2018-10-04 14:01:06
tags: codeing
categories: 编程
---

### canvas头像图片跨域

<!-- more -->

使用插件html2canvas.js，设置useCORS参数为true，并且修改后端修改nginx配置文件add_header Access-Control-Allow-Origin \*，需要重启nginx，使用nginx代理去访问图片。

### html2canvas生成海报背景模糊

不使用背景图片，而是直接在dom里面插入img标签即可

### swiper，history需点击两次才能返回原页面，造成导航错乱
