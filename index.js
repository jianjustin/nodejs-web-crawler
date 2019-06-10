//var user = require('./controller/user');
// user.addUser('test', 'works@163.com').then(function() {
//   return user.findUserByName('test');
// }).then(function(user) {
//   console.log('username:' + user.username);
//   console.log('email:' + user.email);
// })


var server = require('./controller/server');
var url = "https://www.dytt8.net";
server.crawler_get(url);