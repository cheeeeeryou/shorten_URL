//setting express
const express = require('express')
const app = express()
const port = 3000

//setting handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(express.static('public'))
app.set('view engine', 'handlebars')

//setting mongoose
const mongoose = require('mongoose')
require('./config/mongoose')

//setting route
const routes = require('./routes')

const URL = require('./models/url')
const shortenURL = require('./functions/urlshorten')


app.use(routes)
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

