"use strict";
 const Models = require("../models");

 // finds all users in DB, then sends array as response
 const getComments = (res) => {
  Models.Comments.findAll({}).then(data => {
      res.send({result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }

const createComments = (data, res) => {
  Models.Comments.create(data).then(data => {
      res.send({ result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }
 
 module.exports = {
   getComments, createComments
 }