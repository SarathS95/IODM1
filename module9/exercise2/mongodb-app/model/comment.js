const mongoose = require("mongoose");
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {type: String, trim: true, required: true},
    userID: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    postID: {type: mongoose.Schema.Types.ObjectId, ref:'post'},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("comment", commentSchema);