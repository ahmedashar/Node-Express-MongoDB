const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const product = data.products[0];
const server = http.createServer((req,res)=>{
    // res.end(req.url);
    if(req.url.startsWith('/product')){
        const id  = req.url.split('/')[2];
        const singleProduct = data.products.find(p => p.id == id);
        res.setHeader('Content-Type', 'text/html');

        let modifiedIndex = index.replace('**title**',singleProduct?.title).replace('**description**',singleProduct?.description);

        res.end(modifiedIndex);
        console.log(modifiedIndex);


        return;
    }

    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(JSON.stringify(index));
            break;

        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
              
        case '/products':
            res.setHeader('Content-Type', 'text/html');
            const modifiedIndex = index.replace('**title**',product.title);
            res.end(JSON.stringify(modifiedIndex));
            break;
            
        default:
            res.writeHead(404);
            res.end('404 Not Found'); 
            break;
    }
})

server.listen(8081);