var express = require('express');
var request = require('request');

var app = express();

app.get('/', function( req, res ) {
	request('http://api_1:' + process.env.API_HTTP_PORT, function( error, response, body ) {
		if (!error && response.statusCode === 200) {	
			var json = JSON.parse(body);

			res.send('The API has had ' + json.api_hits + ' hits');
		}
		else {
			res.status(500).send(':(');
		}
	});
});

var server = app.listen(process.env.LISTEN_PORT);