---
title: 布局神器 --- BFC
date: 2019-01-25 09:41:14
tags: css
category: 编程
---

## 概念

BFC(Block formatting context)直译为"块级格式化上下文"。BFC元素就是一个独立的盒子，只有Blcok-level box(块级盒) 可以创建BFC，它规定了内部的Block-level Box如何布局，并且与这个独立盒子里的布局不受外部影响，当然它也不会影响到外面的元素。

<!-- more -->

## 特点

**1.内部的box会在垂直方向，从顶部开始一个接着一个地放置;**

```html
<style type="text/css">
* {
    margin: 0;
    padding: 0;
}
.box {
    width: 100px;
    height: 100px;
    background-color: green;
}
.c_red {
    background-color: red;
}
.c_yellow {
    background-color: yellow;
}
.c_blue {
    background-color: blue;
}
</style>

<body>
    <div class="box"></div>
    <div class="box c_red"></div>
    <div class="box c_yellow"></div>
    <div class="box c_blue"></div>
</body>
```

![bfc1](bfc1.png)

**2.box 垂直方向的距离由margin(外边距)决定。属于同一个BFC的两个相邻box的margin会发生叠加**

```html
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }
    .box {
        width: 100px;
        height: 100px;
        background-color: green;
    }
    .c_red {
        background-color: red;
    }
    .c_yellow {
        background-color: yellow;
    }
    .c_blue {
        background-color: blue;
    }
    .mgt_50 {
        margin-top: 50px;
    }
    .mgb_50{
        margin-bottom: 50px;
    }
</style>

<body>
    <div class="box"></div>
    <div class="box c_red mgb_50"></div>
    <div class="box c_yellow mgt_50"></div>
    <div class="box c_blue"></div>
</body>
```

![bfc2](bfc2.png)

**3.BFC的区域不会与float box叠加**

```html
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }
    .box {
        width: 100px;
        height: 100px;
        background-color: green;
    }
    .c_red {
        background-color: red;
    }
    .fl{
        float: left;
    }
</style>

<body>
    <div class="box fl">元素A</div>
    <div class="box c_red" style="width: 200px; height: 200px">元素B</div>
</body>
```

> 正常情况下，后面元素B会与前面的元素A重叠（因为float导致A元素脱离文档流不再占据原来的位置，后面元素会占据前面的位置，如图）

![bfc3](bfc3.png)

> 这个时候，我们任意选取上面一种原因加给元素B，比如加上overflow:hidden，于是元素B产生了BFC效果，导致元素B区域不会与float box（元素A）叠加，如图;

```html
<style type="text/css">
* {
    margin: 0;
    padding: 0;
}
.box {
    width: 100px;
    height: 100px;
    background-color: green;
}
.c_red {
    background-color: red;
}
.fl{
    float: left;
}
</style>

<body>
    <div class="box fl">元素A</div>
    <div class="box c_red" style="width: 200px; height: 200px; overflow:hidden">元素B</div>
</body>
```

![bfc4](bfc4.png)


**4.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然**

**5.计算BFC高度时，浮动元素也参与计算**

```html
<div style="width: 200px;height: 10px;background-color: red;">
    <div style="float: left;width: 100px; height: 100px; background-color: green;">son</div>
</div>
```

> 当子元素浮动，父元素便产生了高度坍塌问题，因为浮动元素不参与计算

![bfc5](bfc5.png)

> 而当我们给元素B，比如加上overflow:auto，产生BFC效果，浮动元素便参与计算，便不会产生高度坍塌问题

```html
<div style="width: 200px;background-color: red; overflow: auto;">
    <div style="float: left;width: 100px; height: 100px; background-color: green;">son</div>
</div>
```

![bfc6](bfc6.png)

**6.每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。**

## 触发BFC

**1. 根元素或包含根元素的元素;**
**2. 设置除 float:none 以外的属性值（如：left | right）就会触发BFC;**
**3. 设置除 overflow: visible 以外的属性值（如： hidden | auto | scroll）就会触发BFC;**
**4. 设置 display属性值为: inline-block | flex | inline-flex | table-cell | table-caption 就会触发BFＣ**
**5. 设置 position 属性值为：absolute | fixed 就会触发BFC**
**6. 使用 fieldset 元素（可以给表单元素设置环绕边框的html元素）也会触发BFC**

## 作用

**1. 用于清除浮动，计算高度**

```html
<div style="width: 200px;background-color: red; overflow: auto;">
    <div style="float: left;width: 100px; height: 100px; background-color: green;">son</div>
</div>
```

![bfc6](bfc6.png)

**2. 用于自适应两栏布局**

```html
<style type="text/css">
* {
    margin: 0;
    padding: 0;
}
.box {
    width: 100px;
    height: 100px;
    background-color: green;
}
.c_red {
    background-color: red;
}
.fl{
    float: left;
}
</style>

<body>
    <div class="box fl">元素A</div>
    <div class="box c_red" style="width: 200px; height: 200px; overflow:hidden">元素B</div>
</body>
```

![bfc4](bfc4.png)

**3. 解决margin叠加问题**

```html
<style type="text/css">
* {
    margin: 0;
    padding: 0;
}

.box {
    width: 100px;
    height: 100px;
    background-color: green;
}

.c_red {
    background-color: red;
}

.c_yellow {
    background-color: yellow;
}

.c_blue {
    background-color: blue;
}

.mgt_50 {
    margin-top: 50px;
}

.mgb_50 {
    margin-bottom: 50px;
}
</style>

<body>
    <div class="box"></div>
    <div class="box c_red mgb_50"></div>
    <div style="overflow: auto;">
        <div class="box c_yellow mgt_50"></div>
    </div>
    <div class="box c_blue"></div>
</body>
```

![bfc7](bfc7.png)
