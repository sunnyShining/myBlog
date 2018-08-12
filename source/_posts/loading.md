---
author: sunny
title: react如何封装一个全局组件
date: 2017-11-29 21:59:29
tags:
---

## 背景

react如何封装一个组件？相信，一百度网上一大把，当我想通过message.error('错误')，这样的提示的时候，我们想拥有一个全局组件来调用，当我查阅资料时，并没有太多关于这个的讲解，所以想自己动手写一个。

## 思路

我们可以通过
```bash
let div = document.createElement('div');
document.body.appendChild(div);
```
创建一个div，插到body里，再通过ReactDOM，将属性和你要写的组件样子传入，如
```bash
ReactDOM.render(React.createElement(Loading, props), div);
```
最后在你不需要它的时候，摧毁它，如
```bash
ReactDOM.unmountComponentAtNode(div);
document.body.removeChild(div);

```

## 代码如下

index.js
```bash

import Loading from './src/Loading.jsx';

let loadingInstance = 0;
let getLoadingInstance = (tip) => {
    loadingInstance = loadingInstance || Loading.newInstance({
        tip,
    });
    return loadingInstance;
};
export default {
    open(tip = '加载中...') {
        getLoadingInstance(tip);
    },
    close() {
        if (loadingInstance) {
            loadingInstance.destroy();
            loadingInstance = null;
        }
    },
};

```
Loading.jsx
```bash
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Loading.less';

export default class Loading extends Component {
	render() {
        let { tip } = this.props;
        console.log(tip);
		return (
            <div className="loading">
                <div className="loading-mask">
                    <div className="loading-outter">
                        <div className="loading-wrap">
                            <div className="loading-ring" />
                        </div>
                        <div className="loading-rect" />
                        <div className="loading-text">{ tip }</div>
                    </div>
                </div>
            </div>
		);
	}
}

Loading.propTypes = {
    tip: PropTypes.string,
};

Loading.newInstance = function newNotificationInstance(properties) {
    let props = properties || {};
    let div = document.createElement('div');
    document.body.appendChild(div);
    let notification = ReactDOM.render(React.createElement(Loading, props), div);
    return {
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
};
```
Loading.less
```bash
.loading{
    transition: opacity .3s linear;
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    text-align: center;
    top: 0;
    background-color: transparent;//背景透明
    z-index: 9999;
    &:after{
        content: "";
        display: inline-block;
    }
}
.loading-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
}
.loading-outter {
    position: relative;
    top: 50%;
    margin-top: -0.35rem;
    display: inline-block;
    vertical-align: middle;
    background-color: #222;
    border-radius: .5rem;
    height: .75rem;
}
.loading-wrap {
    position: absolute;
    width: .56rem;
    height: .56rem;
    top: .094rem;
    left: .09rem
}
.loading-ring {
    width: .56rem;
    height: .56rem;
    background-image: url("../../../assets/images/loading.svg");
    background-size: cover;
    position: absolute;
}
.loading-rect {
    height: .18rem;
    width: .18rem;
    background-color: #FD404A;
    border-radius: .05rem;
    -webkit-transform: rotate3D(0, 0, 1, 45deg);
    position: absolute;
    left: .28rem;
    top: .28rem;
}

.loading-text {
    text-align: left;
    color: #fff;
    font-size: .24rem;
    font-family: sans-serif;
    line-height: .75rem;
    padding-left: .85rem;
    padding-right: .26rem;
}

.loading-enter,
.loading-leave-active {
    opacity: 0;
}
```

## 具体代码参考我的[github](https://github.com/sunnyShining/react-demo)