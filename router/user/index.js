const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user입니다.");
});

module.exports = router;
