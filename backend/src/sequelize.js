const Sequelize = require("sequelize");
module.exports = new Sequelize(
  "hello_world_db",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
