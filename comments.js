// Create web server

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  var urlObj = url.parse(request.url, true, false);
  var pathname = urlObj.pathname;
  var query = urlObj.query;
  var method = request.method;

  if (method === 'GET' && pathname === '/comments.json') {
    fs.readFile('comments.json', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(data);
        response.end();
      }
    });
  } else if (method === 'POST' && pathname === '/comments.json') {
    var body = '';
    request.on('data', function (chunk) {
      body += chunk;
    });
    request.on('end', function () {
      var comment = JSON.parse(body);
      fs.readFile('comments.json', function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var comments = JSON.parse(data);
          comments.push(comment);
          fs.writeFile('comments.json', JSON.stringify(comments), function (err) {
            if (err) {
              console.log(err);
            } else {
              response.writeHead(200, {'Content-Type': 'application/json'});
              response.write(JSON.stringify(comments));
              response.end();
            }
          });
        }
      });
    });
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Not found');
    response.end();
  }
});

server.listen(8080);
console.log('Server is listening on port 8080');