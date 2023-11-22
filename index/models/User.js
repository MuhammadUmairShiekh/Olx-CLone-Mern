const mongoose = require('mongoose')
const bcryptjs = require('bcrypt')
const jwt = require("jsonwebtoken")
const secret = require("../config/jwt")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    fullName: String,
    token: String


})
UserSchema.pre("save", function (next) {
    const user = this

    if (!user.token) {
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(user.password, salt)

        user.password = hash
    }

    next()

})
UserSchema.methods.comparePassword = function (password) {
    const user = this

    return bcryptjs.compareSync(password, user.password)
}

UserSchema.methods.generateToken = function () {
    const user = this

    const token = jwt.sign({ _id: user._id }, secret)
    return token
}

const User = mongoose.model('user', UserSchema)

module.exports = User
