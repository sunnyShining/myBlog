---
title: 观察者模式和"发布-订阅"者模式
date: 2019-01-27 11:25:00
categories: 编程
tags: javascript
---

## 背景

在网上查阅资料的时候发现有两种常见的设计模式，观察者模式和“发布-订阅”者模式，有人认为两种模式认为两种模式是相同的，但通过查阅各个博客，发现其中还是有一些不同。

<!-- more -->

## 观察者模式

观察者模式在软件设计中是一个对象(Subject)，维护一个依赖列表(ObserversList)，当任何状态发生改变自动通知(notify)它们。

例如：餐馆就是一个主体，是观察的对象，用餐人员是观察者，餐馆座位是观察者的队列，叫号（状态发生改变）时就会通知(notify)用餐人员(观察者)，观察者去看手里的号码，就是执行相应的函数(update)；

具体实现代码如下

```js
function ObserverList() {
    this.ObserverList = [];
}
ObserverList.prototype.add = function(obj) {
    this.ObserverList.push(obj);
};
ObserverList.prototype.count = function() {
    var count = this.ObserverList.length;
    return count;
}
ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.ObserverList.length) {
        return this.ObserverList[index];
    }
}
ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;
    while (i < this.ObserverList.length) {
        if (obj === this.ObserverList[i]) {
            return i;
        }
        i++;
    }
    return -1;
}
ObserverList.prototype.remove = function(index) {
    if (index > -1 && index < this.ObserverList.length) {
        var removeItem = this.ObserverList.splice(index, 1);
        return removeItem;
    }
}

function Subject() {
    this.Observers = new ObserverList();
}
Subject.prototype.addObserver = function(observer) {
    this.Observers.add(observer);
};
Subject.prototype.removeObserver = function(observer) {
    this.Observers.remove(this.Observers.indexOf(observer, 0))
}
// 通知
Subject.prototype.notify = function(context) {
    var observerscount = this.Observers.count();
    for (var i = 0; i < observerscount; i++) {
        var observer = this.Observers.get(i);
        observer && observer.update && observer.update(context);
    }
}

function Observer() {
    this.update = function(ctx) {
        // ...
    };
}
var xiaohong = new Observer();
xiaohong.update = function (ctx) {
	console.log(ctx + '吗？')
}
var xiaoming = new Observer();
xiaoming.update = function (ctx) {
	console.log(ctx)
}
var sub = new Subject();
// 加上小明这个观察者
sub.addObserver(xiaohong);
sub.addObserver(xiaoming);
sub.notify('着火了');
```

## "发布-订阅"者模式

在"发布-订阅"者模式，消息的发送方，叫做发布者（publishers），消息不会直接发送给特定的接收者(Subscriber)。需要一个第三方组件，叫做信息中介，它将订阅者和发布者串联起来，它过滤和分配所有输入的消息。换句话说，发布-订阅模式用来处理不同系统组件的信息交流，即使这些组件不知道对方的存在。

例如：我们在微信平台订阅了公众号，公众号管理员(publishers)不需要直接发消息给订阅人员(Subscriber)，而是通过微信这个平台，当它有新的文章发表后，就会推送给我们所有订阅的人。

```js
var Event = (function() {
    var global = this;
    var Event;
    var _default = 'default';
    Event = function() {
        var _listen,
            _trigger,
            _remove,
            _slice = Array.prototype.slice,
            _shift = Array.prototype.shift,
            _unshift = Array.prototype.unshift,
            namespaceCache = {},
            _create,
            find,
            each = function(ary, fn) {
                var ret;
                for (var i = 0, l = ary.length; i < l; i++) {
                    var n = ary[i];
                    ret = fn.call(n, i, n);
                }
                return ret;
            };
        _listen = function(key, fn, cache) {
            if (!cache[key]) {
                cache[key] = [];
            }
            cache[key].push(fn);
        };
        _remove = function(key, cache, fn) {
            if (cache[key]) {
                if (fn) {
                    for (var i = cache[key].length; i >= 0; i--) {
                        if (cache[key][i] === fn) {
                            cache[key].splice(i, 1);
                        }
                    }
                } else {
                    cache[key] = [];
                }
            }
        };
        _trigger = function() {
            var cache = _shift.call(arguments),
                key = _shift.call(arguments),
                args = arguments,
                _self = this,
                ret,
                stack = cache[key];
            if (!stack || !stack.length) {
                return;
            }
            return each(stack, function() {
                this.apply(_self, args);
            });
        };
        _create = function(namespace) {
            var namespace = namespace || _default;
            var cache = {};
            var offlineStack = []; //离线事件
            var ret = {
                listen: function(key, fn, last) {
                    _listen(key, fn, cache);
                    if (offlineStack === null) {
                        return;
                    }
                    if (last === 'last') {
                        offlineStack.length && offlineStack.pop()();
                    } else {
                        each(offlineStack, function() {
                            this();
                        });
                    }
                    offlineStack = null;
                },
                one: function(key, fn, last) {
                    _remove(key, cache);
                    this.listen(key, fn, last);
                },
                remove: function(key, fn) {
                    _remove(key, cache, fn);
                },
                trigger: function() {
                    var fn,
                        args,
                        _self = this;
                    _unshift.call(arguments, cache);
                    args = arguments;
                    fn = function() {
                        return _trigger.apply(_self, args);
                    };
                    if (offlineStack) {
                        return offlineStack.push(fn);
                    }
                    return fn();
                }
            };
            return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret) : ret;
        };
        return {
            create: _create,
            one: function(key, fn, last) {
                var event = this.create();
                event.one(key, fn, last);
            },
            remove: function(key, fn) {
                var event = this.create();
                event.remove(key, fn);
            },
            listen: function(key, fn, last) {
                var event = this.create();
                event.listen(key, fn, last);
            },
            trigger: function() {
                var event = this.create();
                event.trigger.apply(this, arguments);
            }
        };
    }();
    return Event;
})();
/********* 先发布后订阅 *********/
Event.trigger('click', 1);
Event.listen('click', function(a) {
    console.log(a); //1
});
/********* 使用命名空间 *********/
Event.create('namespace1').listen('click', function(a) {
    console.log(a); //1
})
Event.create('namespace1').trigger('click', 1);
Event.create('namespace3').listen('click', function(a) {
    console.log(a); //2
})
Event.create('namespace3').trigger('click', 2);
```
