const express = require("express");
const postRouter = require("./post");
const userRouter = require("./user");

const router = express.Router();

router.use("/post", postRouter);
router.use("/user", userRouter);

module.exports = router;
