---
title: es6 let理解闭包
date: 2019-01-23 11:20:10
categories: 编程
tags: javascript
---

## 现象

```javascript

// var
var arr = [];
for (var i = 0; i< 10; i++) {
	arr[i] = function () {
		console.log(i);
	}
}
arr[6]();
console.log(i);

// let
let arr = [];
for (let i = 0; i< 10; i++) {
	arr[i] = function () {
		console.log(i);
	}
}
arr[6]();
console.log(i);

```

结果

var执行结果

![var](bibao_var.png)

let执行结果

![let](bibao_let.png)

## 问题

两个例子中，唯一的区别是前者for循环中使用var来定义i，得到的结果是10.而后者使用的是let来定义i，最终得到的结果是6.这是为什么呢？

<!-- more -->

## 解释

let和var区别：

相同点: 作用都是定义变量关键字

区别点：

 作用域只限制于当前代码块{}   -----   var的作用域则是函数体function(){}
 使用let声明变量的作用域不会提示  -----   而var会自动提升
 在相同的用作用域下不能有相同的变量，否则报错  ------   而var中则可以出现相同变量名，且不会报错。
 for循环提现父子作用域。 ------ 比如以前ES5、在循环中找不到你的 i 值，则会上面找，这样往往是不合逻辑的， 解决办法可以使用闭包完美解决，而ES6出现了let则不用闭包，他自带有作用域的限制，这样就能很好的满足我们的逻辑了

var循环执行相当于

```js
var a = [];
var i = 0;
a[0] = function(){
    console.log(i);
}
var i = 1;
a[i] = function(){
    console.log(i);
}
...
var i = 9;
a[i] = function(){
    console.log(i);
}

var i = 10;

arr[6](); // 10
console.log(i); // 10
```

let执行顺序

```js
let arr = [];

{
	let i = 0;
    arr[i]=function(){
        console.log(i);
    };
}
{
	let i = 1;
    arr[i]=function(){
        console.log(i);
    };
}
...
{
	let i = 9;
    arr[i]=function(){
        console.log(i);
    };
}
{
	let i = 10
}
arr[6](); // 6
console.log(i); // Uncaught ReferenceError: i is not defined

```

结果一目了然



