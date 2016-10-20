var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/../client'));

// handle routes
app.get('/', function(req, res) {
  res.send('/index.html');
});

app.listen(port, function() {
  console.log('listening on port: ' + port);
});