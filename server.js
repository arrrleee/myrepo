// server.js
var express = require('express');
var fs = require('fs');
var url = require('url');

var indexhtmlfile = "index.html";
var vibeshtmlfile = "vibes.html";
var htmlfile;

var app = express.createServer(express.logger());
//var app = http.createServer( function(req,res){
//  var pathname = url.parse(req.url).pathname;
//  switch(pathname){
//    case '/vibes':
//       res.end('vibeshtmlfile');
//        break;
//    default:
//        res.end('indexhtmlfile');
//        break;
//  }
//}).listen(8080);


//app.use(logfmt.requestLogger());

app.get('/', function(request, response) {
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
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
