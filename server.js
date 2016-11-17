var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var server = require('http').createServer(app);
var PORT = 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/build/index.html')
})

app.post('/makeLambda', function(req, res) {
	console.log("=====================")
	console.log(req.body);
	console.log("=====================")
})

server.listen(PORT);
console.log('Serving up some good stuff at localhost:' + PORT + '...');