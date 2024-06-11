const express = require("express");

const lessonController = require('../controllers/lesson')

const router = express.Router();

router.post("", lessonController.addLesson);


router.get("/:id", lessonController.getQr);
router.post("/:id/:qrcode", lessonController.registerPresence);

module.exports = router;
