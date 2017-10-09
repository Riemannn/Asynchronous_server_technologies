//Import a module
var http = require('http');
var server = require('./server.js');

// Declare an HTTP server
http.createServer(server.logic).listen(server.port, server.address);
