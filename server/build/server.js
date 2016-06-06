'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {};
if (process.env.NODE_ENV === 'development') {
  config.port = 8090;
  config.host = 'localhost';
  config.staticAssetPath = './public';
  //config.pathToIndex = __dirname + '/index.html'
  config.pathToIndex = config.staticAssetPath + '/index.html';
  config.pathTo404 = config.staticAssetPath + '/404.html';
}

var server = _http2.default.createServer(handler);

server.listen(config.port, config.host, function (err) {
  if (err) throw err;
  console.log('Web server listening at http://%s:%d', config.host, config.port);
});

function handler(req, res) {

  var filePath = config.staticAssetPath + req.url;
  if (req.url === '/' || req.url === '/bidder' || req.url === '/broadcaster') {
    filePath = config.pathToIndex;
  }
  console.log('file path %s', filePath);
  console.log('req.url %s', req.url);

  var extname = _path2.default.extname(filePath);
  var contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }

  _fs2.default.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        _fs2.default.readFile(config.pathTo404, function (error, content) {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        res.end();
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

exports.default = server;