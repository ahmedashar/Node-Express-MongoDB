//notes https://github.com/coderdost/full-stack-dev-2023

const express = require('express');
const fs = require('fs');
const data = fs.readFileSync('data.json','utf-8');

// create server 
const app = express();

// middleware       start----------------------------------
// 3. build in middle  ware
 app.use(express.json()); //express.json parses incoming requests with JSON payloads. // this express default middleware parse the body (help to understand the body) // without this body will not work
// app.use(express.urlencoded()) // used when we sent data through the form
// creating middleware

// types of middlewares
//1. Application level middleware (runs in every request)
// app.use((req,res,next)=>{
//     console.log(req.method, req.ip);
//     console.log(req.hostname, req.baseUrl, new Date());
//     next();
// })

// 2. Router-level middleware (run on particular route request)
const auth = (req, res, next) => {
    // console.log(req.query);
    // if(req.query.username === "ashar" && req.query.password === '123'){
    //     next();
    // }else{
    //     res.sendStatus(404);
    //     // res.status(404).end();
    // }

    console.log(req.body); // req.body --> we need to use built-in middleware for this.
    if(req.query.username === "ashar" && req.query.password === '123'){
        next();
    }else{
        res.sendStatus(404);
        // res.status(404).end();
    }

}

// middleware      end----------------------------------

app.get('/',auth,(req,res)=>{
    // res.send('Hello World')
    // res.json(JSON.parse(data))
    // res.sendFile(`absolute path`)
    // res.status(210).send("Hello World");

    res.json({type: 'GET'})
})

app.post('/',auth,(req,res)=>{
    res.json({type: 'POST'})
})

app.put('/',(req,res)=>{
    res.json({type:'PUT'})
})
app.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
});
app.listen(3000);




// request properties--------------start---------------

// req.params: An object containing properties mapped to the named route parameters. For example, if you have a route like /users/:id, you can access the id parameter using req.params.id.

// req.query: An object containing the parsed query parameters from the URL. For example, if the URL is /search?query=example, you can access the query parameter using req.query.query.

// req.body: An object containing the parsed request body, usually used for POST and PUT requests when data is sent in the request body. To use this property, you typically need to use middleware like express.json() to parse JSON data or express.urlencoded() for form data.

// req.headers: An object containing the HTTP request headers. You can access specific headers using properties in this object, such as req.headers.authorization to access the authorization header.

// req.cookies: An object containing the parsed cookies sent with the request. To use this property, you often need to use a middleware like cookie-parser.

// req.ip: The IP address of the client making the request.

// req.path: The path portion of the URL.

// req.hostname: The host name portion of the URL.

// req.protocol: The HTTP protocol used by the request (e.g., "http" or "https").

// req.method: The HTTP request method (e.g., "GET", "POST", "PUT", etc.).

// req.originalUrl: The original URL requested by the client.

// req.url: The URL requested by the client, excluding the protocol and host.


// request methods-------------end----------------



// response methods
// Response methods (res is our response objects)

// res.send() - for sending HTML
// res.sendFile() - for sending File
// res.json - for sending JSON
// res.sendStatus(404) - for sending HTTP status only

// ------------------------------------------------------

// Middle-ware : Modifies the request before it reaches the next middleware or endpoints.

// Sequence of middleware is very important, as first middleware is first traversed by request.

// Middle-wares can be used for many use cases, like loggers, authentication, parsing data etc.

// Middle-ware can be :

// Application level : server.use(middleware)
// Router level : server.get('/', middleware, (req,res)=>{})
// Built-in middleware : express.json() [ for parsing body data], express.static()[for static hosting]
// External Middle-wares - like morgan
