const http = require('http');

const server = http.createServer((req, res) => {
    const category = req.url;
    if (category == '/tecnologia') {
        res.end('<html><body>Notícias de Tecnologia</body></html>')
    } else if (category == '/moda') {
        res.end('<html><body>Notícias de Moda</body></html>')
    } else if (category == '/beleza') {
        res.end('<html><body>Notícias de Beleza</body></html>')
    } else {
        res.end('<html><body>Portal de Notícias</body></html>');
    }

});

server.listen(3000, console.log('Listening on port 3000'));