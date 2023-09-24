
const express = require('express');
const app = express();
const userRoutes = require('./router/user-router');
const productRoutes = require('./router/product-router');
const postRoute = require('./router/post-router');

app.use(express.json());

app.use('/api/users',userRoutes.routes);
app.use('/api/products', productRoutes.routes);
app.use('/api/posts', postRoute.routes)

app.listen(3000,()=>{
    console.log('server listening on port 3000');  
}); 
// app.listen(3000)



// //create
// app.post('/users', userController.createUser);
// //read
// app.get('/users', userController.getAllUsers);
// app.get('/users/:id',userController.getUser);
// //update
// app.put('/users/:id', userController.replaceUser);
// app.patch('/users/:id', userController.updateUser);
// //delete
// app.delete('/users/:id', userController.deleteUser);


