const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products; 
const express = require('express');

const app = express();
app.use(express.json());


// API - Endpoint - Route

//products
// API ROOT , base URL,  eg: google.com/api/v2/
// --------------------------------
// READ GET /products
app.get('/products',(req,res)=>{
    res.json(products);
})
app.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    console.log(req.params);
    const product =  products.find(p=> p.id == id)
    res.json(product);
})
// -------------------------------
// CREATE POST /products
app.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
})
//--------------------------------
// UPDATE PUT /products/:id
app.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id == id);
    products.splice(productIndex, 1, req.body);
    // res.json({ "done" : "success"})
    res.status(201).json();
    console.log(res.status)
})
// UPDATE PATCH /products/:id
app.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id == id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product, ...req.body});
    res.status(201).json();
})
//----------------------------------
// DELETE DELETE /products/:id
app.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=> p.id == id)
    products.splice(productIndex,1);
    res.status(201).json();
})
 
app.listen(3001) 


// Post // we get data from client side throught form

// Put // used for update the data but its override the existing data.

// Patch // used for update the data but its not override the existing data