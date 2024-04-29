const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("QRcode");
});


router.get("/:aula/", (req, res) => {
  
  res.send("QRcode");
});

module.exports = router;
