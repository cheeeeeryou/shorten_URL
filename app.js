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

const URL = require('./models/url')
const shortenURL = require('./functions/urlshorten')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const shortURL = shortenURL(5)
  URL.findOne({ originalURL: req.body.url })
    .then(data =>
      data ? data : URL.create({ shortURL, originalURL: req.body.url })
    )
    .then(data =>
      res.render('show', {
        origin: req.headers.origin,
        shortURL: data.shortURL,
      })
    )
    .catch(error => console.error(error))
})

app.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  URL.findOne({ shortURL })
    .then(data => {
      if (!data) {
        return res.render('error')
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

