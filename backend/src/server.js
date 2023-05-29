const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./configs/general.config");

const app = express();

app.use(bodyParser.json());
app.use(cors(config.cors));

app.get("/", (_, res) => {
  res.status(200).send("hello world");
});

app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error("Internal Server Error");
  }
});
