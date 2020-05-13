const http = require('http');
const server = http.createServer();

server.on('request', (req, res) =>{
    if(req.method === 'POST' && req.url === "/echo"){
        let body = []
        req.on("data", chunk =>{
            body.push(chunk);
        })
        .on("end", () => {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            body = Buffer.concat(body),toString();
            res.end(body)
        })
    }else{
        res.statusCode = 404;
        res.end();
    }
    res.end("hello world");
});

server.listen(8001);
console.log("server run url => http://localhost:8001");