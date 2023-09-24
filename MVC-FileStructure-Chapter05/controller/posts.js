const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const posts = data.posts;

exports.create = (req,res)=>{
    const post = req.body;
    posts.push(post);
    res.status(201).json(post);
}
exports.readAll = (req, res)=>{
    res.json(posts);
}
exports.read =  (req, res)=>{
    const id = +req.params.id;
    const post = posts.find(p=>p.id == id);
    res.json(post);
}