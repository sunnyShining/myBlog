---
author: 风吴痕
title: python3 numpy
date: 2017-10-10 16:21:23
categories: 编程
tags: python
---

> 本文转载自https://blog.csdn.net/wc781708249/article/details/78194039?locationNum=10&fps=1


参考地址：

1、https://www.shiyanlou.com/courses/912

2、https://www.shiyanlou.com/courses/348

3、https://docs.scipy.org/doc/numpy/reference/

4、https://docs.scipy.org/doc/numpy/user/index.html#user

5、http://scipy.github.io/old-wiki/pages/Tentative_NumPy_Tutorial

6、https://docs.scipy.org/doc/numpy-dev/user/quickstart.html

<!-- more -->

## 1、Numpy 数值类型
Python本身支持的数值类型有<code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">int</code>（整型，python2中存在long长整型）、<code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">float</code>（浮点型）、<code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">bool</code>（布尔型）和<code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">complex</code>（复数型）。

而 Numpy 支持比 Python 本身更为丰富的数值类型，细分如下：

1. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">bool</code>：布尔类型，1 个字节，值为 True 或 False。
2. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">int</code>：整数类型，通常为 int64 或 int32 。
3. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">intc</code>：与 C 里的 int 相同，通常为 int32 或 int64。
4. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">intp</code>：用于索引，通常为 int32 或 int64。
5. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">int8</code>：字节（从 -128 到 127）
6. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">int16</code>：整数（从 -32768 到 32767）
7. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">int32</code>：整数（从 -2147483648 到 2147483647）
8. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">int64</code>：整数（从 -9223372036854775808 到 9223372036854775807）
9. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">uint8</code>：无符号整数（从 0 到 255）
10. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">uint16</code>：无符号整数（从 0 到 65535）
11. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">uint32</code>：无符号整数（从 0 到 4294967295）
12. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">uint64</code>：无符号整数（从 0 到 18446744073709551615）
13. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">float</code>：float64 的简写。
14. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">float16</code>：半精度浮点，5 位指数，10 位尾数
15. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">float32</code>：单精度浮点，8 位指数，23 位尾数
16. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">float64</code>：双精度浮点，11 位指数，52 位尾数
17. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">complex</code>：complex128 的简写。
18. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">complex64</code>：复数，由两个 32 位浮点表示。
19. <code style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;font-size:14.4px;color:rgb(199,37,78);background-color:rgb(249,242,244);">complex128</code>：复数，由两个 64 位浮点表示。

在 Numpy 中，上面提到的这些数值类型都被归于 dtype（data-type） 对象的实例。
我们可以用 numpy.dtype(object, align, copy) 来指定数值类型。而在数组里面，可以用 dtype= 参数。

```python
import numpy as np

a = np.array([1.1, 2.2, 3.3], dtype=np.float64) # 指定 1 维数组的数值类型为 float64
```

另外，你可以使用 .astype() 方法在不同的数值类型之间相互转换。

```python
a.astype(int) # 将 a 的数值类型从 float64 转换为 int
```

最后，你可以使用 .dtype 来查看 dtype 属性。

```python
a.dtype # 查看 a 的数值类型
```

## 2、Numpy 多维数组

### 2.1 ndarray 介绍

在 python 内建对象中，数组有三种形式：

1. list 列表：[1, 2, 3]
2. Tuple 元组：(1, 2, 3, 4, 5)
3. Dict 字典：{A:1, B:2}

Numpy最核心且最重要的一个特性就是ndarray多维数组对象，它区别于python的标准类，拥有对高维数组的处理能力，这也是数值计算过程中缺一不可的重要特性。

Numpy中，ndarray类具有六个参数，它们分别为：

1. shape：数组的形状。
2. dtype：数据类型。
3. buffer：对象暴露缓冲区接口。
4. offset：数组数据的偏移量。
5. strides：数据步长。
6. order：{'C'，'F'}，以行或列为主排列顺序。

下面，我们来了解创建 ndarray 的一些方法。在 numpy 中，我们主要通过以下 5 种途径创建数组，它们分别是：

1. 从 Python 数组结构列表，元组等转换。
2. 使用 np.arange、np.ones、np.zeros 等 numpy 原生方法。
3. 从存储空间读取数组。
4. 通过使用字符串或缓冲区从原始字节创建数组。
5. 使用特殊函数，如 random。

### 2.2 从列表或元组转换

在 numpy 中，我们使用 numpy.array 将列表或元组转换为 ndarray 数组。其方法为：

```python
numpy.array(object, dtype=None, copy=True, order=None, subok=False, ndmin=0)
```

其中，参数：

- object：列表、元组等。
- dtype：数据类型。如果未给出，则类型为被保存对象所需的最小类型。
- copy：布尔来写，默认 True，表示复制对象。
- order：顺序。
- subok：布尔类型，表示子类是否被传递。
- ndmin：生成的数组应具有的最小维数。

下面，通过列表创建一个 ndarray 数组：

```python
import numpy as np

np.array([[[1, 2, 3],[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3],[1, 2, 3]]])
```

或者是列表和元组：

```python
import numpy as np

np.array([(1,2),(3,4),(5,6)])
```

### 2.3 arange 方法创建

除了直接使用 array 方法创建 ndarray，在 numpy 中还有一些方法可以创建一些有规律性的多维数。首先，我们来看一看 arange()。arange() 的功能是在给定区间内创建一系列均匀间隔的值。方法如下：

```python
numpy.arange(start, stop, step, dtype=None)
```

你需要先设置值所在的区间，这里为[开始， 停止），你应该能发现这是一个半开半闭区间。然后，在设置 step 步长用于设置值之间的间隔。最后的可选参数 dtype可以设置返回ndarray 的值类型。
举个例子：

```python
import numpy as np
# 在区间 [3, 7) 中以 0.5 为步长新建数组
np.arange(3, 7, 0.5, dtype='float32')
# array([ 3. ,  3.5,  4. ,  4.5,  5. ,  5.5,  6. ,  6.5], dtype=float32)
```

### 2.4 linspace 方法创建

linspace方法也可以像arange方法一样，创建数值有规律的数组。linspace用于在指定的区间内返回间隔均匀的值。其方法如下：

```python
numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
```

- start：序列的起始值。
- stop：序列的结束值。
- num：生成的样本数。默认值为50。
- endpoint：布尔值，如果为真，则最后一个样本包含在序列内。
- retstep：布尔值，如果为真，返回间距。
- dtype：数组的类型。

举个例子：

```python
np.linspace(0, 10, 10, endpoint=True)

# array([  0.      ,   1.11111111,   2.22222222,   3.33333333,
         4.44444444,   5.55555556,   6.66666667,   7.77777778,
         8.88888889,  10.        ])
np.linspace(0, 10, 10, endpoint=False)

# array([ 0.,  1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9.])

```

### 2.5 ones 方法创建

numpy.ones 用于快速创建数值全部为 1 的多维数组。其方法如下：

```python
numpy.ones(shape, dtype=None, order='C')
```

其中：

- shape：用于指定数组形状，例如（1， 2）或 3。
- dtype：数据类型。
- order：{'C'，'F'}，按行或列方式储存数组。

举个例子：

```python
import numpy as np

print(np.ones((2,3)))
"""
[[ 1.  1.  1.]
 [ 1.  1.  1.]]
"""
```

### 2.6 zeros 方法创建

zeros 方法和上面的 ones 方法非常相似，不同的地方在于，这里全部填充为 0。zeros 方法和 ones 是一致的。

```python
numpy.zeros(shape, dtype=None, order='C')
```

其中：

- shape：用于指定数组形状，例如（1， 2）或3。
- dtype：数据类型。
- order：{'C'，'F'}，按行或列方式储存数组。

举个例子：

```python
import numpy as np

print(np.zeros((3,2)))
'''
[[ 0.  0.]
 [ 0.  0.]
 [ 0.  0.]]
'''
```

### 2.7 eye 方法创建

numpy.eye 用于创建一个二维数组，其特点是k 对角线上的值为 1，其余值全部为0。方法如下：

```python
numpy.eye(N, M=None, k=0, dtype=<type 'float'>)
```

其中：

- N：输出数组的行数。
- M：输出数组的列数。
- k：对角线索引：0（默认）是指主对角线，正值是指上对角线，负值是指下对角线。

举个例子：

```python
import numpy as np

print(np.eye(5, 4, 3))
'''
[[ 0.  0.  0.  1.]
 [ 0.  0.  0.  0.]
 [ 0.  0.  0.  0.]
 [ 0.  0.  0.  0.]
 [ 0.  0.  0.  0.]]
'''
print(np.eye(5, 4, 0))
'''
[[ 1.  0.  0.  0.]
 [ 0.  1.  0.  0.]
 [ 0.  0.  1.  0.]
 [ 0.  0.  0.  1.]
 [ 0.  0.  0.  0.]]
'''
print(np.eye(5, 4, -1))
'''
[[ 0.  0.  0.  0.]
 [ 1.  0.  0.  0.]
 [ 0.  1.  0.  0.]
 [ 0.  0.  1.  0.]
 [ 0.  0.  0.  1.]]
'''
```

### 2.8 从已知数据创建

我们还可以从已知数据文件、函数中创建 ndarray。numpy 提供了下面 5 个方法：

1. frombuffer（buffer）：将缓冲区转换为 1 维数组。
2. fromfile（file，dtype，count，sep）：从文本或二进制文件中构建多维数组。
3. fromfunction（function，shape）：通过函数返回值来创建多维数组。
4. fromiter（iterable，dtype，count）：从可迭代对象创建 1 维数组。
5. fromstring（string，dtype，count，sep）：从字符串中创建 1 维数组。

举个例子：

```python
import numpy as np

print(np.fromfunction(lambda a, b: a + b, (5, 4)))
"""
[[ 0.  1.  2.  3.]
 [ 1.  2.  3.  4.]
 [ 2.  3.  4.  5.]
 [ 3.  4.  5.  6.]
 [ 4.  5.  6.  7.]]
"""
```

### 2.9 linspace 与 logspace

```python
# using linspace, both end points ARE included
linspace(0, 10, 25)

=> array([  0.        ,   0.41666667,   0.83333333,   1.25      ,
            1.66666667,   2.08333333,   2.5       ,   2.91666667,
            3.33333333,   3.75      ,   4.16666667,   4.58333333,
            5.        ,   5.41666667,   5.83333333,   6.25      ,
            6.66666667,   7.08333333,   7.5       ,   7.91666667,
            8.33333333,   8.75      ,   9.16666667,   9.58333333,  10.        ])

logspace(0, 10, 10, base=e)

=> array([  1.00000000e+00,   3.03773178e+00,   9.22781435e+00,
            2.80316249e+01,   8.51525577e+01,   2.58670631e+02,
            7.85771994e+02,   2.38696456e+03,   7.25095809e+03,
            2.20264658e+04])
```

### 2.10 mgrid

```python
x, y = mgrid[0:5, 0:5] # similar to meshgrid in MATLAB

x
=> array([[0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1],
          [2, 2, 2, 2, 2],
          [3, 3, 3, 3, 3],
          [4, 4, 4, 4, 4]])

y
=> array([[0, 1, 2, 3, 4],
          [0, 1, 2, 3, 4],
          [0, 1, 2, 3, 4],
          [0, 1, 2, 3, 4],
          [0, 1, 2, 3, 4]])
```

### 2.11 diag

```python
# a diagonal matrix
diag([1,2,3])

=> array([[1, 0, 0],
          [0, 2, 0],
          [0, 0, 3]])

# diagonal with offset from the main diagonal
diag([1,2,3], k=1) 

=> array([[0, 1, 0, 0],
          [0, 0, 2, 0],
          [0, 0, 0, 3],
          [0, 0, 0, 0]])

```

### 2.12 文件 I/O 创建数组

#### 2.12.1 CSV

CSV是一种常用的数据格式化文件类型，为了从中读取数据，我们使用 numpy.genfromtxt 函数。

```python
# wget http://labfile.oss.aliyuncs.com/courses/348/stockholm_td_adj.dat
import numpy as np
 
data = np.genfromtxt('stockholm_td_adj.dat')
print(data.shape) # (77431, 7)
 
data = np.loadtxt('stockholm_td_adj.dat')
print(data.shape) # (77431, 7)
 
data = np.mafromtxt('stockholm_td_adj.dat')
print(data.shape) # (77431, 7)
 
data = np.ndfromtxt('stockholm_td_adj.dat')
print(data.shape) # (77431, 7)
 
data = np.recfromtxt('stockholm_td_adj.dat')
print(data.shape) # (77431, )
```

使用 numpy.savetxt 我们可以将 Numpy 数组保存到csv文件中:

```python
M = random.rand(3,3)
M
å
=> array([[ 0.70506801,  0.54618952,  0.31039856],
          [ 0.26640475,  0.10358152,  0.73231132],
          [ 0.07987128,  0.34462854,  0.91114433]])

savetxt("random-matrix.csv", M)

!cat random-matrix.csv

=> 7.050680113576863750e-01 5.461895177867910345e-01 3.103985627238065037e-01
   2.664047486311884594e-01 1.035815249084012235e-01 7.323113219935466489e-01
   7.987128326702574999e-02 3.446285401590922781e-01 9.111443300153220237e-01

savetxt("random-matrix.csv", M, fmt='%.5f') # fmt specifies the format

!cat random-matrix.csv

=> 0.70507 0.54619 0.31040
   0.26640 0.10358 0.73231
   0.07987 0.34463 0.91114
```

#### 2.12.2 Numpy 原生文件类型

使用 numpy.save 与 numpy.load 保存和读取：

```python
save("random-matrix.npy", M)

!file random-matrix.npy

=> random-matrix.npy: data

load("random-matrix.npy")

=> array([[ 0.70506801,  0.54618952,  0.31039856],
          [ 0.26640475,  0.10358152,  0.73231132],
          [ 0.07987128,  0.34462854,  0.91114433]])
```

## 3、ndarray 数组属性

```python
import numpy as np

a = np.array([[[1, 2, 3],[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3],[1, 2, 3]]])
print(a)
'''
[[[1 2 3]
  [1 2 3]
  [1 2 3]]
 [[1 2 3]
  [1 2 3]
  [1 2 3]]
 [[1 2 3]
  [1 2 3]
  [1 2 3]]]
'''
```

ndarray 多维数组支持下面这些属性：

### 3.1 ndarray.T

ndarray.T用于数组的转置，与 .transpose() 相同。

```python
import numpy as np

a.T
```

### 3.2 ndarray.dtype

ndarray.dtype 用来输出数组包含元素的数据类型。

```python
import numpy as np
a.dtype
```

### 3.3 ndarray.imag

ndarray.imag 用来输出数组包含元素的虚部。

```python
import numpy as np

a = np.array([[[1, 2, 3],[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3],[1, 2, 3]],[[1, 2, 3],[1, 2, 3],[1, 2, 3]]])

print(a.imag)
'''
[[[0 0 0]
  [0 0 0]
  [0 0 0]]
 [[0 0 0]
  [0 0 0]
  [0 0 0]]
 [[0 0 0]
  [0 0 0]
  [0 0 0]]]
'''
```

### 3.4ndarray.real

ndarray.real用来输出数组包含元素的实部。

```python
import numpy as np
a.real
```

### 3.5 ndarray.size

ndarray.size用来输出数组中的总包含元素数。

```python
import numpy as np
a.size
```

### 3.6ndarray.itemsize

ndarray.itemsize输出一个数组元素的字节数。

```python
import numpy as np
a.itemsize # 8
```

### 3.7 ndarray.nbytes

ndarray.nbytes用来输出数组的元素总字节数。

```python
import numpy as np
a.nbytes # 216=8*3*3*3
```

### 3.8 ndarray.ndim

ndarray.ndim用来输出数组尺寸。

```python
import numpy as np
a.ndim # 3
```

### 3.9 ndarray.shape

ndarray.shape用来输出数组维数组.

```python
import numpy as np
a.shape # （3,3,3）
```

### 3.10 ndarray.strides

ndarray.strides用来遍历数组时，输出每个维度中步进的字节数组。

```python
import numpy as np
a.strides # （72,24,8）
```

## 4、Numpy 数组的基本操作

### 4.1 重设形状

reshape 可以在不改变数组数据的同时，改变数组的形状。其中，numpy.reshape() 等效于 ndarray.reshape()。reshape方法非常简单：

```python
numpy.reshape(a, newshape)
```

其中，a 表示原数组，newshape 用于指定新的形状(整数或者元组)。

举个例子：

```python
import numpy as np
print(np.arange(10).reshape((5, 2)))
'''
[[0 1]
 [2 3]
 [4 5]
 [6 7]
 [8 9]]
'''
```

### 4.2 数组展开
ravel 的目的是将任意形状的数组扁平化，变为 1 维数组。ravel 方法如下：

```python
numpy.ravel(a, order='C')
```
其中，a 表示需要处理的数组。order 表示变换时的读取顺序，默认是按照行依次读取，当 order='F' 时，可以按列依次读取排序。

示例：

```python
import numpy as np

a = np.arange(10).reshape((2, 5))
print(a)
'''
[[0 1 2 3 4]
 [5 6 7 8 9]]
'''
print(np.ravel(a)) # [0 1 2 3 4 5 6 7 8 9]
print(np.ravel(a, order='F')) # [0 5 1 6 2 7 3 8 4 9]

print(a.flatten()) # [0 1 2 3 4 5 6 7 8 9]
```

### 4.3 轴移动

moveaxis 可以将数组的轴移动到新的位置。其方法如下：

```python
numpy.moveaxis(a, source, destination)
```

其中：

- a：数组。
- source：要移动的轴的原始位置。
- destination：要移动的轴的目标位置。

举个例子：

```python
import numpy as np

a = np.ones((1, 2, 3)) # (1,2,3)
print(a)
'''
[[[ 1.  1.  1.]
  [ 1.  1.  1.]]]
'''
b=np.moveaxis(a, 0, -1) # 等价于 a.transpose((1,2,0))
print(b)
'''
[[[ 1.]
  [ 1.]
  [ 1.]]
 [[ 1.]
  [ 1.]
  [ 1.]]]
'''
print(b.shape) # (2, 3, 1)

c=a.transpose((1,2,0))
print(c)
'''
[[[ 1.]
  [ 1.]
  [ 1.]]
 [[ 1.]
  [ 1.]
  [ 1.]]]
'''
```

### 4.4 轴交换
和 moveaxis 不同的是，swapaxes 可以用来交换数组的轴。其方法如下：

```python
numpy.swapaxes(a, axis1, axis2)
```

其中：

- a：数组。
- axis1：需要交换的轴 1 位置。
- axis2：需要与轴 1 交换位置的轴 1 位置。

举个例子：

```python
import numpy as np
 
a = np.ones((1, 4, 3)) # (1,4,3)
print(a)
b=np.swapaxes(a, 0, 2) # (3,4,1) 等价于 np.transpose(a,(2,1,0)) 和 np.moveaxis(np.moveaxis(a,0,-1),0,1)
print(b)
```

### 4.5 数组转置

transpose 类似于矩阵的转置，它可以将 2 维数组的横轴和纵轴交换。其方法如下：

```python
numpy.transpose(a, axes=None)
```

其中：

- a：数组。
- axis：该值默认为 none，表示转置。如果有值，那么则按照值替换轴。

举个例子：

```python
import numpy as np

a = np.arange(4).reshape(2,2)
print(a)
'''
[[0 1]
 [2 3]]
'''
print(np.transpose(a)) # 等价于np.transpose(a,(1,0))
'''
[[0 2]
 [1 3]]
'''

import numpy as np

a = np.arange(8).reshape(2,2,2)
print(a[:,0,:],a[:,1,:])
'''
[[0 1]
 [4 5]] [[2 3]
 [6 7]]
'''
c = np.transpose(a,(1,0,2))
print(c[0,:,:],c[1,:,:])
'''
[[0 1]
 [4 5]] [[2 3]
 [6 7]]
'''
```

### 4.6 维度改变

atleast_xd 支持将输入数据直接视为 x维。这里的 x 可以表示：1，2，3。方法分别维：

```python
numpy.atleast_1d()
numpy.atleast_2d()
numpy.atleast_3d()
```

举个例子：

```python
import numpy as np

a=[1,2,3,4]

print(np.atleast_1d(a)) # [1 2 3 4]
print(np.atleast_2d(a)) # [[1 2 3 4]]
print(np.atleast_3d(a))
'''
[[[1]
  [2]
  [3]
  [4]]]
'''
```

### 4.7 类型转变

在 numpy 中，还有一系列以 as 开头的方法，它们可以将特定输入转换为数组，亦可将数组转换为矩阵、标量，ndarray等。如下：

1. asarray(a，dtype，order)：将特定输入转换为数组。
2. asanyarray(a，dtype，order)：将特定输入转换为 ndarray。
3. asmatrix(data，dtype)：将特定输入转换为矩阵。
4. asfarray(a，dtype)：将特定输入转换为 float 类型的数组。
5. asarray_chkfinite(a，dtype，order)：将特定输入转换为数组，检查 NaN 或 infs。
6. asscalar(a)：将大小为 1 的数组转换为标量。

这里以 asmatrix(data，dtype) 方法举例：

```python
import numpy as np

a = np.arange(4).reshape(2,2)
np.asmatrix(a)
```

### 4.8 数组连接

concatenate 可以将多个数组沿指定轴连接在一起。其方法为：

```python
numpy.concatenate((a1, a2, ...), axis=0)
```

其中：

- (a1, a2, ...)：需要连接的数组。
- axis：指定连接轴。

举个例子：

```python
import numpy as np

a = np.array([[1, 2], [3, 4], [5, 6]]) # (3,2)
b = np.array([[7, 8], [9, 10]]) # (2,2)
c = np.array([[11, 12]]) # (1,2)

d=np.concatenate((a, b, c), axis=0) # axis=0 按第1维 连接
print(d.shape) # (6, 2)
```

这里，我们可以尝试沿着横轴连接。但要保证连接处的维数一致，所以这里用到了 .T 转置。

```python
import numpy as np

a = np.array([[1, 2], [3, 4], [5, 6]]) # (3,2)
b = np.array([[7, 8, 9]]) # (1,3)

print(np.concatenate((a, b.T), axis=1).shape) # (3,3)
```

### 4.9 数组堆叠

在 numpy 中，还有一系列以 as 开头的方法，它们可以将特定输入转换为数组，亦可将数组转换为矩阵、标量，ndarray等。如下：

1. stack(arrays，axis)：沿着新轴连接数组的序列。
2. column_stack()：将 1 维数组作为列堆叠到 2 维数组中。
3. hstack()：按水平方向堆叠数组。
4. vstack()：按垂直方向堆叠数组。
5. dstack()：按深度方向堆叠数组。

这里以 stack(arrays，axis) 方法举例：

```python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.stack((a, b),axis=0))
'''
[[1 2 3]
 [4 5 6]]
'''
print(np.column_stack((a,b)))
'''
[[1 4]
 [2 5]
 [3 6]]
'''
print(np.hstack((a,b))) # [1 2 3 4 5 6]
print(np.vstack((a,b)))
'''
[[1 2 3]
 [4 5 6]]
'''
print(np.dstack((a,b)))
'''
[[[1 4]
  [2 5]
  [3 6]]]
'''
```

**tile 与 repeat**

```python
a = array([[1, 2], [3, 4]])
# repeat each element 3 times
repeat(a, 3)

=> array([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4])

# tile the matrix 3 times
tile(a, 3)

=> array([[1, 2, 1, 2, 1, 2],
          [3, 4, 3, 4, 3, 4]])
```

### 4.10 拆分

split 及与之相似的一系列方法主要是用于数组的拆分，列举如下：

1. split(ary，indices_or_sections，axis)：将数组拆分为多个子数组。
2. dsplit(ary，indices_or_sections)：按深度方向将数组拆分成多个子数组。
3. hsplit(ary，indices_or_sections)：按水平方向将数组拆分成多个子数组。
4. vsplit(ary，indices_or_sections)：按垂直方向将数组拆分成多个子数组。

下面，我们看一看 split 到底有什么效果：

```python
import numpy as np

a = np.arange(6).reshape(2,3)
'''
[[0 1 2]
 [3 4 5]]
'''
print(np.split(a, 3,axis=1))
'''
[array([[0],
       [3]]), array([[1],
       [4]]), array([[2],
       [5]])]
'''
print(np.split(a, 2,axis=0))
'''
[array([[0, 1, 2]]), array([[3, 4, 5]])]
'''
print(np.hsplit(a,3))
'''
[array([[0],
       [3]]), array([[1],
       [4]]), array([[2],
       [5]])]
'''
print(np.vsplit(a,2))
'''
[array([[0, 1, 2]]), array([[3, 4, 5]])]
'''
```

numpy 中还有针对数组元素添加或移除的一些方法。

### 4.11 删除

delete(arr，obj，axis)：沿特定轴删除数组中的子数组。
下面，依次对 4 种方法进行示例，首先是 delete 删除：

```python
import numpy as np

a = np.arange(12).reshape(3,4)
print(a)
'''
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]
'''
print(np.delete(a, 2, 1)) # 将第 3 列(索引 2)删除
'''
[[ 0  1  3]
 [ 4  5  7]
 [ 8  9 11]]
'''
print(np.delete(a, 2, 0)) # 将第 3 行(索引 2)删除
'''
[[0 1 2 3]
 [4 5 6 7]]
'''
```

### 4.12 数组插入

insert(arr，obj，values，axis)：依据索引在特定轴之前插入值。
再看一看 insert插入, 用法和 delete 很相似，只是需要在第三个参数位置设置需要插入的数组对象：

```python
import numpy as np

a = np.arange(12).reshape(3,4)
b = np.arange(4)

print(np.insert(a, 2, b, 0)) # axis=0 按行插入 obj=2 a的第3行，即将b插入到a的第3行位置
'''
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 0  1  2  3]
 [ 8  9 10 11]]
'''
```

### 4.13 附加

append(arr，values，axis)：将值附加到数组的末尾，并返回 1 维数组。
append 的用法也非常简单。只需要设置好需要附加的值和轴位置就好了。它其实相当于只能在末尾插入的 insert，所以少了一个指定索引的参数。

```python
import numpy as np

a = np.arange(6).reshape(2,3)
b = np.arange(3).reshape(1,3)

print(np.append(a, b)) # [0 1 2 3 4 5 0 1 2]

print(np.append(a, b,axis=0))
'''
[[0 1 2]
 [3 4 5]
 [0 1 2]]
'''
```

### 4.14 重设尺寸

resize(a，new_shape)：对数组尺寸进行重新设定。
resize 就很好理解了，直接举例子吧：

```python
import numpy as np

a = np.arange(10)
print(a.reshape((2,5)))
'''
[[0 1 2 3 4]
 [5 6 7 8 9]]
'''
print(a)
'''
[0 1 2 3 4 5 6 7 8 9]
'''
a.resize((2,5))
print(a)
'''
[[0 1 2 3 4]
 [5 6 7 8 9]]
'''
```

你可能会纳闷了，这个 resize 看起来和上面的 reshape 一样呢，都是改变数组原有的形状。

其实，它们直接是有区别的，区别在于对原数组的影响。reshape 在改变形状时，不会影响原数组，相当于对原数组做了一份拷贝。而 resize 则是对原数组执行操作。

### 4.15 翻转数组

在 numpy 中，我们还可以对数组进行翻转操作：

1. fliplr(m)：左右翻转数组。
2. flipud(m)：上下翻转数组。

举个例子：

```python
import numpy as np

a = np.arange(6).reshape(2,3)
print(a)
'''
[[0 1 2]
 [3 4 5]]
'''
print(np.fliplr(a))
'''
[[2 1 0]
 [5 4 3]]
'''
print(np.flipud(a))
'''
[[3 4 5]
 [0 1 2]]
'''
```

### 4.16 增加一个新维度: newaxis

newaxis 可以帮助我们为数组增加一个新维度，比如说，将一个向量转换成列矩阵和行矩阵：

```python
import numpy as np

v = np.array([1,2,3])
shape(v)
'''
=> (3,)
'''
# make a column matrix of the vector v
v[:, newaxis]
'''
=> array([[1],
          [2],
          [3]])
'''
# column matrix
v[:,newaxis].shape
'''
=> (3, 1)
'''
# row matrix
v[newaxis,:].shape
'''
=> (1, 3)
'''
```

## 5、Numpy 随机抽样

Numpy 的随机抽样功能非常强大，主要由 numpy.random 模块完成。

首先，我们需要了解如何使用 numpy 也就是生成一些满足基本需求的随机数据。主要由以下一些方法完成：

### 5.1 numpy.random.rand

numpy.random.rand(d0, d1, ..., dn) 方法的作用为：指定一个数组，并使用[0, 1) 区间随机数据填充，这些数据均匀分布。

```python
import numpy as np

np.random.rand(2,5)
```

### 5.2 numpy.random.randn

numpy.random.randn(d0, d1, ..., dn) 与 numpy.random.rand(d0, d1, ..., dn) 的区别在于，返回的随机数据符合标准正太分布。

```python
import numpy as np

np.random.randn(1,10)
```

### 5.3 numpy.random.randint

randint(low, high, size, dtype) 方法将会生成 [low, high) 的随机整数。注意这是一个半开半闭区间。

```python
import numpy as np

print(np.random.randint(2,5,10)) # [4 4 3 3 3 2 2 4 4 2]
```

### 5.4 numpy.random.random_integers

random_integers(low, high, size) 方法将会生成 [low, high] 的 np.int 类型随机整数。注

```python
import numpy as np
 
print(np.random.random_integers(2,5,10)) # [3 2 5 2 3 2 3 3 2 5]
```

### 5.5 numpy.random.random_sample

random_sample(size) 方法将会在 [0, 1) 区间内生成指定 size 的随机浮点数。

```python
import numpy as np
```

np.random.random_sample([10])
与 numpy.random.random_sample 类似的方法还有：
- numpy.random.random([size])
- numpy.random.ranf([size])
- numpy.random.sample([size])

它们 4 个的效果都差不多。

### 5.6 numpy.random.choice

choice(a, size, replace, p) 方法将会给定的 1 维数组里生成随机数。

```python
import numpy as np

np.random.choice(10,5) # 将会在 np.arange(10) 中生成 5 个随机数
```

### 5.7 概率密度分布

除了上面介绍的 6 中随机数生成方法，numpy 还提供了大量的满足特定概率密度分布的样本生成方法。它们的使用方法和上面非常相似，这里就不再一一介绍了。列举如下：

1. numpy.random.beta(a，b，size)：从 Beta 分布中生成随机数。
2. numpy.random.binomial(n, p, size)：从二项分布中生成随机数。
3. numpy.random.chisquare(df，size)：从卡方分布中生成随机数。
4. numpy.random.dirichlet(alpha，size)：从 Dirichlet 分布中生成随机数。
5. numpy.random.exponential(scale，size)：从指数分布中生成随机数。
6. numpy.random.f(dfnum，dfden，size)：从 F 分布中生成随机数。
7. numpy.random.gamma(shape，scale，size)：从 Gamma 分布中生成随机数。
8. numpy.random.geometric(p，size)：从几何分布中生成随机数。
9. numpy.random.gumbel(loc，scale，size)：从 Gumbel 分布中生成随机数。
10. numpy.random.hypergeometric(ngood, nbad, nsample, size)：从超几何分布中生成随机数。
11. numpy.random.laplace(loc，scale，size)：从拉普拉斯双指数分布中生成随机数。
12. numpy.random.logistic(loc，scale，size)：从逻辑分布中生成随机数。
13. numpy.random.lognormal(mean，sigma，size)：从对数正态分布中生成随机数。
14. numpy.random.logseries(p，size)：从对数系列分布中生成随机数。
15. numpy.random.multinomial(n，pvals，size)：从多项分布中生成随机数。
16. numpy.random.multivariate_normal(mean, cov, size)：从多变量正态分布绘制随机样本。
17. numpy.random.negative_binomial(n, p, size)：从负二项分布中生成随机数。
18. numpy.random.noncentral_chisquare(df，nonc，size)：从非中心卡方分布中生成随机数。
19. numpy.random.noncentral_f(dfnum, dfden, nonc, size)：从非中心 F 分布中抽取样本。
20. numpy.random.normal(loc，scale，size)：从正态分布绘制随机样本。
21. numpy.random.pareto(a，size)：从具有指定形状的 Pareto II 或 Lomax 分布中生成随机数。
22. numpy.random.poisson(lam，size)：从泊松分布中生成随机数。
23. numpy.random.power(a，size)：从具有正指数 a-1 的功率分布中在 0，1 中生成随机数。
24. numpy.random.rayleigh(scale，size)：从瑞利分布中生成随机数。
25. numpy.random.standard_cauchy(size)：从标准 Cauchy 分布中生成随机数。
26. numpy.random.standard_exponential(size)：从标准指数分布中生成随机数。
27. numpy.random.standard_gamma(shape，size)：从标准 Gamma 分布中生成随机数。
28. numpy.random.standard_normal(size)：从标准正态分布中生成随机数。
29. numpy.random.standard_t(df，size)：从具有 df 自由度的标准学生 t 分布中生成随机数。
30. numpy.random.triangular(left，mode，right，size)：从三角分布中生成随机数。
31. numpy.random.uniform(low，high，size)：从均匀分布中生成随机数。
32. numpy.random.vonmises(mu，kappa，size)：从 von Mises 分布中生成随机数。
33. numpy.random.wald(mean，scale，size)：从 Wald 或反高斯分布中生成随机数。
34. numpy.random.weibull(a，size)：从威布尔分布中生成随机数。
35. numpy.random.zipf(a，size)：从 Zipf 分布中生成随机数。

## 6、数学函数

### 6.1 三角函数

首先, 看一看 numpy 提供的三角函数功能。这些方法有：

1. numpy.sin(x)：三角正弦。
2. numpy.cos(x)：三角余弦。
3. numpy.tan(x)：三角正切。
4. numpy.arcsin(x)：三角反正弦。
5. numpy.arccos(x)：三角反余弦。
6. numpy.arctan(x)：三角反正切。
7. numpy.hypot(x1,x2)：直角三角形求斜边。
8. numpy.degrees(x)：弧度转换为度。
9. numpy.radians(x)：度转换为弧度。
10. numpy.deg2rad(x)：度转换为弧度。
11. numpy.rad2deg(x)：弧度转换为度。

比如，我们可以用上面提到的 numpy.rad2deg(x) 将弧度转换为度。

```python
import numpy as np

print(np.rad2deg(np.pi)) # 180.0
```

### 6.2 双曲函数

在数学中，双曲函数是一类与常见的三角函数类似的函数。双曲函数经常出现于某些重要的线性微分方程的解中，使用 numpy 计算它们的方法为：

1. numpy.sinh(x)：双曲正弦。
2. numpy.cosh(x)：双曲余弦。
3. numpy.tanh(x)：双曲正切。
4. numpy.arcsinh(x)：反双曲正弦。
5. numpy.arccosh(x)：反双曲余弦。
6. numpy.arctanh(x)：反双曲正切。

### 6.3 数值修约

数值修约, 又称数字修约, 是指在进行具体的数字运算前, 按照一定的规则确定一致的位数, 然后舍去某些数字后面多余的尾数的过程[via. 维基百科]。比如, 我们常听到的「4 舍 5 入」就属于数值修约中的一种。

1. numpy.around(a)：平均到给定的小数位数。
2. numpy.round_(a)：将数组舍入到给定的小数位数。
3. numpy.rint(x)：修约到最接近的整数。
4. numpy.fix(x, y)：向 0 舍入到最接近的整数。
5. numpy.floor(x)：返回输入的底部(标量 x 的底部是最大的整数 i)。
6. numpy.ceil(x)：返回输入的上限(标量 x 的底部是最小的整数 i).
7. numpy.trunc(x)：返回输入的截断值。

随机选择几个浮点数，看一看上面方法的区别。

```python
>>> import numpy as np

>>> a = np.array([1.21, 2.53, 3.86])
>>> a
array([ 1.21,  2.53,  3.86])

>>> np.around(a)
array([ 1.,  3.,  4.])

>>> np.round_(a)
array([ 1.,  3.,  4.])

>>> np.rint(a)
array([ 1.,  3.,  4.])

>>> np.fix(a)
array([ 1.,  2.,  3.])

>>> np.floor(a)
array([ 1.,  2.,  3.])

>>> np.ceil(a)
array([ 2.,  3.,  4.])

>>> np.trunc(a)
array([ 1.,  2.,  3.])
```

### 6.4 求和、求积、差分

下面这些方法用于数组内元素或数组间进行求和、求积以及进行差分。

1. numpy.prod(a, axis, dtype, keepdims)：返回指定轴上的数组元素的乘积。
2. numpy.sum(a, axis, dtype, keepdims)：返回指定轴上的数组元素的总和。
3. numpy.nanprod(a, axis, dtype, keepdims)：返回指定轴上的数组元素的乘积, 将 NaN 视作 1。
4. numpy.nansum(a, axis, dtype, keepdims)：返回指定轴上的数组元素的总和, 将 NaN 视作 0。
5. numpy.cumprod(a, axis, dtype)：返回沿给定轴的元素的累积乘积。
6. numpy.cumsum(a, axis, dtype)：返回沿给定轴的元素的累积总和。
7. numpy.nancumprod(a, axis, dtype)：返回沿给定轴的元素的累积乘积, 将 NaN 视作 1。
8. numpy.nancumsum(a, axis, dtype)：返回沿给定轴的元素的累积总和, 将 NaN 视作 0。
9. numpy.diff(a, n, axis)：计算沿指定轴的第 n 个离散差分。
10. numpy.ediff1d(ary, to_end, to_begin)：数组的连续元素之间的差异。
11. numpy.gradient(f)：返回 N 维数组的梯度。
12. numpy.cross(a, b, axisa, axisb, axisc, axis)：返回两个(数组）向量的叉积。
13. numpy.trapz(y, x, dx, axis)：使用复合梯形规则沿给定轴积分。
14. numpy.trace(a, offset=0, axis1=0, axis2=1, dtype=None, out=None):  # 等价于 diag（a）.sum()

下面，我们选取几个举例测试一下：

```python
>>> import numpy as np
>>> a=np.arange(5)
>>> a
array([0, 1, 2, 3, 4])

>>> np.prod(a) # 所有元素乘积
0

>>> np.sum(a) # 所有元素和
10

>>> np.nanprod(a) # 默认轴上所有元素乘积
0

>>> np.nansum(a) # 默认轴上所有元素和
10

>>> np.cumprod(a) # 默认轴上元素的累积乘积。
array([0, 0, 0, 0, 0])

>>> np.diff(a) # 默认轴上元素差分。
array([1, 1, 1, 1])
```

### 6.5 指数和对数

如果你需要进行指数或者对数求解，可以用到以下这些方法。

1. numpy.exp(x)：计算输入数组中所有元素的指数。
2. numpy.expm1(x)：对数组中的所有元素计算 exp(x） - 1.
3. numpy.exp2(x)：对于输入数组中的所有 p, 计算 2 ** p。
4. numpy.log(x)：计算自然对数。
5. numpy.log10(x)：计算常用对数。
6. numpy.log2(x)：计算二进制对数。
7. numpy.log1p(x)：log(1 + x)。
8. numpy.logaddexp(x1, x2)：log2(2**x1 + 2**x2)。
9. numpy.logaddexp2(x1, x2)：log(exp(x1) + exp(x2))。

### 6.6 算术运算

当然，numpy 也提供了一些用于算术运算的方法，使用起来会比 python 提供的运算符灵活一些，主要是可以直接针对数组。

1. numpy.add(x1, x2)：对应元素相加。
2. numpy.reciprocal(x)：求倒数 1/x。
3. numpy.negative(x)：求对应负数。
4. numpy.multiply(x1, x2)：求解乘法。
5. numpy.divide(x1, x2)：相除 x1/x2。
6. numpy.power(x1, x2)：类似于 x1^x2。
7. numpy.subtract(x1, x2)：减法。
8. numpy.fmod(x1, x2)：返回除法的元素余项。
9. numpy.mod(x1, x2)：返回余项。
10. numpy.modf(x1)：返回数组的小数和整数部分。
11. numpy.remainder(x1, x2)：返回除法余数。

```python
>>> import numpy as np

>>> a1 = np.random.randint(0, 10, 5)
>>> a2 = np.random.randint(0, 10, 5)

>>> a1
array([3, 7, 8, 0, 0])

>>> a2
array([1, 8, 6, 4, 4])

>>> np.add(a1, a2)
array([ 4, 15, 14,  4,  4])

>>> np.reciprocal(a1)
array([0, 0, 0, , ])

>>> np.negative(a1)
array([-3, -7, -8,  0,  0])

>>> np.multiply(a1, a2)
array([ 3, 56, 48,  0,  0])

>>> np.divide(a1, a2)
array([3, 0, 1, 0, 0])

>>> np.power(a1, a2)
array([3,5764801,262144,0,0])

>>> np.subtract(a1, a2)
array([ 2, -1,  2, -4, -4])

>>> np.fmod(a1, a2)
array([0, 7, 2, 0, 0])

>>> np.mod(a1, a2)
array([0, 7, 2, 0, 0])

>>> np.modf(a1)
(array([ 0.,  0.,  0.,  0.,  0.]), array([ 3.,  7.,  8.,  0.,  0.]))

>>> np.remainder(a1, a2)
array([0, 7, 2, 0, 0])
>>>
```

### 6.7 矩阵和向量积

求解向量、矩阵、张量的点积等同样是 numpy 非常强大的地方。

1. numpy.dot(a,b)：求解两个数组的点积。
2. numpy.vdot(a,b)：求解两个向量的点积。
3. numpy.inner(a,b)：求解两个数组的内积。
4. numpy.outer(a,b)：求解两个向量的外积。
5. numpy.matmul(a,b)：求解两个数组的矩阵乘积。
6. numpy.tensordot(a,b)：求解张量点积。
7. numpy.kron(a,b)：计算 Kronecker 乘积。

### 6.8 其他

除了上面这些归好类别的方法，numpy 中还有一些用于数学运算的方法，归纳如下：

1. numpy.angle(z, deg)：返回复参数的角度。
2. numpy.real(val)：返回数组元素的实部。
3. numpy.imag(val)：返回数组元素的虚部。
4. numpy.conj(x)：按元素方式返回共轭复数。
5. numpy.convolve(a, v, mode)：返回线性卷积。
6. numpy.sqrt(x)：平方根。
7. numpy.cbrt(x)：立方根。
8. numpy.square(x)：平方。
9. numpy.absolute(x)：绝对值, 可求解复数。
10. numpy.fabs(x)：绝对值。
11. numpy.sign(x)：符号函数。
12. numpy.maximum(x1, x2)：最大值。
13. numpy.minimum(x1, x2)：最小值。
14. numpy.nan_to_num(x)：用 0 替换 NaN。
15. numpy.interp(x, xp, fp, left, right, period)：线性插值。
16. numpy.mean（） 平均值
17. numpy.std（） 标准差 numpy.var（） 方差
18. numpy.max（） 最大值numpy.min（） 最小值

## 7、代数运算

上面，我们分为 8 个类别，介绍了 numpy 中常用到的数学函数。这些方法让复杂的计算过程表达更为简单。除此之外，numpy 中还包含一些代数运算的方法，尤其是涉及到矩阵的计算方法，求解特征值、特征向量、逆矩阵等，非常方便。

1. numpy.linalg.cholesky(a)：Cholesky 分解。
2. numpy.linalg.qr(a ,mode)：计算矩阵的 QR 因式分解。
3. numpy.linalg.svd(a ,full_matrices,compute_uv)：奇异值分解。
4. numpy.linalg.eig(a)：计算正方形数组的特征值和右特征向量。
5. numpy.linalg.eigh(a, UPLO)：返回 Hermitian 或对称矩阵的特征值和特征向量。
6. numpy.linalg.eigvals(a)：计算矩阵的特征值。
7. numpy.linalg.eigvalsh(a, UPLO)：计算 Hermitian 或真实对称矩阵的特征值。
8. numpy.linalg.norm(x ,ord,axis,keepdims)：计算矩阵或向量范数。
9. numpy.linalg.cond(x ,p)：计算矩阵的条件数。
10. numpy.linalg.det(a)：计算数组的行列式。
11. numpy.linalg.matrix_rank(M ,tol)：使用奇异值分解方法返回秩。
12. numpy.linalg.slogdet(a)：计算数组的行列式的符号和自然对数。
13. numpy.trace(a ,offset,axis1,axis2,dtype,out)：沿数组的对角线返回总和。
14. numpy.linalg.solve(a,b)：求解线性矩阵方程或线性标量方程组。
15. numpy.linalg.tensorsolve(a,b ,axes)：为 x 解出张量方程a x = b
16. numpy.linalg.lstsq(a,b ,rcond)：将最小二乘解返回到线性矩阵方程。
17. numpy.linalg.inv(a)：计算逆矩阵。
18. numpy.linalg.pinv(a ,rcond)：计算矩阵的（Moore-Penrose）伪逆。
19. numpy.linalg.tensorinv(a ,ind)：计算N维数组的逆。

## 8、Numpy 数组索引和切片

### 8.1 数组索引

我们可以通过索引值（从 0 开始）来访问 Ndarray 中的特定位置元素。Numpy 中的索引和 python 对 list 索引的方式非常相似，但又有所不同。我们一起来看一下：

首先是，一维数据索引：

```python
>>> import numpy as np

>>> a = np.arange(10)
>>> a
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

# 获取索引值为 1 的数据
>>> a[1]
1
# 分别获取索引值为 1，2，3 的数据
>>> a[[1, 2, 3]]
array([1, 2, 3])
```

对于二维数据而言：

```python
>>> import numpy as np

>>> a = np.arange(20).reshape(4,5)

>>> a
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19]])

# 获取第 2 行，第 3 列的数据
>>> a[1,2]
7
```

如果，我们使用 python 中的 list 索引同样的值，看看有什么区别：

```python
# 创建一个数据相同的 list
>>> a = [[ 0,  1,  2,  3,  4],[ 5,  6,  7,  8,  9],[10, 11, 12, 13, 14],[15, 16, 17, 18, 19]]
 
# 按照上面的方法获取第 2 行，第 3 列的数据，报错。
>>> a[1,2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: list indices must be integers or slices, not tuple
 
# python 中 list 索引 2 维数据的方法
>>> a[1][2]
7
```

如何索引二维 Ndarray 中的多个元素值，这里使用逗号,分割：

```python
>>> import numpy as np

>>> a = np.arange(20).reshape(4,5)

>>> a
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19]])

# 索引
>>> a[[1,2],[3,4]]
array([ 8, 14])
```

这里需要注意索引的对应关系。我们实际获取的是[1,3]，也就是第2行和第4列对于的值8。以及[2, 4]，也就是第3行和第5列对于的值14。

那么，三维数据呢？

```python
>>> import numpy as np

>>> a = np.arange(30).reshape(2,5,3)
>>> a
array([[[ 0,  1,  2],
        [ 3,  4,  5],
        [ 6,  7,  8],
        [ 9, 10, 11],
        [12, 13, 14]],

       [[15, 16, 17],
        [18, 19, 20],
        [21, 22, 23],
        [24, 25, 26],
        [27, 28, 29]]])

# 索引
>>> a[[0,1],[1,2],[1,2]]
array([ 4, 23])
```

这里，[0,1]分布代表 axis = 0 和 axis = 1。而，后面的[1,2],[1,2] 分别选择了第 2 行第2 列和第 3 行第3 列的两个数。

### 8.2 数组切片

Numpy 里面针对Ndarray的数组切片和 python 里的list 切片操作是一样的。其语法为：

```python
Ndarray[start:stop:step]
```

start:stop:step 分布代表起始索引：截至索引：步长。对于一维数组：

```python
>>> import numpy as np

>>> a = np.arange(10)
>>> a
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> a[:5]
array([0, 1, 2, 3, 4])

>>> a[5:10]
array([5, 6, 7, 8, 9])

>>> a[0:10:2]
array([0, 2, 4, 6, 8])
```

对于多维数组，我们只需要用逗号,分割不同维度即可：

```python
>>> import numpy as np

>>> a = np.arange(20).reshape(4,5)

>>> a
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19]])

# 先取第 3，4 列（第一个维度），再取第 1，2，3 行（第二个维度）。
>>> a[0:3,2:4]
array([[ 2,  3],
       [ 7,  8],
       [12, 13]])

# 按步长为 2 取所有列和所有行的数据。
>>> a[:,::2]
array([[ 0,  2,  4],
       [ 5,  7,  9],
       [10, 12, 14],
       [15, 17, 19]])
```

当超过 3 维或更多维时，用 2 维数据的切片方式类推即可。

### 8.3 索引与切片区别

你可能有点疑问，上面的索引和切片怎么看起来这么相似呢？

它们的语法的确很相似，但实际上有区别：

**1. 修改切片中的内容会影响原始数组。**

```python
>>> import numpy as np

>>> a = np.arange(10)
>>> a
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> a[1] = 100

>>> a
array([0, 100, 2, 3, 4, 5, 6, 7, 8, 9])
```

除此之外，切片只能通过步长控制得到连续的值，而索引可以得到任意值。也就是说，索引的自由度更大。


### 8.4 高级索引（Fancy indexing）

指使用列表或者数组进行索引:

```python
from numpy import *

A = array([[n+m*10 for n in range(5)] for m in range(5)])
print(A)
'''
[[ 0  1  2  3  4]
 [10 11 12 13 14]
 [20 21 22 23 24]
 [30 31 32 33 34]
 [40 41 42 43 44]]
'''
row_indices = [1, 2, 3]
print(A[row_indices])
'''
=> array([[10, 11, 12, 13, 14],
          [20, 21, 22, 23, 24],
          [30, 31, 32, 33, 34]])
'''
col_indices = [1, 2, -1] # remember, index -1 means the last element
print(A[row_indices, col_indices])
'''
=> array([11, 22, 34])
'''
```

我们也可以使用索引掩码:

```python
from numpy import *

B = array([n for n in range(5)])
print(B)
'''
=> array([0, 1, 2, 3, 4])
'''
row_mask = array([True, False, True, False, False])
print(B[row_mask])
'''
=> array([0, 2])
'''

# same thing
row_mask = array([1,0,1,0,0], dtype=bool)
print(B[row_mask])

'''
=> array([0, 2])
'''
```

使用比较操作符生成掩码:


```python
from numpy import *
x = arange(0, 10, 0.5)
print(x)
'''
=> array([ 0. ,  0.5,  1. ,  1.5,  2. ,  2.5,  3. ,  3.5,  4. ,  4.5,  5. ,
           5.5,  6. ,  6.5,  7. ,  7.5,  8. ,  8.5,  9. ,  9.5])
'''
mask = (5 < x) * (x < 7.5)
print(mask)
'''
=> array([False, False, False, False, False, False, False, False, False,
          False, False,  True,  True,  True,  True, False, False, False,
          False, False], dtype=bool)
'''
print(x[mask])
'''
=> array([ 5.5,  6. ,  6.5,  7. ])
'''
mask=(5 < x) - (x < 7.5)
print(mask)
'''
[ True  True  True  True  True  True  True  True  True  True  True False
 False False False  True  True  True  True  True]
'''
print(x[mask])
'''
[ 0.   0.5  1.   1.5  2.   2.5  3.   3.5  4.   4.5  5.   7.5  8.   8.5  9.
  9.5]
'''
```



## 9、排序、搜索、计数

最后，再介绍几个 numpy 针对数组元素的使用方法，分别是排序、搜索和计数。

### 9.1 排序

我们可以使用 numpy.sort方法对多维数组元素进行排序。其方法为：

```python
numpy.sort(a, axis=-1, kind='quicksort', order=None)
```

其中：

- a：数组。
- axis：要排序的轴。如果为None，则在排序之前将数组铺平。默认值为 -1，沿最后一个轴排序。
- kind：{'quicksort'，'mergesort'，'heapsort'}，排序算法。默认值为 quicksort。

举个例子：

```python
>>> import numpy as np

>>> a = np.random.rand(20).reshape(4,5)
>>> a
array([[ 0.32930243,  0.63665893,  0.67589989,  0.05413352,  0.26090526],
       [ 0.6996066 ,  0.66006238,  0.88240934,  0.17563549,  0.03015105],
       [ 0.79075184,  0.40115859,  0.39336513,  0.64691791,  0.96333534],
       [ 0.20052738,  0.46157057,  0.48653336,  0.34537645,  0.54597273]])

>>> np.sort(a)
array([[ 0.05413352,  0.26090526,  0.32930243,  0.63665893,  0.67589989],
       [ 0.03015105,  0.17563549,  0.66006238,  0.6996066 ,  0.88240934],
       [ 0.39336513,  0.40115859,  0.64691791,  0.79075184,  0.96333534],
       [ 0.20052738,  0.34537645,  0.46157057,  0.48653336,  0.54597273]])
```

除了 numpy.sort，还有这样一些对数组进行排序的方法：

- numpy.lexsort(keys ,axis)：使用多个键进行间接排序。
- numpy.argsort(a ,axis,kind,order)：沿给定轴执行间接排序。
- numpy.msort(a)：沿第 1 个轴排序。
- numpy.sort_complex(a)：针对复数排序。

### 9.2 搜索和计数

除了排序，我们可以通过下面这些方法对数组中元素进行搜索和计数。列举如下：

1. argmax(a ,axis,out)：返回数组中指定轴的最大值的索引。
2. nanargmax(a ,axis)：返回数组中指定轴的最大值的索引,忽略 NaN。
3. argmin(a ,axis,out)：返回数组中指定轴的最小值的索引。
4. nanargmin(a ,axis)：返回数组中指定轴的最小值的索引,忽略 NaN。
5. argwhere(a)：返回数组中非 0 元素的索引,按元素分组。
6. nonzero(a)：返回数组中非 0 元素的索引。
7. flatnonzero(a)：返回数组中非 0 元素的索引,并铺平。
8. where(条件,x,y)：根据指定条件,从指定行、列返回元素。
9. searchsorted(a,v ,side,sorter)：查找要插入元素以维持顺序的索引。
10. extract(condition,arr)：返回满足某些条件的数组的元素。
11. count_nonzero(a)：计算数组中非 0 元素的数量。

选取其中的一些方法举例：

```python
>>> import numpy as np
>>> a = np.random.randint(0,10,20)

>>> a
array([3, 2, 0, 4, 3, 1, 5, 8, 4, 6, 4, 5, 4, 2, 6, 6, 4, 9, 8, 9])

>>> np.argmax(a)
17

>>> np.nanargmax(a)
17

>>> np.argmin(a)
2

>>> np.nanargmin(a)
2

>>> np.argwhere(a)
array([[ 0],[ 1],[ 3],[ 4],[ 5],[ 6],[ 7],[ 8],[ 9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19]], dtype=int64)

>>> np.nonzero(a)
(array([ 0,  1,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], dtype=int64),)

>>> np.flatnonzero(a)
array([ 0,  1,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], dtype=int64)

>>> np.count_nonzero(a)
19
```

## 10. 操作 numpy 数组的常用函数

**where**

使用 where 函数能将索引掩码转换成索引位置：

```python
from numpy import *

x = arange(0, 10, 0.5)
'''
array([ 0. ,  0.5,  1. ,  1.5,  2. ,  2.5,  3. ,  3.5,  4. ,  4.5,  5. ,
           5.5,  6. ,  6.5,  7. ,  7.5,  8. ,  8.5,  9. ,  9.5])
'''
mask = (5 < x) * (x < 7.5)
'''
=> array([False, False, False, False, False, False, False, False, False,
          False, False,  True,  True,  True,  True, False, False, False,
          False, False], dtype=bool)
'''

x[mask]
'''
=> array([ 5.5,  6. ,  6.5,  7. ])
'''

indices = where(mask)
'''
=> (array([11, 12, 13, 14]),)
'''

x[indices] # this indexing is equivalent to the fancy indexing x[mask]
'''
=> array([ 5.5,  6. ,  6.5,  7. ])
'''
```

**diag**
使用 diag 函数能够提取出数组的对角线：

```python
from numpy import *

A = array([[n+m*10 for n in range(5)] for m in range(5)])
'''
=> array([[ 0,  1,  2,  3,  4],
          [10, 11, 12, 13, 14],
          [20, 21, 22, 23, 24],
          [30, 31, 32, 33, 34],
          [40, 41, 42, 43, 44]])
'''
diag(A)
'''
=> array([ 0, 11, 22, 33, 44])
'''
diag(A, -1)
'''
array([10, 21, 32, 43])
'''
```

**take**

take 函数与高级索引（fancy indexing）用法相似：

```python
from numpy import *

v2 = arange(-3,3)
'''
=> array([-3, -2, -1,  0,  1,  2])
'''
row_indices = [1, 3, 5]
v2[row_indices] # fancy indexing
'''
=> array([-2,  0,  2])
'''
v2.take(row_indices)
'''
=> array([-2,  0,  2])
'''
```

但是 take 也可以用在 list 和其它对象上：

```python
take([-3, -2, -1,  0,  1,  2], row_indices)

=> array([-2,  0,  2])
```

**choose**

选取多个数组的部分组成新的数组：

```python
from numpy import *

which = [1, 0, 1, 0]
choices = [[-1,-2,-3,-4], [5,6,7,8]]
print(choose(which, choices))
'''
=> array([ 5, -2,  7, -4])
```

