const express = require("express");
 const router = express.Router();
 const Controllers = require("../controllers");

 // matches GET requests sent to /api/commentss 
// (the prefix from server.js)
 router.get('/', (req, res) => {
   Controllers.commentsController.getComments(res);
 })
 
 // matches comments requests sent to /api/commentss/create
 router.comments('/create', (req, res) => {
   Controllers.commentsController.createComments(req.body, res)
 })
 module.exports = router;