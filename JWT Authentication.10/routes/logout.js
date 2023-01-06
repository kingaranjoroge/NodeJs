const express = require('express')
const logOutController = require('../controllers/logOutController')

const router = express.Router()

router.get('/', logOutController.handleLogout)

module.exports = router