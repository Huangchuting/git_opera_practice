var http = require('http')
http.createServer((req, res) => {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('about')
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found')
    }
}).listen(3000) 