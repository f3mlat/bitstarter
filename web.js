var fs = require('fs');
var infile = "index.html";

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync(infile, "utf8");
  var buffer = new Buffer(content, "utf8");
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
