import React from "react";
import Button from "@mui/material/Button";

const MuiButton = ({ text, action, color, size }) => {
  return (
    <Button onClick={action} color={color} size={size} variant="contained">
      {text}
    </Button>
  );
};

export default MuiButton;
