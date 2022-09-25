const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const shortenURL = require('../../functions/urlshorten')

router.use(express.urlencoded({ extended: true }))

router.get('/:shortURL', (req, res) => {
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

router.post('/', (req, res) => {
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



module.exports = router