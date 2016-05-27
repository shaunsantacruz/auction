import fs from 'fs'
import http from 'http'
import path from 'path'

let config = {}
if (process.env.NODE_ENV === 'development') {
  config.port = 8090
  config.host = 'localhost'
  config.staticAssetPath = './public'
  //config.pathToIndex = __dirname + '/index.html'
  config.pathToIndex = config.staticAssetPath + '/index.html'
  config.pathTo404 = config.staticAssetPath + '/404.html'
}

const server = http.createServer(handler)

server.listen(config.port, config.host, err => {
  if (err) throw err
  console.log('Web server listening at http://%s:%d', config.host, config.port)
})

function handler (req, res) {

  var filePath = config.staticAssetPath + req.url
  if (req.url === '/' || req.url === '/bidder' || req.url === '/broadcaster') {
    filePath = config.pathToIndex
  }
  console.log('file path %s', filePath)
  console.log('req.url %s', req.url)

  var extname = path.extname(filePath)
  var contentType = 'text/html'

  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
    case '.wav':
      contentType = 'audio/wav'
      break
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if(error.code == 'ENOENT'){
        fs.readFile(config.pathTo404, function(error, content) {
          res.writeHead(200, { 'Content-Type': contentType })
          res.end(content, 'utf-8')
        })
      }
      else {
        res.writeHead(500)
        res.end('Sorry, check with the site admin for error: '+error.code+' ..\n')
        res.end()
      }
    }
    else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })

}

export default server
