---
author: sunny
title: python3批量压缩图片
date: 2018-09-26 16:56:30
categories: 编程
tags: python
---

## 背景

[TinyPNG](https://tinypng.com/)和[TinyJPG](https://tinyjpg.com/)两个网站提供了.png和.jpg格式图片压缩和优化的功能。虽然可以很轻松地使用网页版进行操作，但是有些时候，调用网站提供的API更为方便快捷。tinify模块就是由TinyPNG提供的使用Python调用Tiny PNG API的模块。

<!-- more -->

## 安装

```sh
pip install --upgrade tinify
```

## 获取tinify API key

如果想调用TinyPNG的API，需要先在他们的网站[TinyPNG Developer API](https://tinypng.com/dashboard/api)上申请一个API key用于身份验证。提供名称和邮箱，就可以获得一个API key，API key会以链接的形式发到邮箱里，可以使用icloud和outlook邮箱，不可使用qq邮箱，申请成功如下

![api_key](https://upload-images.jianshu.io/upload_images/4605151-5216b3b7091a201d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 编写python3代码

1、获取终端输入的文件目录

```python
"""
Usage:
    tinypng [-d] <dir>

Options:
    -h,--help   显示帮助菜单
    -d          压缩目录

Example:
    tinypng -d /Users/sunny/Desktop/xxx
"""

...

arguments = docopt(__doc__)
finder = arguments['<dir>']
```

2、获取目录下图片文件

```python
# 获取图片路径
def get_img_path(self, finder):
    for p in os.listdir(finder):
        temp_path = os.path.join(finder, p)
        if os.path.isdir(temp_path):
            self.get_img_path(temp_path)
        else:
            if os.path.splitext(p)[1] == '.png' or os.path.splitext(p)[1] == '.jpg' or os.path.splitext(p)[1] == '.jpeg':
                self.png_path.append(os.path.join(finder, p))
```

3、压缩图片

```python
# 循环文件
def handle_compress (self):
    for file in self.png_path:
        self.compress_file(os.path.abspath(file))
# 压缩文件
def compress_file (self, inputFile, width=None):
    print('-----------------compress start-----------------')
    if not os.path.isfile(inputFile):
        print('这不是一个文件，请输入文件的正确路径!')
        return
    else:
        dirname  = os.path.dirname(inputFile)
        basename = os.path.basename(inputFile)
        fileName, fileSuffix = os.path.splitext(basename)
        print('dirname=%s, basename=%s, fileName=%s, fileSuffix=%s' % (dirname, basename, fileName, fileSuffix))
        if fileSuffix == '.png' or fileSuffix == '.jpg' or fileSuffix == '.jpeg':
            dir_list = dirname.split(self.finder)
            if dir_list[1] != '' and dir_list[1][0] == '/':
                dir = os.path.join(self.finder, 'tiny', dir_list[1][1:])
            else:
                dir = os.path.join(self.finder, 'tiny', dir_list[1])
            self.mkdir(dir)
            self.compress(inputFile, f'{dir}/{basename}', width)
        else:
            print(f'{fileName}不支持该文件类型压缩!')
    print('-----------------compress end-----------------')
# 压缩图片
def compress (self, inputFile, outputFile, img_width):
    source = tinify.from_file(inputFile)
    if img_width is not None:
        resized = source.resize(method='scale', width=img_width)
        resized.to_file(outputFile)
        print(f'{inputFile}压缩成功!')
    else:
        source.to_file(outputFile)
        print(f'{inputFile}压缩成功!')
# 新建文件夹
def mkdir (self, path):
    exist = os.path.exists(path)
    if not exist:
        print(f'建了一个名字叫做{path}的文件夹！')
        os.makedirs(path)
        return True
    else:
        print(f'名字叫做{path}的文件夹已经存在了！')
        return False
```

4、完整代码

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Usage:
    tinypng [-d] <dir>

Options:
    -h,--help   显示帮助菜单
    -d          压缩目录

Example:
    tinypng -d /Users/sunny/Desktop/xxx
"""

import os.path
import tinify, os
from docopt import docopt

__author__ = 'sunny'
__date__ = '2018/09/26'

# 请替换为自己申请的Key
tinify.key = '6OB4sxKcwILxBSzknRKvdbL22f1UDIFv'

class CompressImg ():
    def __init__ (self, finder):
        self.png_path = []
        self.finder = finder
    # 获取图片路径
    def get_img_path(self, finder):
        for p in os.listdir(finder):
            temp_path = os.path.join(finder, p)
            if os.path.isdir(temp_path):
                self.get_img_path(temp_path)
            else:
                if os.path.splitext(p)[1] == '.png' or os.path.splitext(p)[1] == '.jpg' or os.path.splitext(p)[1] == '.jpeg':
                    self.png_path.append(os.path.join(finder, p))
    # 循环文件
    def handle_compress (self):
        for file in self.png_path:
            self.compress_file(os.path.abspath(file))
    # 压缩文件
    def compress_file (self, inputFile, width=None):
        print('-----------------compress start-----------------')
        if not os.path.isfile(inputFile):
            print('这不是一个文件，请输入文件的正确路径!')
            return
        else:
            dirname  = os.path.dirname(inputFile)
            basename = os.path.basename(inputFile)
            fileName, fileSuffix = os.path.splitext(basename)
            print('dirname=%s, basename=%s, fileName=%s, fileSuffix=%s' % (dirname, basename, fileName, fileSuffix))
            if fileSuffix == '.png' or fileSuffix == '.jpg' or fileSuffix == '.jpeg':
                dir_list = dirname.split(self.finder)
                if dir_list[1] != '' and dir_list[1][0] == '/':
                    dir = os.path.join(self.finder, 'tiny', dir_list[1][1:])
                else:
                    dir = os.path.join(self.finder, 'tiny', dir_list[1])
                self.mkdir(dir)
                self.compress(inputFile, f'{dir}/{basename}', width)
            else:
                print(f'{fileName}不支持该文件类型压缩!')
        print('-----------------compress end-----------------')
    # 压缩图片
    def compress (self, inputFile, outputFile, img_width):
        source = tinify.from_file(inputFile)
        if img_width is not None:
            resized = source.resize(method='scale', width=img_width)
            resized.to_file(outputFile)
            print(f'{inputFile}压缩成功!')
        else:
            source.to_file(outputFile)
            print(f'{inputFile}压缩成功!')
    # 新建文件夹
    def mkdir (self, path):
        exist = os.path.exists(path)
        if not exist:
            print(f'建了一个名字叫做{path}的文件夹！')
            os.makedirs(path)
            return True
        else:
            print(f'名字叫做{path}的文件夹已经存在了！')
            return False
def cli ():
    """command-line interface"""
    arguments = docopt(__doc__)
    finder = arguments['<dir>']
    try:
        tinify.validate()
        if tinify.compression_count < 500:
            print(f'本月已压缩图片次数{tinify.compression_count}')
            ci = CompressImg(finder)
            ci.get_img_path(finder)
            ci.handle_compress()
        else:
            print(f'本月压缩图片次数不足')
    except tinify.Error as e:
        print(f'{e}error')

if __name__ == '__main__':
    cli()

```
## 执行

```
python3 tinypng.py -d xxx (xxx为路径)
```

## 效果

![result](https://upload-images.jianshu.io/upload_images/4605151-1d1c2c8fcc082c75.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)