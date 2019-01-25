---
title: 垂直居中的几种实现方式
date: 2019-01-24 14:02:37
category: 编程
tags: javascript
---

## 背景

垂直居中是布局中十分常见的效果之一，如弹框组件和loading和toast等组件，实现的方式也是多种多样，以下简单介绍几种。

<!-- more -->

## table-cell

```html
<style>
    #parent1 {
        width: 200px;
        height: 200px;
        background: green;
        display: table;
    }

    #child1 {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
</style>
<div id="parent1">
    <div id="child1">此处应当有掌声</div>
</div>
```

效果
![vertical_center1](vertical_center1.png)

一个弹框的简单实现

```html
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }


    #parent1 {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
    }

    #child1 {
        display: table-cell;
        vertical-align: middle;
    }
    .dialog-container {
        margin: 0 auto;
        text-align: center;
        width: 200px;
        height: 200px;
        background-color: #fff;
        border-radius: 5px;
    }
</style>

<body>
    <div id="parent1">
        <div id="child1">
            <div class="dialog-container">
                此处应当有掌声
            </div>
        </div>
    </div>
</body>

```
效果
![vertical_center2](vertical_center2.png)

## flex

```html
<style>
    #parent2 {
        width: 200px;
        height: 200px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #child2 {
        width: 100px;
        height: 100px;
        background-color: green;
    }
</style>
<div id="parent2">
    <div id="child2">
            此处应当有掌声
    </div>
</div>
```

效果
![vertical_center3](vertical_center3.png)

一个弹框的简单实现

```html
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }


    #parent2 {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }

    #child2 {
        width: 200px;
        height: 200px;
        background-color: #fff;
        text-align: center;
        border-radius: 5px;
    }
</style>

<body>
    <div id="parent2">
        <div id="child2">
            此处应当有掌声
        </div>
    </div>
</body>
```
![vertical_center4](vertical_center4.png)

## transform

```html
<style>
	#parent3 {
	    width: 200px;
	    height: 200px;
	    background-color: red;
	    position: relative;
	}

	#child3 {
	    width: 100px;
	    height: 100px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    background-color: green;
	}
</style>
<div id="parent3">
    <div id="child3">
        此处应当有掌声
    </div>
</div>
```

![vertical_center5](vertical_center5.png)

一个弹框的简单实现

```html
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }


    #parent3 {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }

    #child3 {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); // 可以用margin: -100px 0 0 -100px;大小为child的一半
        background-color: #fff;
        border-radius: 5px;
        text-align: center;
    }
</style>

<body>
    <div id="parent3">
        <div id="child3">
            此处应当有掌声
        </div>
    </div>
</body>
```
![vertical_center6](vertical_center6.png)


