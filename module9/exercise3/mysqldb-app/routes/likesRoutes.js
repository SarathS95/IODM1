const express = require("express");
 const router = express.Router();
 const Controllers = require("../controllers");

 // matches GET requests sent to /api/likess 
// (the prefix from server.js)
 router.get('/', (req, res) => {
   Controllers.likesController.getLikes(res);
 })
 
 // matches likes requests sent to /api/likess/create
 router.likes('/create', (req, res) => {
   Controllers.likesController.createLikes(req.body, res)
 })
 module.exports = router;