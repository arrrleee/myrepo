// server.js
var express = require('express');
var fs = require('fs');
var url = require('url');

var indexhtmlfile = "index.html";
var vibeshtmlfile = "vibes.html";
var calculatorhtmlfile = "calculator.html";
var connectfourhtmlfile = "ConnectFour.html";
var htmlfile;

//var app = express.createServer(express.logger());

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

/*app.get('/', function(request, response) {
  var html = fs.readFileSync(indexhtmlfile).toString();
  response.send(html);
});
*/

var app = require('http').createServer(createServer);

function createServer(req, res) {
  var path = url.parse(req.url).pathname;
  console.log("Directly to path " + path);
  var fsCallback = function(error, data) {
    if(error) {
      throw error;
    }
    res.setHeader('content-type', 'text/html');
    res.writeHead(200);
    res.write(data);
    res.end();
  }

  switch(path) {
    case '/vibes':
      doc = fs.readFile(__dirname + '/vibes.html', fsCallback);
      break;
    case '/calculator':
      doc = fs.readFile(__dirname + '/calculator.html', fsCallback);
      break;
    case '/connect-four':
      doc = fs.readFile(__dirname + '/ConnectFour.html', fsCallback);
      break;
    default:
      path = '';
      doc = fs.readFile(__dirname + '/index.html', fsCallback);
      break;
  }
}

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
