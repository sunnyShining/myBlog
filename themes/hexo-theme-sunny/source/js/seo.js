var xhr = new XMLHttpRequest();
const headers = {'Accept': '*/*', 'Content-Type': 'application/x-www-form-urlencoded'};
xhr.open('POST', 'http://data.zz.baidu.com/urls', true);
for (var key in headers) {
    xhr.setRequestHeader(key, headers[key]);
}
xhr.send('site=static.sunnyshining.xyz&token=vK3FvKTFdT4axvSs')
