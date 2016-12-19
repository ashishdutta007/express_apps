var express = require("express");
//using crypto module
var crypto = require("crypto");
var app = express();
var port = process.argv[2];

app.put('/message/:id', function(request, response) {
	//create hash object with specified algorithm
	var hash = crypto.createHash('sha1');
	console.log(hash);
	var data2Hash = new Date().toDateString() + request.params.id;
	console.log(data2Hash);
	//Update method -- push new data to be hashed later by digest function & specify encoding
	//Can be called multiple times for streaming data
	//Digest the data and produce hash value data in the format specified
	var res = hash.update(data2Hash, 'utf-8').digest('hex');
	console.log("res: ", res);
	response.write(res);
	response.end();
	response.on('finish', function() {
		console.log("Response sent successfully");
	}).on('error', function(error) {
		console.log("An error occurred", error);
	});
});

app.listen(Number(port));
