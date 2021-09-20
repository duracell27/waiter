const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const { config } = require('dotenv')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log(`Зєднання з БД пройшло успішно`)
})

const waitersRouter = require('./routes/waiters')
const usersRouter = require('./routes/users')

app.use('/waiters', waitersRouter)
app.use('/users', usersRouter)

app.listen(port, ()=>{
    console.log(`Сервер запустився на порті ${port}`)
})