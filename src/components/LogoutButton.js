import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const doLogout = () => {
    localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <Button onClick={doLogout}>
      <Typography textAlign="center">Log Out</Typography>
    </Button>
  );
};

export default LogoutButton;
