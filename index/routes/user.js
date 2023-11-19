const express = require('express')
const router = express.Router()
const User = require("../models/User")

router.get('/', async (req, res) => {
  const user = await User.find()
  res.send({
    message: "All Users",
    data: user 
  })

})

router.post('/register', async (req, res) => {
  try {
    const credentials = req.body
    const user = new User(credentials)
    await user.save()
    res.send({
      message: "User Register Succusfully"
    })
  } catch (e) {
    res.send({
      message: e
    })
  }



})


module.exports = router