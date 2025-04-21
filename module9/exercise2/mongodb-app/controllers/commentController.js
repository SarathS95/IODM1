"use strict";
let Models = require("../model");

const getComment = (res) => {
    Models.Comment.find({})
    .then(data => res.send({result:200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const createComment = (data, res) => {
    console.log(data)
    new Models.Comment(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err)
        res.send({result: 500, error: err.mesage})
    })
}

const updateComment = (req, res) => {
    console.log(req.body)
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true})
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const deleteComment = (req ,res) => {
    Models.Comment.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

module.exports = {
    getComment, createComment, updateComment, deleteComment
}