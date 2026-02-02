const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String ,
    number : String,

},{
    timestamps : true
})

module.exports = mongoose.module('userSchema',userSchema);