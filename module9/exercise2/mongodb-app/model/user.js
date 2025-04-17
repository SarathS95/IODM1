const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {type: String, trim: true, required: true},
    lastName: {type: String, trim: true, required: true},
    emailID: {type: String, trim: true, requied: true, unique: true},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("user", userSchema);
