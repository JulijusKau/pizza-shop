const mysql = require("mysql2");

const mysqlConfigBase = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const dbConnection = mysql.createConnection({
  ...mysqlConfigBase,
  database: "",
});

dbConnection.query("CREATE DATABASE IF NOT EXISTS pizza_shop", (err) => {
  if (err) throw err;

  dbConnection.query("USE pizza_shop", (err) => {
    if (err) throw err;

    const pizzasTableQuery = `
    CREATE TABLE IF NOT EXISTS pizzas (
      id INT NOT NULL AUTO_INCREMENT UNIQUE,
      size VARCHAR(255) NOT NULL,
      toppings TEXT NOT NULL,
      cost INT NOT NULL,
      primary key (id)
    )
    `;
    dbConnection.query(pizzasTableQuery, (err) => {
      if (err) throw err;
    });
  });
});

module.exports = {
  dbConnection,
};
