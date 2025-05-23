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

  router.put('/:id', (req, res) => {
   Controllers.postController.updatePost(req, res)
  })
 
  router.delete('/:id', (req, res) => {
   Controllers.postController.deletePost(req, res)
  })
 module.exports = router;