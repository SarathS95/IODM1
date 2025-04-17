const mongoose = require("mongoose");
const Schema = mongoose.Schema

const postSchema = new Schema({
    postDescription: {type: String, trim: true, required: true},
    userID: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("post", postSchema);