const express = require('express');
const postRouter = express.Router();
const postController = require('../controller/posts')

postRouter
.post('/', postController.create)
.get('/',postController.readAll)
.get('/:id', postController.read)

exports.routes = postRouter; 