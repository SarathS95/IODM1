"use strict";
 const Models = require("../models");

 // finds all users in DB, then sends array as response
 const getComment = (res) => {
  Models.Comment.findAll({}).then(data => {
      res.send({result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }

const createComment = (data, res) => {
  Models.Comment.create(data).then(data => {
      res.send({ result: 200 , data: data});
  }).catch(err => {
     console.log(err);
     res.send({ result: 500, error: err.message });
  })
 }

  const updateComment = (req, res) => {
   Models.Comment.update(req.body, { where: { id: req.params.id }, 
 returning: true })
     .then(data => {
       res.send({ result: 200, data: data });
     }).catch((err) => {
       console.log(err);
       res.send({ result: 500, error: err.message });
     });
  };
  
  const deleteComment = (req, res) => {
   Models.Comment.destroy({ where: { id: req.params.id } })
     .then(data => {
       res.send({ result: 200, data: data });
     }).catch((err) => {
       console.log(err);
       res.send({ result: 500, error: err.message });
     });
  };
 
 module.exports = {
   getComment, createComment, updateComment, deleteComment
 }