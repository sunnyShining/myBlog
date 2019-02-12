---
author: sunny
title: python3一些基础知识
date: 2018-10-02 14:08:33
categories: 编程
tags: python
---

## lambda 函数

```python
A = lambda x:x + 1

A(1) # 2
```
lambda函数设计出来是为了简化def的。简单的理解，冒号左边→想要传递的参数，冒号右边→想要得到的数（可能带表达式）

<!-- more -->

## map() 函数

map() 会根据提供的函数对指定序列做映射

```python
map(function, iterable, ...) # 第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的新列表。
```

```python
list(map(lambda x, y, z: (x + y + z) ** 2, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [11, 13, 15, 17, 19])) # [196, 400, 676, 1024, 1444]
```

## reduce() 函数

reduce（）的使用方法形如reduce(f(x),Itera).对，它的形式和map()函数一样。不过参数f（x）必须有两个参数

```python
from functools import reduce

reduce(lambda x, y: x * 10 + y, [2, 5, 6]) # 256
```

## filter() 函数

filter() 函数用于过滤序列，过滤掉不符合条件的元素，返回一个迭代器对象，如果要转换为列表，可以使用 list() 来转换。

```python
list(filter(lambda x: x % 2 != 0, [2, 5, 7, 8, 11])) # [5, 7, 11]
```

## sorted() 函数

sorted()函数也是一个高阶函数，它还可以接收一个key函数来实现自定义的排序。要进行反向排序，不必改动key函数，可以传入第三个参数reverse=True

```python
sorted([1, -2, 4, -111, 20], key=abs, reverse=True)
```