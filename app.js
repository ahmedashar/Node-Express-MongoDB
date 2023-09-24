// 01 Creating server using http module
// 02 module in nodejs
var http = require('http');

// creating custom module
// var dt = require('./myFirstModule');

// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write("hellow worlds" + dt.myDate());
//     res.end();
// }).listen(8080)

const server = http.createServer((req,res)=>{  
    console.log('server started');
    res.setHeader('Dummy','DummyValue');

    // header when we pass the json data
    res.setHeader('Content-Type','application/json');
    res.end('hello');
})

server.listen(8080);