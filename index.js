var JsonServer = require('json-server');

var server = JsonServer.create();
var router = JsonServer.router('./db.json');
var port = process.env.PORT || 3000;

server.use(JsonServer.defaults());
server.use(router);

server.listen(port);
