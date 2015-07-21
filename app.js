var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// ------------------- Bonus ----------------------------

app.get('/:page', function(req, res){

	fs.readFile(req.params.page, function(err, data){ // this reads the data.txt file
	    res.header('Content-Type', 'text/html'); // this tells the server to look for text
		res.send(data);
	});

});


// --------------- Part 3 making it asynchronus  ---------------------

// app.get('/', function(req, res){ // this handles the get request
 
// 		fs.readFile('data.txt', function(err, data){ // this reads the data.txt file
// 	    res.header('Content-Type', 'text/html'); // this tells the server to look for text
// 		res.send(data);
// 	});
	
// });

// app.get('/', indexController.index);

var server = app.listen(7935, function(req, res) {
	console.log('Express server listening on port ' + server.address().port);
});
