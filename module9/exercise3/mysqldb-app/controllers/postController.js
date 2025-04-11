"use strict";
 const Models = require("../models");

 // finds all users in DB, then sends array as response
 const getPost = (res) => {
  Models.Post.findAll({}).then(data => {
      res.send({result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }

const createPost = (data, res) => {
  Models.Post.create(data).then(data => {
      res.send({ result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }
 
 module.exports = {
   getPost, createPost
 }