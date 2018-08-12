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
            if (options.container) {
                if (typeof options.container === 'object') {
                    $container = options.container;
                } else if (typeof options.container === 'string') {
                    $container = this.$(options.container);
                } else {
                    $container = this.$('#comments');
                }
            }
            // $container.innerHTML = [
            //     this.Renders.signBar.tpl,
            //     this.Renders.box.tpl,
            //     this.Renders.tips.tpl,
            //     this.Renders.list.tpl
            // ].join('');
            // this.init();
        }
    };
    win.CommentUtils = CommentUtils;
})(window, document)