---
author: sunny
title: 解决vue init webpack project新建项目权限问题
date: 2018-01-26 21:23:32
tags: vue
categories: 编程
---

从我[简书](https://www.jianshu.com/p/b1e9f081b32f)搬迁

## 背景

> 最近开发项目时，同事学习vue项目时自己用官网命令vue init webpack project新建项目时出现

```bash
/usr/local/lib/node_modules/vue-cli/node_modules/rimraf/rimraf.js:313
        throw er
        ^

Error: EACCES: permission denied, unlink '/Users/xxx/.vue-templates/webpack/.gitignore'
```
<!-- more -->

报错原因很明显，文件权限不够，可以在/usr/local/lib/node_modules/vue-cli/bin/ 找到vue-init这个文件，用编辑器打开发现如下代码

```javascript
/**
 * Download a generate from a template repo.
 *
 * @param {String} template
 */

function downloadAndGenerate (template) {
    const spinner = ora('downloading template')
    spinner.start()
    // Remove if local template exists
    if (exists(tmp)) rm(tmp)
   download(template, tmp, { clone }, err => {
      spinner.stop()
      if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
    generate(name, tmp, to, err => {
        if (err) logger.fatal(err)
        console.log()
        logger.success('Generated "%s".', name)
    })
  })
}
```
if (exists(tmp)) rm(tmp)这句代码便是报错原因所在，这句表示删除/Users/xxx/.vue-templates/webpack这个文件夹，然而的权限不够，导致删除失败，从而抛出错误

## 解决方案

一、修改文件夹权限

1、原始文件夹权限（这个权限下正常运行）

![1.png](http://upload-images.jianshu.io/upload_images/4605151-3fb96bb3101a98d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2、更改文件夹权限

![2.png](http://upload-images.jianshu.io/upload_images/4605151-ba0666add9845a3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3、结果报出如下错误

![3.png](http://upload-images.jianshu.io/upload_images/4605151-5c9596f7d43a50b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4、改回权限即可解决错误

>tips: 一定要将权限应用到包含的项目

二、用sudo命令运行即可
```
sudo vue init webpack project
```
新建项目成功后，将新建的文件权限改下，否则无法开发项目