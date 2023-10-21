import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Grid, Button } from "@mui/material";
import Logo from "../assets/TheBigHouse.png";
import { useTheme } from "@mui/material/styles";
import LoginButton from "./Auth/LogInButton";
import LogoutButton from "./Auth/LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { isAuthenticated } = useAuth0();

  return (
    <Grid
      container
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 999,
        backgroundColor: "white",
        borderBottom: "1px solid #E6EAEA",
      }}
    >
      <Grid
        item
        xs={11}
        md={10}
        lg={9}
        style={{
          height: 65,
          maxHeight: 65,
          minHeight: 65,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img alt="The Big House Logo" src={Logo} style={{ width: 50 }} />
          <Typography
            variant="h5"
            style={{ color: theme.palette.primary.main }}
          >
            The Big Mouth
          </Typography>
        </Link>
        <Button
          size="large"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          size="large"
          onClick={() => {
            navigate("/page");
          }}
        >
          A Page
        </Button>

        <Button
          size="large"
          onClick={() => {
            navigate("/user");
          }}
        >
          Profile
        </Button>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Grid>
    </Grid>
  );
}
