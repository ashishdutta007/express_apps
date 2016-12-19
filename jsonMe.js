var express = require("express");
var fs = require("fs");
var app = express();
var port = process.argv[2];
var filePath = process.argv[3];


app.use('/books', function(request, response) {
	fs.readFile(filePath, function(error, data) {
		if (error) {
			console.log("An error occured", error);
		}
		else {
			var object = JSON.parse(data.toString());
			//response.write((data.toString()));
			response.json(object);
		}
	});
});

app.listen(Number(port));
