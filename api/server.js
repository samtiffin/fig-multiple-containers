var redis = require('redis');
var express = require('express');

var client = redis.createClient(process.env.REDIS_PORT, 'redis_1');
var app = express();

app.get('/', function( req, res ) {
	client.incr('api_hits');

	client.get('api_hits', function( err, hits ) {
		res.send({ api_hits: hits });
	});
});

var server = app.listen(process.env.LISTEN_PORT);