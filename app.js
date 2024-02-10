const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req);
    if (req.url === '/') {
        res.end('hello')
    }
    res.write('Welcome to our home page');
    res.end();
})

server.listen(5001);