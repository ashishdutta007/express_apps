var express = require("express");
var app = express();
var port = process.argv[2];

app.get('/search', function(request, response) {
    console.log(request.query);
    var query = JSON.stringify(request.query);
    response.write(query, 'utf-8');
    response.end();
    response.on('error', function(error) {
        console.log("An error occurred", error);
    })
});

app.listen(Number(port));
