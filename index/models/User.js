const mongoose = require('mongoose')
const bcryptjs = require('bcrypt')

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
    fullName: String

})
UserSchema.pre("save", function (next) {
    const  user = this

    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(user.password, salt);
    user.password = hash

    next()
})

const User = mongoose.model('user', UserSchema)

module.exports = User
