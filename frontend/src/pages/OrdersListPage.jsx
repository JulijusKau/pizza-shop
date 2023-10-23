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
    // Add more pizza orders here
  ]);

  const handleDelete = (orderNumber) => {
    const updatedOrders = pizzaOrders.filter(
      (pizza) => pizza.orderNumber !== orderNumber
    );
    setPizzaOrders(updatedOrders);
  };

  return (
    <div>
      <h1>Orders List</h1>
      {pizzaOrders.map((pizza) => (
        <OrderCard
          key={pizza.orderNumber}
          pizza={pizza}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
