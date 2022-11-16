const express = require('express')
const { getAlldataController } = require('../controllers/getAlldataController.controler')
const router = express.Router()

router.get('/getAlldata',getAlldataController)

module.exports = router