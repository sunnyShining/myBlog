// loading和toast
(function(win, doc) {
    var Toast = {
        // 引入toast样式
        importCss: function() {
            var style = doc.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.c-toast {' +
                'position: fixed;' +
                'top: 0;' +
                'left: 0;' +
                'display: flex;' +
                'justify-content: center;' +
                'align-items: center;' +
                'width: 100%;' +
                'height: 100%;' +
                'z-index: 200;' +
                'background: transparent;' +
                '}' +
                '.c-toast .toast-content {' +
                'padding: 10px 15px;' +
                'max-width: 50%;' +
                'text-align: center;' +
                'font-size: 15px;' +
                'color: #fff;' +
                'background-color: rgba(58, 58, 58, 0.9);' +
                'border-radius: 3px;' +
                '}' +

                '.c-toast .toast-loading {' +
                'display: flex;' +
                'flex-direction: column;' +
                'justify-content: center;' +
                'align-items: center;' +
                'border-radius: 5px;' +
                'padding: 15px 15px;' +
                'min-width: 60px;' +
                'font-size: 13px;' +
                'color: #fff;' +
                'background-color: rgba(58, 58, 58, 0.9);' +
                'line-height: 1.5;' +
                '}' +
                '@keyframes loading {' +
                'from {' +
                'transform: rotateZ(0deg)' +
                '}' +
                'to {' +
                'transform: rotateZ(360deg);' +
                '}' +
                '}' +
                '.c-toast .loading-img {' +
                'animation-name: loading;' +
                'animation-fill-mode: both;' +
                'animation-duration: 1.5s;' +
                'animation-timing-function: linear;' +
                'animation-iteration-count: infinite;' +
                '}' +
                '.c-toast .toast-loading img {' +
                'margin-bottom: 5px;' +
                'width: 36px;' +
                'height: 36px;' +
                '}' +

                '.c-toast-text-info{' +
                'margin-top: 6px;' +
                '}' +

                '.c-toast-icon {' +
                'fill: currentColor;' +
                'background-size: cover;' +
                'width: 22px;' +
                'height: 22px;' +
                '}' +
                '.c-toast-icon-xxs {' +
                'width: 15px;' +
                'height: 15px;' +
                '}' +

                '.c-toast-icon-xs {' +
                'width: 18px;' +
                'height: 18px;' +
                '}' +

                '.c-toast-icon-sm {' +
                'width: 21px;' +
                'height: 21px;' +
                '}' +

                '.c-toast-icon-md {' +
                'width: 22px;' +
                'height: 22px;' +
                '}' +

                '.c-toast-icon-lg {' +
                'width: 36px;' +
                'height: 36px;' +
                '}' +

                '.c-toast-icon-loading {' +
                '-webkit-animation: cirle-anim 1s linear infinite;' +
                'animation: cirle-anim 1s linear infinite;' +
                '}' +

                '@-webkit-keyframes cirle-anim {' +
                '100% {' +
                '-webkit-transform: rotate(360deg);' +
                'transform: rotate(360deg);' +
                '}' +
                '}' +

                '@keyframes cirle-anim {' +
                '100% {' +
                '-webkit-transform: rotate(360deg);' +
                'transform: rotate(360deg);' +
                '}' +
                '}';
            document.getElementsByTagName('HEAD').item(0).appendChild(style);
        },
        info: function(content, duration) {
            var options = {
                content: content || '系统错误',
                duration: duration || 1.5
            };
            var toastNode = document.createElement('div');
            toastNode.className = 'c-toast';
            var toastContent = document.createElement('div');
            toastContent.className = 'toast-content';
            toastContent.innerHTML = options.content;
            toastNode.appendChild(toastContent);
            document.body.appendChild(toastNode);
            // 经过设置几秒自动关闭
            setTimeout(function() {
                toastNode && toastNode.remove();
            }, options.duration * 1000);
        },
        loading: function(content) {
            if (!document.querySelector('.c-toast')) {
                content = content || '加载中...';
                this.importCss();
                var toastNode = document.createElement('div');
                toastNode.className = 'c-toast';
                var toastLoading = document.createElement('div');
                toastLoading.className = 'toast-loading';
                var span = document.createElement('span');
                span.className = 'c-toast-text-info';
                var loadImg = '<svg class="c-toast-icon c-toast-icon-loading c-toast-icon-lg">' +
                    '<svg viewBox="0 -2 59.75 60.25">' +
                    '<path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z" />' +
                    '<path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552" />' +
                    '</svg>' +
                    '</svg>';
                span.innerHTML = content;
                toastLoading.innerHTML = loadImg;
                toastLoading.appendChild(span);
                toastNode.appendChild(toastLoading);
                document.body.appendChild(toastNode);
            }
        },
        closeLoading: function() {
            var toastNode = document.querySelector('.c-toast');
            toastNode && toastNode.remove();
        }
    };
    Toast.importCss();
    window.Toast = Toast;
})(window, document);

(function(win, doc) {
    if (!win['String']['prototype']['trim']) {
        win['String']['prototype']['trim'] = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }
    var constants = {
        ACCESS_TOKEN_KEY: 'xups-github-comments-token', // access_token key
        USER_INFO_KEY: 'xups-github-user-info', // 登录用户信息 key
        PER_PAGE: 5, // 每页的评论数
        API_HOST: 'https://api.github.com/'
    };
    var CommentUtils = {
        // 存放数据
        options: {},
        $: function(selector) {
            return /^(\[object HTML)[a-zA-Z]*(Element\])$/.test(Object.prototype.toString.call(selector)) ? selector : doc.querySelector(selector);
        },
        queryUrl: function(key, url, uncode) {
            url = url || location.href;
            var reg = new RegExp('(\\?|&|#|&amp;)' + key + '=([^?&#]*)');
            var result = url.match(reg);
            if (uncode) {
                return result ? result[2] : '';
            }
            return result ? decodeURIComponent(result[2]) : '';
        },
        addClass: function(ele, cName) {
            var arr = ele.className.split(' ').concat(cName.split(' '));
            for (var i = 0; i < arr.length; i++) {
                for (var k = arr.length - 1; k > i; k--) {
                    (arr[k] === '') && arr.splice(k, 1);
                    (arr[i] === arr[k]) && arr.splice(k, 1);
                }
            }
            ele.className = arr.join(' ');
        },
        removeClass: function(ele, cName) {
            var arr1 = ele.className.split(' ');
            var arr2 = cName.split(' ');
            for (var i = 0; i < arr2.length; i++) {
                for (var j = arr1.length - 1; j >= 0; j--) {
                    (arr2[i] === arr1[j]) && arr1.splice(j, 1);
                }
            }
            ele.className = arr1.join(' ');
        },
        /**
         * 格式化日期文本，如 yyyy-MM-dd hh:mm:ss
         */
        formatDate: function(format, date) {
            if (!date) return '';
            if (typeof date == 'number') date = new Date(date * 1000);
            var o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds(),
                'w': '日一二三四五六'.charAt(date.getDay())
            };
            format = format.replace(/y{4}/, date.getFullYear()).replace(/y{2}/, date.getFullYear().toString().substring(2));
            for (var k in o) {
                var reg = new RegExp(k);
                format = format.replace(reg, match);
            }

            function match(m) {
                return m.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length);
            }
            return format;
        },
        htmlEncode: function(str) {
            if (typeof str !== 'string') return;
            str = str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                // .replace(/>/g, '&gt;')
                .replace(/\"/g, '&quot;')
                .replace(/\'/g, '&#39;')
                .replace(/ /g, '&nbsp;');
            return str;
        },
        /* 封装ajax函数
         * @param {string}opts.method http连接的方式，包括POST和GET两种方式
         * @param {string}opt.url 发送请求的url
         * @param {boolean}opts.async 是否为异步请求，true为异步的，false为同步的
         * @param {object}opts.data 发送的参数，格式为对象类型
         * @param {function}opts.success ajax发送并接收成功调用的回调函数
         * @param {function}opts.error ajax发送并接收成功调用的回调函数
         */
        ajax: function(opts) {
            opts = opts || {};
            // 请求方法
            opts.method = (opts.method && opts.method.toLocaleUpperCase()) || 'POST';
            // 请求路径
            opts.url = /^http(s)?:\/\//.test(opts.url) ? opts.url : (constants.API_HOST + opts.url);
            // 异步还是同步
            opts.async = opts.async || true;
            // 请求数据
            opts.data = opts.data || {};
            // 头部
            // opts.headers = Object.assign({}, {'Accept': '*/*', 'Content-Type': 'application/x-www-form-urlencoded'}, opts.headers || {});
            // 成功后回调
            opts.success = opts.success || function() {};
            // 错误后回调
            opts.error = opts.error || function() {};
            var spin = opts.spin; // 是否显示loading，默认不显示
            var errorToast = opts.errorToast === undefined ? true : opts.errorToast; // 是否显示错误警告，默认弹出
            var successToast = opts.successToast; // 是否显示成功警告
            var xhr = null;
            // 兼容IE可不做处理
            if (XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
            var params = [];
            for (var key in opts.data) {
                if (opts.data[key]) {
                    params.push(key + '=' + opts.data[key]);
                }
            }
            var postData = params.join('&');
            var token = window.localStorage.getItem(constants.ACCESS_TOKEN_KEY);
            if (spin && Toast) {
                if (win.responseCount === undefined) win.responseCount = 0;
                if (!win.responseCount++) Toast.loading();
            }
            // 附带身份凭证
            xhr.withCredentials = true;
            // 设置xhr请求的超时时间
            xhr.timeout = 20000;
            if (opts.method === 'POST') {
                xhr.open(opts.method, opts.url, opts.async);
                if (window.JSON) {
                    postData = JSON.stringify(opt.data);
                    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
                } else {
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                }
                if (opt.headers && opt.headers['Accept']) {
                    xhr.setRequestHeader('Accept', opt.headers['Accept']);
                } else {
                    xhr.setRequestHeader('Accept', 'application/vnd.github.squirrel-girl-preview, application/vnd.github.html+json');
                }
                // 登录校验
                if (token) {
                    xhr.setRequestHeader('Authorization', 'token ' + token);
                }
                xhr.send(postData);
            } else if (opts.method === 'GET') {
                xhr.open(opts.method, opts.url + '?' + postData, opts.async);
                xhr.setRequestHeader('Accept', 'application/vnd.github.squirrel-girl-preview, application/vnd.github.html+json');
                // 登录校验
                if (token) {
                    xhr.setRequestHeader('Authorization', 'token ' + token);
                }
                xhr.send(null);
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (spin && Toast) {
                        if (!win.responseCount || !--win.responseCount) Toast.closeLoading();
                    }
                    var response;
                    if (xhr.status >= 200 && xhr.status < 400) {
                        try {
                            response = JSON.parse(xhr.responseText);
                            opts.success(response);
                        } catch (e) {
                            response = {
                                message: '服务器请求失败！'
                            };
                            opts.error(response);
                        }
                    } else {
                        response = {
                            message: xhr.statusText || '服务器请求失败！'
                        };
                        opts.error(response);
                    }
                }
            };
            xhr.onerror = function() {
                opts.error({ message: '请求错误！' });
            };
        },
        init: function(options) {
            this.options = options || {};
            var $container = this.$('#comments');
            var _this = this;
            if (options.container) {
                if (typeof options.container === 'object') {
                    $container = options.container;
                } else if (typeof options.container === 'string') {
                    $container = this.$(options.container);
                } else {
                    $container = this.$('#comments');
                }
            }
            $container.innerHTML = [
                _this.Renders.signBar.tpl,
                _this.Renders.box.tpl,
                _this.Renders.tips.tpl,
                _this.Renders.list.tpl
            ].join('');
            var code = this.queryUrl('code');
            this.Renders.signBar.update();
            this.Renders.box.update();
            // if code，继续GitHub 授权
            if (code) {
                this.flashTitle('登录中');
                this.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    data: {
                        client_id: this.options.clientId,
                        client_secret: this.options.clientSecret,
                        code,
                    },
                    success: function (res) {
                        if (res.access_token || res.data) {
                            if (res.data) {
                                res.access_token = res.data.access_token;
                            }
                            localStorage.setItem(constants.ACCESS_TOKEN_KEY, res.access_token); // 保存 access_token 至 localStorage
                            _this.ajax({
                                url: 'user',
                                method: 'GET',
                                data: {
                                    access_token: res.access_token
                                },
                                success: function(data) {
                                    if (data.login) {
                                        localStorage.setItem(constants.USER_INFO_KEY, JSON.stringify(data)); // 保存用户信息到 localStorage
                                        location.href = location.href.substring(0, location.href.indexOf('?'));
                                    }
                                }
                            });
                        } else {
                            // 登录失败
                            location.href = location.href.substring(0, location.href.indexOf('?'));
                        }
                    },
                    error: function (error) {
                        location.href = location.href.substring(0, location.href.indexOf('?'));
                    }
                });
            } else {
                this.ajax({
                    url: 'repos/' + _this.options.owner + '/' + _this.options.repo + '/issues',
                    method: 'GET',
                    data: {
                        labels: [_this.options.label],
                        rnd: Math.random()
                    },
                    success: function (res) {
                        if (res.length > 0) {
                            var number = res[0].number;
                            var comments = res[0].comments; // 该 issue 下所有评论数
                            _this.issueNumber = number;
                            _this.issueComments = comments;
                            _this.ajax({
                                url: 'repos/' + _this.options.owner + '/' + _this.options.repo + '/issues/' + number + '/comments',
                                method: 'GET',
                                data: {
                                    page: 1,
                                    per_page: constants.PER_PAGE
                                },
                                success: function(list) {
                                    _this.Renders.list.update(1, comments, list, function () {
                                        for (var i = 0, len = list.length; i < len; i++) {
                                            (function(commentId) {
                                                _this.Requests.getReactionsByCommentId(commentId, { content: 'heart' }, function(reactions) {
                                                    _this.Renders.list.reactionUpdate(commentId, reactions);
                                                });
                                            }(list[i].id));
                                        }
                                    });
                                }
                            });

                        } else {
                            // 授权码失效
                            if (typeof res !== 'object') {
                                localStorage.removeItem(constants.ACCESS_TOKEN_KEY);
                                localStorage.removeItem(constants.USER_INFO_KEY);
                                _this.Renders.signBar.update();
                                _this.Renders.box.update();
                                console.warn('登录失败，请稍后刷新再试');
                            } else {
                                _this.Renders.list.update(1, 0, []);
                                _this.Renders.tips.update();
                            }
                        }
                    }
                });
            }
        },
        flashTitle: function(title) {
            var counter = 0;
            document.title = title + '...';
            var timer = setInterval(function() {
                counter++;
                if (counter % 3 === 0) {
                    document.title = title + '...';
                } else if (counter % 3 === 1) {
                    document.title = title + '..';
                } else if (counter % 3 === 2) {
                    document.title = title + '.';
                }
            }, 100);
        },
        Renders: {
            box: {
                tpl: [
                    '<section class="box" id="JELON__commentBox">',
                    '<div class="com-avatar"><img id="JELON__loginAvatar" src="/img/unsigned_avatar.jpg" alt="avatar"></div>',
                    '<div class="com-text">',
                    '<div class="main">',
                    '<textarea class="text-area-edited show" id="JELON__editBox" placeholder="欢迎评论！"></textarea>',
                    '<div class="text-area-preview" id="JELON__previewBox"></div>',
                    '</div>',
                    '<div class="switch">',
                    '<div class="switch-item on" id="JELON__editSwitcher" onclick="JELON.Actions.editPreviewSwitch(\'edit\')">编辑</div>',
                    '<div class="switch-item" id="JELON__previewSwitcher" onclick="JELON.Actions.editPreviewSwitch(\'preview\')">预览</div>',
                    '</div>',
                    '<div class="button" onclick="JELON.Actions.postComment()">提交</div>',
                    '</div>',
                    '</section>'
                ].join(''),
                update: function() {
                    var userInfo = localStorage.getItem(constants.USER_INFO_KEY);
                    if (userInfo) {
                        userInfo = JSON.parse(userInfo);
                    } else {
                        userInfo = {};
                    }
                    // 默认头像路径 /img/jelon.jpg
                    $('JELON__loginAvatar').src = userInfo.avatar_url || '/img/unsigned_avatar.jpg';
                }
            },
            list: {
                tpl: [
                    '<section class="list-wrap" id="JELON__commentList">',
                    '<div class="text-center">正在加载评论</div>',
                    '</section>'
                ].join(''),
                /**
                 * 评论列表模块视图更新
                 * @param  {Number}    page      评论列表当前页码
                 * @param  {Number}    comments  当前文章下所有评论总数
                 * @param  {Number}    list      当前列表下评论列表数据
                 * @param  {Function}  callback  回调
                 * @return void(0)
                 */
                update: function(page, comments, list, callback) {
                    var perNavPageMaxSize = 5;
                    var html = '';
                    var htmlList = [];
                    var pageList = [];
                    var allPages = Math.ceil(comments / constants.PER_PAGE);
                    if (comments === 0) {
                        html = '<div class="text-center">暂无评论</div>';
                    } else {
                        var item = '';
                        var pageItem = '';
                        for (var i = 0, len = list.length; i < len; i++) {
                            item = [
                                '<li class="item">',
                                '<div class="user-avatar">',
                                '<a target="_blank" href="' + list[i].user.html_url + '">',
                                '<img src="' + list[i].user.avatar_url + '" alt="user-avatar">',
                                '</a>',
                                '</div>',
                                '<div class="user-comment">',
                                '<div class="user-comment-header" id="JELON__comment_' + list[i].id + '_reactions">',
                                '<span class="post-name">' + list[i].user.login + '</span>',
                                '<span class="post-time">' + formatDate('yyyy-MM-dd hh:mm', new Date(list[i].created_at)) + '</span>',
                                '<span class="like" onclick="JELON.Actions.like(' + list[i].id + ')">点赞</span>',
                                '<span class="like-num">' + list[i].reactions.heart + '</span>',
                                '<span class="reply" onclick="JELON.Actions.reply(\'' + list[i].user.login + '\', \'' + (list[i].body_html || list[i].body).replace(/<[^>]+>|\s|[\r\n]/g, ' ') + '\')">回复</span>',
                                '</div>',
                                '<div class="user-comment-body">' + (list[i].body_html || list[i].body) + '</div>',
                                '</div>',
                                '</li>'
                            ].join('');
                            htmlList.push(item);
                        }
                        if (allPages === 1) {
                            pageItem = '<a href="javascript: void(0);" class="item current">' + page + '</a>';
                            pageList.push(pageItem);
                        } else if (allPages <= perNavPageMaxSize) {
                            for (var i = 1; i <= allPages; i++) {
                                if (i === page) {
                                    pageItem = '<a href="javascript: void(0);" class="item current">' + page + '</a>';
                                } else {
                                    pageItem = '<a href="javascript: JELON.Actions.pageJump(' + i + ');" class="item">' + i + '</a>';
                                }
                                pageList.push(pageItem);
                            }
                            if (page !== 1) {
                                pageList.unshift('<a href="javascript: JELON.Actions.pageJump(' + (page - 1) + ');" class="item">上页</a>');
                            }
                            if (page !== allPages) {
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + (page + 1) + ');" class="item">下页</a>');
                            }
                        } else if (allPages > perNavPageMaxSize) {
                            if (page <= perNavPageMaxSize) {
                                for (var i = 1; i <= perNavPageMaxSize; i++) {
                                    if (i === page) {
                                        pageItem = '<a href="javascript: void(0);" class="item current">' + page + '</a>';
                                    } else {
                                        pageItem = '<a href="javascript: JELON.Actions.pageJump(' + i + ');" class="item">' + i + '</a>';
                                    }
                                    pageList.push(pageItem);
                                }
                                if (page !== 1) {
                                    pageList.unshift('<a href="javascript: JELON.Actions.pageJump(' + (page - 1) + ');" class="item">上页</a>');
                                }
                                pageList.push('<span class="more">...</span>');
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + (page + 1) + ');" class="item">下页</a>');
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + allPages + ');" class="item">末页</a>');
                            } else if (page > perNavPageMaxSize && page <= allPages - perNavPageMaxSize) {
                                var mod = page % perNavPageMaxSize;
                                var start = Math.floor(page / perNavPageMaxSize) * perNavPageMaxSize + 1;
                                var end = Math.ceil(page / perNavPageMaxSize) * perNavPageMaxSize;
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(1);" class="item">首页</a>');
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + (page - 1) + ');" class="item">上页</a>');
                                for (var i = start; i <= end; i++) {
                                    if (i === page) {
                                        pageItem = '<a href="javascript: void(0);" class="item current">' + page + '</a>';
                                    } else {
                                        pageItem = '<a href="javascript: JELON.Actions.pageJump(' + i + ');" class="item">' + i + '</a>';
                                    }
                                    pageList.push(pageItem);
                                }

                                pageList.push('<span class="more">...</span>');
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + (page + 1) + ');" class="item">下页</a>');
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + allPages + ');" class="item">末页</a>');
                            } else if (page > perNavPageMaxSize && page > allPages - perNavPageMaxSize) {
                                var start = allPages - perNavPageMaxSize + 1;
                                var end = allPages;
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(1);" class="item">首页</a>');
                                pageList.push('<a href="javascript: JELON.Actions.pageJump(' + (page - 1) + ');" class="item">上页</a>');
                                for (var i = start; i <= end; i++) {
                                    if (i === page) {
                                        pageItem = '<a href="javascript: void(0);" class="item current">' + page + '</a>';
                                    } else {
                                        pageItem = '<a href="javascript: JELON.Actions.pageJump(' + i + ');" class="item">' + i + '</a>';
                                    }
                                    pageList.push(pageItem);
                                }
                                if (page !== allPages) {
                                    pageList.push('<a href="javascript: JELON.Actions.pageJump(' + (page + 1) + ');" class="item">下页</a>');
                                }
                            }
                        }
                        html = [
                            '<header class="list-header">总共 <span class="comments-num" id="JELON__commentsNum">' + JL.issueComments + '</span> 条评论</header>',
                            '<ul class="list">',
                            htmlList.join(''),
                            '</ul>',
                            '<div class="page-nav">',
                            pageList.join(''),
                            '</div>'
                        ].join('');
                    }
                    $('JELON__commentList').innerHTML = html;
                    if (localStorage.getItem(constants.USER_INFO_KEY)) {
                        callback && callback();
                    }
                },
                reactionUpdate: function(commentId, reactions) {
                    var userInfo = localStorage.getItem(constants.USER_INFO_KEY);
                    if (userInfo) {
                        userInfo = JSON.parse(userInfo);
                    } else {
                        return;
                    }
                    var userId = userInfo.id;
                    for (var i = 0, len = reactions.length; i < len; i++) {
                        if (userId === reactions[i].user.id) {
                            console.log(userId, reactions[i].user.id);
                            addClass($('JELON__comment_' + commentId + '_reactions').getElementsByClassName('like')[0], 'liked');
                            $('JELON__comment_' + commentId + '_reactions').getElementsByClassName('like')[0].innerHTML = '已赞';
                            break;
                        }
                    }
                },
                addOne: function(data) {
                    var oLi = document.createElement('li');
                    oLi.className = 'item';
                    var item = [
                        '<div class="user-avatar">',
                        '<a target="_blank" href="' + data.user.html_url + '">',
                        '<img src="' + data.user.avatar_url + '" alt="user-avatar">',
                        '</a>',
                        '</div>',
                        '<div class="user-comment">',
                        '<div class="user-comment-header" id="JELON__comment_' + data.id + '_reactions">',
                        '<span class="post-name">' + data.user.login + '</span>',
                        '<span class="post-time">' + formatDate('yyyy-MM-dd hh:mm', new Date(data.created_at)) + '</span>',
                        '<span class="like" onclick="JELON.Actions.like(' + data.reactions.heart + ')">点赞</span>',
                        '<span class="like-num">' + data.reactions.heart + '</span>',
                        '<span class="reply" onclick="JELON.Actions.reply(\'' + data.user.login + '\', \'' + (data.body_html || data.body).replace(/<[^>]+>|\s|[\r\n]/g, ' ') + '\')">回复</span>',
                        '</div>',
                        '<div class="user-comment-body">' + (data.body_html || data.body) + '</div>',
                        '</div>'
                    ].join('');
                    oLi.innerHTML = item;
                    var oUl = $('JELON__commentList').getElementsByTagName('ul')[0];
                    if (oUl) {
                        oUl.insertBefore(oLi, oUl.firstChild);
                        $('JELON__commentsNum').innerHTML = JL.issueComments + 1;
                    } else {
                        $('JELON__commentList').innerHTML = [
                            '<header class="list-header">总共 <span class="comments-num" id="JELON__commentsNum">' + (JL.issueComments + 1) + '</span> 条评论</header>',
                            '<ul class="list">',
                            '<li class="item">',
                            item,
                            '</li>',
                            '</ul>'
                        ].join('');
                    }
                }
            },
            signBar: {
                tpl: [
                    '<div class="sign-bar" id="JELON__commentSignBar">',
                    '</div>'
                ].join(''),
                update: function() {
                    var token = localStorage.getItem(constants.ACCESS_TOKEN_KEY);
                    var userInfo = localStorage.getItem(constants.USER_INFO_KEY);
                    var html = '';
                    if (token && userInfo) {
                        userInfo = JSON.parse(userInfo);
                        html = [
                            '<span class="sign-txt" title="' + userInfo.login + '">GitHub 已登录!</span>',
                            '<span class="sign-link" onclick="JELON.Actions.signOut()">退出</span>'
                        ].join('');
                    } else {
                        html = [
                            '<span class="sign-txt">GitHub 未登录?</span>',
                            '<a href="https://github.com/login/oauth/authorize?scope=public_repo&redirect_uri=',
                            location.href.indexOf('?') !== -1 ? encodeURIComponent(location.href.substring(0, location.href.indexOf('?'))) : encodeURIComponent(location.href),
                            '&client_id=' + JL.options.clientId + '&client_secret=' + JL.options.clientSecret + '" class="sign-link">',
                            '登录',
                            '</a>'
                        ].join('');
                    }
                    $('JELON__commentSignBar').innerHTML = html;
                }
            },
            tips: {
                tpl: '<section class="tips clearfix" id="JELON__comment_tips">注：评论支持 markdown 语法！</section>',
                update: function() {
                    var userInfo = localStorage.getItem(constants.USER_INFO_KEY);
                    var handler = '';
                    // 如果文章还没关联 issue 并且登录账号是自己时
                    if (userInfo && JSON.parse(userInfo).login === JL.options.owner && JL.issueNumber === 0) {
                        handler = '<a href="javascript: JELON.Actions.createIssue();" class="init" title="文章关联 issue">初始化评论</a>';
                    }
                    $('JELON__comment_tips').innerHTML = handler + '注：评论支持 markdown 语法！';
                }
            }
        },
    };
    win.CommentUtils = CommentUtils;
})(window, document)