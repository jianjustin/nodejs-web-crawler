var https = require('https');
var iconv = require('iconv-lite');

exports.crawler_get = function crawler_get(url){
    https.get(url, (res) => {
        res.setEncoding('utf-8');
        console.log('状态码:', res.statusCode);
        console.log('请求头:', res.headers);
        res.on('data', (d) => {
            var html = iconv.decode(d, 'gb2312');
            process.stdout.write(html);
        });
    
    }).on('error', (e) => {
        console.error(e);
    });
}
