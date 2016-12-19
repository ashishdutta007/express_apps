var express = require("express");
var jade = require("jade");
var app = express();
var path = require("path");
var port = process.argv[2];
var pathName = process.argv[3];

//Set application settings in 'app' express server object
//To set the directory path for views dir in 'app' express server object

app.set('views', path.join(pathName));
//console.log("view absolute path __dirname, pathName: ",path.join(__dirname,pathName));
//console.log("__dirname: ",__dirname);
//console.log("pathname: ", pathName);

//set templating view engine to jade
app.set('view engine', 'jade');

//on get request to '/home'
app.get('/home', function(request, response) {
	response.render('index', {
		date: new Date().toDateString()
	}/*,function(error,html){
		if(error){
			return console.log(error);
		}
		else{
			console.log("Html: ",html);
		}
	}*/);
});

app.listen(Number(port));
