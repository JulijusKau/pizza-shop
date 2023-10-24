const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");

const router = express.Router();

router.get("/pizzas", (req, res) => {
  dbConnection.execute(
    "SELECT id, size, toppings, cost FROM pizzas",
    (err, result) => defaultCallback(err, result, res)
  );
});

router.delete("/pizzas/:id", (req, res) => {
  const { id } = req.params;

  dbConnection.execute("DELETE FROM pizzas WHERE id = ?", [id], (err, result) =>
    defaultCallback(err, result, res)
  );
});

router.post("/pizzas", (req, res) => {
  const { size, toppings, cost } = req.body;

  dbConnection.execute(
    "INSERT INTO pizzas (size, toppings, cost) VALUES (?, ?, ?)",
    [size, toppings, cost],
    (err, result) => defaultCallback(err, result, res)
  );
});

module.exports = router;
