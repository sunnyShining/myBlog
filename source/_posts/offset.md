---
author: sunny
title: js实现jquery的offset()方法(获取当前元素相对于文档的偏移量)
date: 2017-11-28 22:43:46
tags:
---

从我[简书](http://www.jianshu.com/p/e8965308d7e9)搬迁

# 背景

最近做项目，由于zepto使用的功能较少，想将zepto的功能用较少原生实现，其中有个实现zepto的offset()方法取到各种值的难为了我，我百度了下，大体网上千篇一律的这样写到

```bash
这篇文章主要介绍了js实现jquery的offset()方法,实例分析了jquery的offset()方法原理与采用javascript实现的技巧,具有一定参考借鉴价值,需要的朋友可以参考下
本文实例讲述了js实现jquery的offset()方法。分享给大家供大家参考。具体分析如下：
用过jQuery的offset()的同学都知道offset().top或offset().left很方便地取得元素相对于整个页面的偏移。
而在js里，没有这样直接的方法，节点的属性offsetTop可以获得该节点相对于父节点的相对偏移，但不能直接获得其绝对偏移，我们可用节点逐层递归向上来相加offsetTop来获得绝对偏移。
复制代码代码如下:
function getOffset(Node, offset) {
    if (!offset) {
          offset = {};
          offset.top = 0; 
          offset.left = 0;
    }
    if (Node == document.body) {
        //当该节点为body节点时，结束递归
        return offset;   
    }
    offset.top += Node.offsetTop;
	offset.left += Node.offsetLeft;
    return getOffset(Node.parentNode, offset); //向上累加offset里的值
}
使用时，则如：
复制代码代码如下:
var a = document.getElementById('a'); // getOffset(a).top // getOffset(a).left
希望本文所述对大家的javascript程序设计有所帮助。

```

我本着试试看的态度将这个方法炒了上去，打印出值结果与我需要的值相差甚远，为此我仔细翻了下源码，源码见下面链接
[源码](http://blog.csdn.net/liangklfang/article/details/49229231)
找到如下方法getBoundingClientRect，翻了下caniuse发现兼容性还好（本人移动端），故可以写成以下方式

```bash
// 获取当前元素相对于文档的偏移量
let getOffset = (elem) => {
    let docElem = document.documentElement;
    let box = elem.getBoundingClientRect();
    return {
            top: box.top  +  docElem.scrollTop ,
            left: box.left + docElem.scrollLeft
     }
```
如果要考虑兼容性，请仔细看zepto源码
另外上述

```bash
function getOffset(Node, offset) {
    if (!offset) {
          offset = {};
          offset.top = 0;
          offset.left = 0;
    }
    if (Node == document.body) {
        // 当该节点为body节点时，结束递归
        return offset;
     }
    offset.top += Node.offsetTop;
    offset.left += Node.offsetLeft;
    return getOffset(Node.parentNode, offset); // 向上累加offset里的值
}
```

改成

```bash
function getOffset(Node, offset) {
    if (!offset) {
          offset = {};
          offset.top = 0;
          offset.left = 0;
    }
    if (Node == document.body) {
        // 当该节点为body节点时，结束递归
        return offset;
    }
    offset.top += Node.offsetTop;
    offset.left += Node.offsetLeft;
    return getOffset(Node.offsetParent, offset); // 向上累加offset里的值
}
```
也可以实现