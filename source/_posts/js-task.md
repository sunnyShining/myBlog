---
title: javascript的宏任务和微任务
date: 2018-10-24 14:44:57
tags: javascript
categories: 编程
---

文章参考[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

## 背景

在掘金上看到一篇文章[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)，里面有两个词语，感觉很陌生macro-task(宏任务)
micro-task(微任务)。

<!-- more -->

## 问题

首先一段代码

```js
console.log('1');

setTimeout(function() {
  console.log('2');
}, 0);

Promise.resolve().then(function() {
  console.log('31');
}).then(function() {
  console.log('41');
});
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
setTimeout(function() {
  console.log('7');
}, 0);

console.log('8');
```
1 5 8 31 3 6 41 4 2 7

## why

同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。当指定的事情完成时，Event Table会将这个函数移入Event Queue。主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。不断重复，也就是常说的Event Loop(事件循环)。导图如下

![process](https://user-gold-cdn.xitu.io/2017/11/21/15fdd88994142347?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
micro-task(微任务)：Promise，process.nextTick

第一轮事件循环流程分析如下：

整体script作为第一个宏任务进入主线程，遇到console.log，输出1。
遇到setTimeout，其回调函数被分发到宏任务Event Queue中。我们暂且记为setTimeout1。
遇到Promise，then被分发到微任务Event Queue中。我们记为then1。
遇到Promise，then被分发到微任务Event Queue中。我们记为then2。
遇到Promise，new Promise直接执行，输出5。then被分发到微任务Event Queue中。我们记为then3。
又遇到了setTimeout，其回调函数被分发到宏任务Event Queue中，我们记为setTimeout2。
整体script作为第一个宏任务进入主线程，遇到console.log，输出8。




|宏任务Event Queue| 微任务Event Queue|
|:-------- |:-----:|
|setTimeout1|then1|
|setTimeout2|then2|
||then3|

上表是第一轮事件循环宏任务结束时各Event Queue的情况，此时已经输出了1和8。

我们发现了then1、then2、then3几个微任务。
执行then1、then2、then3输出31、3、6。
then1遇到then，then被分发到微任务Event Queue中。我们记为then4。
then2遇到then，then被分发到微任务Event Queue中。我们记为then5。

|宏任务Event Queue| 微任务Event Queue|
|:-------- |:-----:|
|setTimeout1|then1|
|setTimeout2|then2|

执行then4、then5输出41、4。

好了，第二轮事件循环正式结束，此时输出为1 5 8 31 3 6 41 4。那么第二轮时间循环从setTimeout1宏任务开始：
首先输出2，再输出7。

最后结束输出为1 5 8 31 3 6 41 4 2 7

