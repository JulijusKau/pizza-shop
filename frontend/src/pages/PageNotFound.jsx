import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "var(--mainFont)",
        color: "var(--colorF)",
        fontSize: "3rem",
      }}
    >
      WHOOPS, PAGE NOT FOUND. 404
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--colorD)",
          fontSize: "1.7rem",
          "&:hover": {
            backgroundColor: "var(--colorF)",
          },
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        BACK HOME
      </Button>
    </div>
  );
};
