const express = require("express");
 const router = express.Router();
 const Controllers = require("../controllers");

 // matches GET requests sent to /api/commentss 
// (the prefix from server.js)
 router.get('/', (req, res) => {
   Controllers.commentController.getComment(res);
 })
 
 // matches comments requests sent to /api/commentss/create
 router.post('/create', (req, res) => {
   Controllers.commentController.createComment(req.body, res)
 })

  router.put('/:id', (req, res) => {
   Controllers.commentController.updateComment(req, res)
  })
 
  router.delete('/:id', (req, res) => {
   Controllers.commentController.deleteComment(req, res)
  })
 module.exports = router;