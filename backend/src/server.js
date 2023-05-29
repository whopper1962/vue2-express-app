const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./configs/general.config");
const sequelize = require("./sequelize");

const app = express();

app.use(bodyParser.json());
app.use(cors(config.cors));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.get("/", (_, res) => {
  res.status(200).send("hello00111 aaa");
});

app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error("Internal Server Error");
  }
});
