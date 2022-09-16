//setting express
const express = require('express')
const app = express()
const port = 3000

//setting handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting mongoose
const mongoose = require('mongoose')
require('./config/mongoose')


app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

