const express = require("express");

const userController = require('../controllers/user')

const router = express.Router();

router.post("", userController.createUser);


module.exports = router;
// const express = require('express')

// const usersController = require('../controllers/users')

// const router = express.Router()

// router.get('/present/:lessonId', usersController.getAllPresentUsers)

// module.exports = router
