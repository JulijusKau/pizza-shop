import React, { useEffect, useState } from "react";
import { OrderCard } from "../components/OrderCard/OrderCard";
import axios from "axios";

export const OrdersListPage = () => {
  const [pizzaOrders, setPizzaOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pizzas")
      .then((response) => {
        const pizzaOrdersWithFormattedToppings = response.data.map((pizza) => {
          const toppingsArray = JSON.parse(pizza.toppings);
          const formattedToppings = toppingsArray.join(", ");
          return {
            ...pizza,
            toppings: formattedToppings,
          };
        });
        setPizzaOrders(pizzaOrdersWithFormattedToppings);
      })
      .catch((error) => {
        console.error("Error fetching pizza orders:", error);
      });
  }, []);

  const handleDelete = (orderNumber) => {
    const updatedOrders = pizzaOrders.filter(
      (pizza) => pizza.orderNumber !== orderNumber
    );
    setPizzaOrders(updatedOrders);
  };

  return (
    <>
      <div
        style={{
          margin: "50px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {pizzaOrders.map((pizza) => (
          <OrderCard key={pizza.id} pizza={pizza} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};
