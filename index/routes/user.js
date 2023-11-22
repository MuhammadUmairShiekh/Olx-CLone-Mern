const express = require('express')
const router = express.Router()
const User = require("../models/User")
const verifyToken = require('../middelware/verifyToken')

router.get('/',  verifyToken , async (req, res) => {
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

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.send({
      message: "User doesn't exist"
    })
    return
  }
  console.log('user', user)

  const isPasswordCorrect = user.comparePassword(password)

  if (!isPasswordCorrect) {
    res.send({
      message: "Invalid Password"
    })
    return
  }

  const token = user.generateToken()
  user.token = token
  await user.save() 

  res.send({
    message: 'Logged in successfully',
    token
  })
})


module.exports = router