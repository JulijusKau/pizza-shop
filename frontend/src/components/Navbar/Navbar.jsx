import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ navbarName }) => {
  const pages = ["Order", "Orders List"];

  const navigate = useNavigate();

  const handleRouting = (page) => {
    if (page === "Order") {
      navigate("/");
    } else if (page === "Orders List") {
      navigate("/list");
    }
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "var(--colorD)" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          <LocalPizzaIcon
            sx={{
              display: {
                xs: "none",
                md: "flex",
                color: "var(--colorA)",
                fontSize: "3rem",
              },
              mr: 3,
            }}
          />
          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontFamily: "var(--mainFont)",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "var(--colorE)",
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                color: "var(--colorF)",
              },
            }}
          >
            {navbarName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleRouting(page);
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalPizzaIcon
            sx={{
              display: { xs: "flex", md: "none", color: "var(--colorA)" },
              mr: 1,
            }}
          />
          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "var(--mainFont)",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                color: "var(--colorF)",
              },
            }}
          >
            {navbarName}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  handleRouting(page);
                }}
                sx={{
                  my: 2,
                  color: "var(--colorE)",
                  display: "block",
                  fontSize: "1.2rem",
                  "&:hover": {
                    color: "var(--colorF)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
