const express = require("express");
const cors = require("cors");
const indexRouter = require("./router/index");

const app = express();
const port = 4000;

app.use(cors());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`켜짐 포트:${port}`);
});
