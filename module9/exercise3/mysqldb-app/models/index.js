'use strict'
const User = require('./user')//require the model
const Post = require('./post')
const Comments = require('./comments')
const Likes = require('./likes')

User.hasMany(Post); Post.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Comments); Comments.belongsTo(User, {foreignKey: 'UserId'})
Post.hasMany(Comments); Comments.belongsTo(Post, {foreignKey: 'PostId'})

User.hasMany(Likes); Likes.belongsTo(User, {foreignKey:'UserId'})
Post.hasMany(Likes); Likes.belongsTo(Post, {foreignKey:'PostId'})


async function init() {
    await User.sync(); // sync the model// also sync any extra models here
    await Post.sync();
    await Comments.sync();
    await Likes.sync();
};


init();
module.exports = {
   User, Post, Comments, Likes // export the model
   // also export any extra models here
};