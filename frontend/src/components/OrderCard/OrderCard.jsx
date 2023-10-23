import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const OrderCard = ({ pizza, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Order Number: {pizza.orderNumber}
        </Typography>
        <Typography variant="h5" component="div">
          Pizza Size: {pizza.size}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Toppings: {pizza.toppings.join(", ")}
        </Typography>
        <Typography variant="body2">
          Total Cost: ${pizza.totalCost.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(pizza.orderNumber)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
