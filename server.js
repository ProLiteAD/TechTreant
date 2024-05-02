const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/shop.html'));
});

app.get('*', (req, res) => {
    let type = req.url.split('.').pop();
    console.log(req.url);

    let filePath = path.join(__dirname, req.url);

    if(type === 'css'){
        res.contentType('text/css');
    }
    else if(type === 'js'){ 
        res.contentType('text/javascript');
    }
    else if(type === 'json'){ 
        // res.contentType('application/json');
        res.contentType('text/javascript');
    }
    else if(type === 'svg'){ 
        res.contentType('image/svg+xml');
    }
    else if(type === 'png'){ 
        res.contentType('image/png');
    }
    else if(type === 'jpg'){ 
        res.contentType('image/jpg');
    }
    else{
        filePath = path.join(__dirname, 'public/index.html');
    }

    res.sendFile(filePath);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});