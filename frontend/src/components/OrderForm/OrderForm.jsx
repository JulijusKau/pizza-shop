import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const PizzaForm = () => {
  const [pizzaSize, setPizzaSize] = useState("small");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [pizzaOrder, setPizzaOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizes = {
    small: 8,
    medium: 10,
    large: 12,
  };
  const toppingCost = 1;
  const discountToppings = 3;
  const discountRate = 0.1;

  const handleSizeChange = (event) => {
    setPizzaSize(event.target.value);
    setTotalCost(0); // Reset total cost when pizza size changes
    setPizzaOrder(null); // Reset pizza order
  };

  const addTopping = (topping) => {
    setSelectedToppings([...selectedToppings, topping]);
    setTotalCost(0); // Reset total cost when toppings change
    setPizzaOrder(null); // Reset pizza order
  };

  const removeTopping = (topping) => {
    const updatedToppings = [...selectedToppings];
    const index = updatedToppings.indexOf(topping);
    if (index !== -1) {
      updatedToppings.splice(index, 1);
      setSelectedToppings(updatedToppings);
    }
    setTotalCost(0); // Reset total cost when toppings change
    setPizzaOrder(null); // Reset pizza order
  };

  const calculateTotalCost = () => {
    if (selectedToppings.length === 0) {
      return;
    }

    const baseCost = sizes[pizzaSize];
    const toppingCosts = selectedToppings.length * toppingCost;
    let total = baseCost + toppingCosts;

    if (selectedToppings.length > discountToppings) {
      const discountAmount = total * discountRate;
      total -= discountAmount;
    }

    setTotalCost(total);
  };

  const createPizzaOrder = () => {
    const pizza = {
      size: pizzaSize,
      toppings: selectedToppings,
      cost: totalCost,
    };
    setPizzaOrder(pizza);
    setIsModalOpen(true);
    setSelectedToppings([]); // Reset selected toppings
    setTotalCost(0); // Reset total cost
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Pizza Order Form
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Pizza Size</InputLabel>
          <Select value={pizzaSize} onChange={handleSizeChange}>
            <MenuItem value="small">Small - €8</MenuItem>
            <MenuItem value="medium">Medium - €10</MenuItem>
            <MenuItem value="large">Large - €12</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Typography variant="h6">Toppings</Typography>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addTopping("cheese")}
            >
              Cheese
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addTopping("pepperoni")}
            >
              Pepperoni
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addTopping("mushrooms")}
            >
              Mushrooms
            </Button>
          </div>
        </FormControl>
        <div style={{ marginTop: "20px" }}>
          {selectedToppings.map((topping, index) => (
            <Chip
              key={index}
              label={topping}
              onDelete={() => removeTopping(topping)}
              style={{ marginRight: "8px" }}
            />
          ))}
        </div>
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          {selectedToppings.length > discountToppings
            ? "You qualify for a 10% discount on your order!"
            : "Select more than 3 toppings to get a 10% discount on your order."}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={calculateTotalCost}
          style={{ marginTop: "20px" }}
          disabled={selectedToppings.length === 0}
        >
          Calculate Total
        </Button>
        {totalCost > 0 && (
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Total Cost: €{totalCost.toFixed(2)}
          </Typography>
        )}
        {totalCost > 0 && !pizzaOrder && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={createPizzaOrder}
            style={{ marginTop: "20px" }}
          >
            Create Pizza Order
          </Button>
        )}
      </Paper>
      {pizzaOrder && (
        <Modal open={isModalOpen} onClose={closeModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6">
              Your pizza has been added to the orders list!
            </Typography>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

export default PizzaForm;
