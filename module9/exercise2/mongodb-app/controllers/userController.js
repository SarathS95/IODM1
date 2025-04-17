"use strict";
let Models = require("../model");

const getUser = (res) => {
    Models.User.find({})
    .then(data => res.send({result:200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const createUser = (data, res) => {
    console.log(data)
    new Models.User(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err)
        res.send({result: 500, error: err.mesage})
    })
}

module.exports = {
    getUser, createUser
}