const express = require('express')

const usersController = require('../controllers/users')

const router = express.Router()

router.get('/present/:lessonId', usersController.getAllPresentUsers)

module.exports = router
