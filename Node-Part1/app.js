const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8')  // readt the file index.html
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));  //read the file data.json
const product = data.products[0];

// const data = {age:5};
const server = http.createServer((req,res)=>{
    console.log("server started");
                     //headerName, headerValue
    // res.setHeader('dummy','dummyValue'); 
    // res.end(data); //app crashed because node understand string

    // header when we pass the json data
    // res.setHeader('Content-Type','application/json');

    // res.setHeader('Content-Type','text/html');
    // res.end(JSON.stringify(data));
    // res.end(index);

    console.log(req.url); // get the url
    // res.end(req.url);
    
    switch(req.url) {
        case '/':
            res.setHeader('Content-Type','text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(data));
            break;
        case '/product':
            res.setHeader('Content-Type', 'text/html');
            const modifiedIndex = index.replace('**title**',product.title).replace('**description**',product.description).replace('**link**',product.thumbnail);
            res.end(JSON.stringify(modifiedIndex))
            break;
        default:
            res.writeHead(404);
            res.end("404");
            break;
    }
})
server.listen(8080);