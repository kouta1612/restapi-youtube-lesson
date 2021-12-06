const express = require('express')
const app = express()
const mongooes = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

mongooes.connect(
  process.env.DB_CONNECTION, 
  () => console.log('Connected to DB!')
)

app.use(bodyParser.json())

const postRoute = require('./routes/posts')

app.use('/posts', postRoute)

app.get('/', (req, res) => {
  res.send('We are on home')
})

app.listen(9000)