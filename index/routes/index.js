const express = require("express");
const router = express.Router();

router.use('/ads', require('./ads'))

router.use('/user', require('./user'))

module.exports = router