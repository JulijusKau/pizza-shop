const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.DB_PORT;

const pizzaRouter = require("./router/pizzas.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(pizzaRouter);

app.listen(port, () => {
  console.log(`Congratulations your Server is running on port: ${port}`);
});
