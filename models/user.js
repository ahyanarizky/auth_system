'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
<<<<<<< d3d4dedc4a7630c5808adf11c0c0b5935351e4b8
    },
    password: {
        type: String
=======
>>>>>>> something wrong
    }
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)
