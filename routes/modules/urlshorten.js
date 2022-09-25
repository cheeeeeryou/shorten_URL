const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const shortenURL = require('../../functions/urlshorten')


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

module.exports = router