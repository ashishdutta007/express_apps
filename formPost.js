var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//Multiple instances of express server object
var a1 = express();
var a2 = express();
var port = process.argv[2];

a1.post('/form',bodyParser.urlencoded({extended:false}));
    
a2.post('/form',function(request,response){
	//console.log("Yeay!!!");
	var name = request.body.str;
	console.log(name.split('').reverse().join(''));
	var str = name.split('').reverse().join('');
	response.write(str);
	response.end();
	response.on('finish',function(){
		console.log("Response sent successfully");
	}).on('error',function(error){
		console.log("An error occurred", error);
	});
	
});

//series of middleware calls
app.use(a1,a2);
app.listen(port);