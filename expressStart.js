//Express is an extension of the node http framework
//Allows to add middleware stack to server object

var express = require("express");
//app is the wrapped express node http server object
//create a express server object
var app = express();
var port = process.argv[2];

//on get method and url '/home' call this middleware (request handler);
app.get('/home', function(request, response) {
    response.write("Hello World!");
    response.end();
});

//httpServer.createServer(app).listen(port);
app.listen(port);
