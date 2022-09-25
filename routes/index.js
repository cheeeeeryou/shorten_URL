const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const urlshorten = require('./modules/urlshorten')


router.use('/', home)
router.use('/', urlshorten)


module.exports = router