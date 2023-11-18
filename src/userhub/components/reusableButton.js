import React from "react";
import Button from "@mui/material/Button";

const MuiButton = ({ text, action, color }) => {
  return (
    <Button onClick={action} color={color} variant="contained">
      {text}
    </Button>
  );
};

export default MuiButton;
