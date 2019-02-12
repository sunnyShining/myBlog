---
author: sunny
title: react内联样式使用webpack将px转rem
date: 2018-04-24 22:34:51
tags: webpack
categories: 编程
---

从我[简书](https://www.jianshu.com/p/83bb5e97bdf3)搬迁

## 背景

在开发react项目时，很多时候我们把style写在css、less、scss里，经过像postcss这样的配置处理，但有没有这样一种需求呢，像有些样式我们直接写在xml标签上style里，然后也能进行处理，如px2rem能将px转rem，是否在style上写也能实现。

<!-- more -->

## 思路

我们在webpack，/\.(js|jsx)?$/这样babel-loader之前（webpack从右往左）加一个loader把需要转变的px进行替换，不就好了，先找找有没有这样的loader，我找了下没找到，只能自己写一个了

## 代码

```javascript
const loaderUtils = require('loader-utils');

// 默认参数
const defaultopts = {
    remUnit: 100, // rem unit value (default: 100)
    remFixed: 2, // rem value precision (default: 2)
};
// 获取webpack配置好的参数
const opts = loaderUtils.getOptions(this);
// 将参数组合
const config = Object.assign({}, defaultopts, opts);
const ZPXRegExp = /\b(\d+(\.\d+)?)SUPX\b/;

module.exports = function (source) {
    let pxGlobalRegExp = new RegExp(ZPXRegExp.source, 'g');
    if (this.cacheable) {
        this.cacheable();
    }
    // 先test下有没有符合的如果有再进行替换
    if (pxGlobalRegExp.test(source)) {
        return source.replace(pxGlobalRegExp, ($0, $1) => {
            let val = $1 / config.remUnit;
            // 精确到几位
            val = parseFloat(val.toFixed(config.remFixed));
            return val === 0 ? val : val + 'rem';
        });
    } else {
        return source;
    }
};

```

## 用法

```
{
    loader: path.join(rootPath, 'loaders/jsxPx2RemLoader'),
    options: {
        remUnit: 100,
        remFixed: 3
    }
}
```

## 源代码

https://github.com/sunnyShining/jsxStyleLoader/blob/master/tools/loaders/jsxPx2RemLoader/index.js

## 赞赏

如果你觉得我写的对你有帮助，请给我点赞助，不胜感激

![WechatIMG42.jpg](https://upload-images.jianshu.io/upload_images/4605151-54db300e5da7f210.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![WechatIMG43.jpg](https://upload-images.jianshu.io/upload_images/4605151-81f69250028678af.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
