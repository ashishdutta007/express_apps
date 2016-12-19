var express = require("express");
var httpServer = require("http");
var app = express();
var port = process.argv[2];
var dir = process.argv[3];
var path = require("path");

//express.static() is the only built in middleware provided by express
//used to serve static files, takes the path of the directory containing the static files 
app.use(express.static(process.argv[3] || path.join(__dirname, 'express_webapps')));
//app.use(express.static(dir));
app.listen(port);
