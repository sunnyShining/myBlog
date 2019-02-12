---
author: sunny
title: DOM结构 —— 两个节点之间可能存在哪些关系以及如何在节点之间任意移动。
date: 2017-06-04 17:49:20
tags: js
categories: 编程
---

从我[简书](https://www.jianshu.com/p/42ec7d96fbfa)搬迁

```javascript
document.documentElement-----文档的根节点<html>
document.body------<body>
当前对象为node表示
node.parentNode, node.parendElement ----父节点
node.childNodes（包含文本节点及标签节点）,node.children -----所有子节点
node.firstChild ------第一个子节点
node.lastChild ------最后一个子节点
node.nextSibling -------同属上一个子节点
node.previousSibling ---------同属下一个子节点
parentNode和parentElement功能一样，childNodes和children功能一样。但是parentNode和childNodes是符合W3C标准的，可以说比较通用。而另外两个只是IE支持，不是标准
childNodes返回指定元素的子元素集合，包括HTML节点，所有属性，文本。可以通过nodeType来判断是哪种类型的节点，只有当nodeType==1时才是元素节点，2是属性节点，3是文本节点。
for(let i=0, len=parent.childNodes.length;i<len;i++){
    console.log(parent.childNodes[i].nodeType)//1时才是元素节点，2是属性节点，3是文本节点。
}
children只返回HTML节点，甚至不返回文本节点
parentNode和parentElement功能一样，当父节点的nodeType不是1，即不是element节点的话，它的parentElement就会是null。
```
<!-- more -->

测试childNodes和children

```html
<body>
    <section>
        <div id="parent">
            前
            <div class="child">
                children1
            </div>
            后
            <div class="child2">
            	children2
            </div>
        </div>
        <div id="parent2">
            2
            <div class="child" data="11111">
                22
            </div>
            222
            <div class="child2">
            	22
            </div>
        </div>
    </section>
    <script type="text/javascript">
    let parent = document.querySelector('#parent');
    let parent2 = document.querySelector('#parent2');
    console.log(parent.childNodes)
    console.log(parent.parentNode)
    console.log(parent.parentElement)
    for (let i = 0, len = parent.childNodes.length; i < len; i++) {
        console.log(parent.childNodes[i].nodeType) //1时才是元素节点，2是属性节点，3是文本节点。
        console.log(parent.childNodes[i].nodeValue)
    }
    console.log(parent.children)
    // parent.removeChild(parent.children[0])//移除
    // parent.insertBefore(parent.children[1], parent.children[0])//更换位置
    // parent.replaceChild(parent2.children[1], parent.children[0])//替换某个子

    //控制台的返回
    // [text, div.child, text]
    // 	3
    //    sldkafslaflsjkl
    // 1
    // null
    // 3
    // sdalnfldksfksdkl
    // [div.child]
    </script>
</body>
```