import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const OrderCard = ({ pizza, onDelete }) => {
  return (
    <Card sx={{ width: "20rem" }}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Order Number: {pizza.orderNumber}
        </Typography>
        <Typography variant="h5" component="div">
          Pizza Size: {pizza.size}
        </Typography>
        <Typography color="textSecondary">
          Toppings: {pizza.toppings.join(", ")}
        </Typography>
        <Typography variant="body2">
          Total Cost: ${pizza.totalCost.toFixed(2)}
        </Typography>
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
          onClick={() => onDelete(pizza.orderNumber)}
        >
          Delete Order
        </Button>
      </CardActions>
    </Card>
  );
};
