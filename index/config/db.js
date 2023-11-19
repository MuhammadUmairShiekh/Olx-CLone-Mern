const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://umairshiekh01:MuhammadUmair72672@cluster0.udzoljb.mongodb.net/UmairShiekh"

mongoose.connect(mongoURI)

module.exports = mongoose