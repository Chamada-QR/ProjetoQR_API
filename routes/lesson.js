const express = require("express");

const lessonController = require('../controllers/lesson')

const router = express.Router();

router.post("", lessonController.addLesson);


router.get("/:date", lessonController.getQr);

module.exports = router;
