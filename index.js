// project/index.js
var jsonServer = require('json-server');

var server = jsonServer.create();
var router = jsonServer.router('./db.json');
var port = process.env.PORT || 3000;

server.use(jsonServer.defaults());
server.use(router);

server.listen(port);
