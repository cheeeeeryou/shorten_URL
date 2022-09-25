
const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const shortenURL = require('../../functions/urlshorten')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
