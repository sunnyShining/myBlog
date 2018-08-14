---
author: sunny
title: 创建属于自己的Yeoman Generator
date: 2017-12-03 11:22:36
tags: js
---

## 背景

最近自己写了下自己项目的react的脚手架，以前一直采用种子文件进行复制，最近看到yo，想通过命令行自动去生成所需文件当然，对于Yeoman来说是大材小用，但小小的尝试也能基本掌握Yeoman的用法吧。

<!-- more -->

## 步骤

**1.下载安装yo和generator-generator**

在做这个步骤之前，必须安装好node和npm，之后全局安装yo和generator-generator

```bash
$ sudo npm install -g yo
$ sudo npm install -g generator-generator
```

**2.运行generator-generator来创建我们自己需要的generator的基础框架**

```bash
$ sudo yo generator
```
回答下问题，就可以生成你需要的基础框架，如我这里的[链接](https://github.com/sunnyShining/generator-test.git)

**3.准备好模版，将模版复制到generator/app/templates文件夹下**

**4.编辑index.js**

接下来编辑generator/app/index.js文件夹，通过提出问题，收集答案，来生成我们需要的文件。具体看代码注释。

```bash
'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const fs = require('fs');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
          'Welcome to the kickass ' + chalk.red('generator-test') + ' generator!'
        ));

        const prompts = [
            {
                type: 'list',
                name: 'type',
                message: '请选择你要创建的类型?',
                choices: ['routes', 'components']
            }, {
                type: 'input',
                name: 'routesNme',
                message: '请输入你要创建文件的名称！',
                default: 'Feed'
            }
        ];
        // 提出问题，收集答案
        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        if (this.props.type === 'routes') {
        	// 模版
            let routesTmpl = _.template(this.fs.read(this.templatePath('./Feed/Feed.jsx')));
            this.fs.write(this.destinationPath(`src/routes/${this.props.routesNme}/${this.props.routesNme}.jsx`), routesTmpl({
                routes_name: this.props.routesNme
            }));
            this.fs.copy(
                this.templatePath('./Feed/Feed.less'),
                this.destinationPath(`src/routes/${this.props.routesNme}/${this.props.routesNme}.less`)
            );
        } else if (this.props.type === 'components') {
            let routesTmpl = _.template(this.fs.read(this.templatePath('./Feed/Feed.jsx')));
            this.fs.write(this.destinationPath(`src/components/${this.props.routesNme}.jsx`), routesTmpl({
                routes_name: this.props.routesNme
            }));
            this.fs.copy(
                this.templatePath('./Feed/Feed.less'),
                this.destinationPath(`src/components/${this.props.routesNme}/${this.props.routesNme}.less`)
            );
        }
    }

    install() {
        // this.installDependencies();
    }
};
```