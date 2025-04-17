const mongoose = require("mongoose");
const Schema = mongoose.Schema

const likeSchema = new Schema({
    like: {type: Boolean, trim: true, required: true},
    userID: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    postID: {type: mongoose.Schema.Types.ObjectId, ref:'post'},
    commentID: {type: mongoose.Schema.Types.ObjectId, ref:'comment'},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("like", likeSchema);