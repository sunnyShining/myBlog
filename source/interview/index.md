---
title: 面试
date: 2018-09-11 09:20:28
pageid: interview
---

### 前端面试题

#### 1、DOMContentLoaded和onload事件区别和兼容

<p style="text-indent: 1em">DOMContentLoaded事件是当初始HTML文档完全被加载和解析（即所有DOM解析完）时触发的，无需要等待样式列表、图片、子框架完成加载。onload事件要等页面所有元素，包括图片以及脚本等全部加载完成才触发，因此它比DOMContentLoaded要更晚执行。</p>

#### 2、js基本数据类型
<p style="text-indent: 1em">string、number、boolean、object、null、undefined、symbol

#### 3、Promise实现

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta content="telephone=no" name="format-detection">
    <meta content="false" id="twcClient" name="twcClient">
    <meta content="sunny。all rights reserved" name="copyright" />
</head>

<body>
    <script type="text/javascript">
    	function Promise (fn) {
    		var state = 'pending';
    		var callbacks = []; // 回调函数数组
    		var val = null;
    		this.then = function (onFulfilled, onRejected) {
    			return new Promise (function (resolve, reject) {
    				// 在pending的时候会加回调函数，fulfilled会去执行
	    			if (state === 'pending') {
	    				callbacks.push(onFulfilled)
	    				return this
	    			}
	    			var cb = state === 'fulfilled' ? onFulfilled : onRejected;
	    			if (cb === null) {
	    				cb = state === 'fulfilled' ? resolve : reject;
	    				cb(val);
	    				return;
	    			}
	    			try {
	    				var ret = cb(val);
	    				resolve(ret);
	    			} catch (e) {
	    				reject(e);
	    			}

    			})
    		};
    		function resolve (newVal) {
    			if (newVal && (typeof newVal === 'object' || typeof newVal === 'function')) {
            		var then = newVal.then;
            		if (typeof then === 'function') {
                		then.call(newVal, resolve, reject);
                		return;
            		}
        		}
    			val = newVal;
    			state = 'fulfilled';
    			execute();
    		}
    		function reject (reason) {
    			state = 'reject';
    			val = reason;
    			execute();
    		}
		    function execute() {
		        setTimeout(function () {
		            callbacks.forEach(function (callback) {
		                handle(callback);
		            });
		        }, 0);
		    }
    		fn(resolve, reject);
    	}
    	function getUserId () {
    		return new Promise((resolve, reject) => {
    			resolve(9999)
    		});
    	}
    	getUserId().then(function (id) {
    		console.log(id);
    	});
    </script>
</body>

</html>

```
