const express = require('express')
const app = express()
const mongooes = require('mongoose')

app.get('/', (req, res) => {
  res.send('We are on home')
})

app.listen(9000)