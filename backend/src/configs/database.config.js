module.exports = {
  development: {
    database: "db-development",
    dialect: "sqlite",
    storage: "seq-todo.sqlite3",
  },
  test: {
    database: "db-test",
    dialect: "sqlite",
    storage: "seq-todo.sqlite3",
  },
  production: {
    database: "db-product",
    dialect: "sqlite",
    storage: "seq-todo.sqlite3",
  },
};
