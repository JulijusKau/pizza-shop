import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export const OrderCard = ({ pizza, onDelete }) => {
  const handleDeleteClick = () => {
    axios
      .delete(`${process.env.REACT_APP_API_AUTH}/pizzas/${pizza.id}`)
      .then((response) => {
        if (response.status === 200) {
          onDelete(pizza.id);
        } else {
          console.error("Failed to delete the pizza.");
        }
      })
      .catch((error) => {
        console.error("Error while deleting the pizza:", error);
      });
  };
  return (
    <Card sx={{ width: "20rem" }}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Order Number: {pizza.id}
        </Typography>
        <Typography variant="h5" component="div">
          Pizza Size: {pizza.size}
        </Typography>
        <Typography color="textSecondary">
          Toppings: {pizza.toppings}
        </Typography>
        <Typography variant="body2">Total Cost: €{pizza.cost}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            color: "var(--colorE)",
            backgroundColor: "var(--colorD)",
            "&:hover": {
              backgroundColor: "var(--colorA)",
            },
          }}
          size="small"
          onClick={() => handleDeleteClick(pizza.id)}
        >
          Delete Order
        </Button>
      </CardActions>
    </Card>
  );
};
