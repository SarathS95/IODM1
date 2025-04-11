"use strict";
 const Models = require("../models");

 // finds all users in DB, then sends array as response
 const getLikes = (res) => {
  Models.Likes.findAll({}).then(data => {
      res.send({result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }

const createLikes = (data, res) => {
  Models.LikesgetLikes.create(data).then(data => {
      res.send({ result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }
 
 module.exports = {
   getLikes, createLikes
 }