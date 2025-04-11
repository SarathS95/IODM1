const express = require("express");
 const router = express.Router();
 const Controllers = require("../controllers");

 // matches GET requests sent to /api/posts 
// (the prefix from server.js)
 router.get('/', (req, res) => {
   Controllers.postController.getPost(res);
 })
 
 // matches POST requests sent to /api/posts/create
 router.post('/create', (req, res) => {
   Controllers.postController.createPost(req.body, res)
 })
 module.exports = router;