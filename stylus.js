var express = require("express");
var stylus = require("stylus");
var app = express();
var port = process.argv[2];
var path = process.argv[3];

console.log(path);

//binding the stylus middleware by passing location of stylus files
app.use(stylus.middleware(path));
//serving static pages on requests of the kind
app.use(express.static(path));

app.listen(port);