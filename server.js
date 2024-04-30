const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    let reqUrl = req.url;
    // console.log("URL: " +reqUrl);
    let type = reqUrl.split('.').pop();
    // console.log("Type: " +type);

    if(type === 'css'){
        filePath = __dirname + reqUrl;
        fs.readFile(filePath, (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data, 'utf-8');
        });
    }
    else if(type === 'js'){
        filePath = __dirname + reqUrl;
        fs.readFile(filePath, (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            res.end(data, 'utf-8');
        });
    }
    else if(type === 'svg'){
        filePath = __dirname + reqUrl;
        fs.readFile(filePath, (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/svg+xml');
            res.end(data, 'utf-8');
        });
    }
    else if(type === 'png'){
        filePath = __dirname + reqUrl;
        fs.readFile(filePath, (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/png');
            res.end(data, 'utf-8');
        });
    }
    else{
        if(type !== 'map'){
            console.log("URL: " +reqUrl);
            console.log("Type: " +type);
        }

        switch (reqUrl) {
            case '/shop':
                filePath = __dirname + '/public/shop.html';
                break;
            default:
                filePath = __dirname + '/public/index.html';
                break;
        }
        fs.readFile(filePath, (err, data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data, 'utf-8');
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running: http://${hostname}:${port}/`);
});