const http = require('http');
const server = http.createServer();

server.on('request', (req, res) =>{
    res.statusCode = 200,
    res.setHeader('Content-type', 'text/plain');

    res.end("responde => hello world")
});

server.listen(8000);
console.log("server run url => http://localhost:8000");