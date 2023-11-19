const express = require('express')
const db = require('./config/db')
const cors = require('cors')
const app = express()

app.use(cors())
app.listen(5000, function () {
    console.log('Listening to 0900')
})

db.connection.once('open', () => {
    console.log('db connected successfully')
}).on("error", (e) => {
    console.log('error: ', e)
})

//req.body me data asakay frontend se.
app.use(express.json());

app.use('/', require('./routes/index'))
