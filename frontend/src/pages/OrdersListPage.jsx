import React, { useState } from "react";
import { OrderCard } from "../components/OrderCard/OrderCard";

export const OrdersListPage = () => {
  const [pizzaOrders, setPizzaOrders] = useState([
    {
      orderNumber: 1,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },
    {
      orderNumber: 3,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },
    {
      orderNumber: 2,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },
    {
      orderNumber: 7,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },
    {
      orderNumber: 8,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },
    {
      orderNumber: 9,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },
    {
      orderNumber: 10,
      size: "medium",
      toppings: ["cheese", "pepperoni"],
      totalCost: 10.5,
    },

    // Add more pizza orders here
  ]);

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
          <OrderCard
            key={pizza.orderNumber}
            pizza={pizza}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};
