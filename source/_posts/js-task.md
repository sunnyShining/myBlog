---
title: javascript的宏任务和微任务
date: 2018-10-24 14:44:57
tags: javascript
categories: 编程
---

## 背景

在掘金上看到一篇文章[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)，里面有两个词语，感觉很陌生macro-task(宏任务)
micro-task(微任务)。

## 问题

首先一段代码

```js
console.log('1');

setTimeout(function() {
  console.log('2');
}, 0);

Promise.resolve().then(function() {
  console.log('3');
}).then(function() {
  console.log('4');
});

new Promise(function(resolve) {
    console.log('5');
    resolve();
}).then(function() {
    console.log('6');
})

console.log('7');
```
1, 5, 7, 3, 4, undefined, 2
