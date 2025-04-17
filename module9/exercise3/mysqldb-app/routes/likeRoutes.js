const express = require("express");
 const router = express.Router();
 const Controllers = require("../controllers");

 // matches GET requests sent to /api/likess 
// (the prefix from server.js)
 router.get('/', (req, res) => {
   Controllers.likeController.getLike(res);
 })
 
 // matches likes requests sent to /api/likess/create
 router.post('/create', (req, res) => {
   Controllers.likeController.createLike(req.body, res)
 })

  router.put('/:id', (req, res) => {
   Controllers.likeController.updateLike(req, res)
  })
 
  router.delete('/:id', (req, res) => {
   Controllers.likeController.deleteLike(req, res)
  })
 module.exports = router;