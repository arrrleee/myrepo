// server.js
var express = require('express');
var fs = require('fs');
var url = require('url');

var indexhtmlfile = "index.html";
var vibeshtmlfile = "vibes.html";
var htmlfile;

var app = express.createServer(express.logger());

//app.use(logfmt.requestLogger());

/*app.get('/', function(request, response) {
  var path = url.parse(request.url).pathname;
  switch(path) {
    case '/vibes':
      htmlfile = vibeshtmlfile;
      break;
    default:
      htmlfile = indexhtmlfile;
      break;
  }
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});*/

app.get('/', function(request, response) {
  var html = fs.readFileSync(indexhtmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
