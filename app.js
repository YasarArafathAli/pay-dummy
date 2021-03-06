const https = require('https');
const fs = require('fs');

console.log("waiting for connection")
const server = https.createServer((req,res) => {
    console.log("starting server")
    res.writeHead(200, {'Content-Type':'text/html'})
    var file = fs.open("./index.html")
    res.end(file);
} );
server.listen(3200);