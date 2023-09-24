const express = require('express');
const productRouter = express.Router();
const productController = require('../controller/products');

productRouter
.post('/', productController.createProduct)
.get('/', productController.getAllProducts)
.get('/:id',productController.getProduct)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct);

exports.routes = productRouter;