'use strict'
const User = require('./user')//require the model
const Post = require('./post')
const Comment = require('./comment')
const Like = require('./like')

// User.hasMany(Post); Post.belongsTo(User, { foreignKey: 'UserId' })

// User.hasMany(Comment); Comment.belongsTo(User, {foreignKey: 'UserId'})
// Post.hasMany(Comment); Comment.belongsTo(Post, {foreignKey: 'PostId'})

// User.hasMany(Like); Like.belongsTo(User, {foreignKey:'UserId'})
// Post.hasMany(Like); Like.belongsTo(Post, {foreignKey:'PostId'})


async function init() {
    await User.sync(); // sync the model// also sync any extra models here
    await Post.sync();
    await Comment.sync();
    await Like.sync();
};


init();
module.exports = {
   User, Post, Comment, Like // export the model
   // also export any extra models here
};