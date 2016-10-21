var express = require('express');
var mongoose = require('mongoose');
var port = 8080;

var app = express();

// start the mongo database
mongoose.connect('mongodb://localhost/basketball');

app.use(express.static(__dirname + '/../client'));

// handle routes
app.get('/', function(req, res) {
  res.send('/index.html');
});

app.listen(port, function() {
  console.log('listening on port: ' + port);
});