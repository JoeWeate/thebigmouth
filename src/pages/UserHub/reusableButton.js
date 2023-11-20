import React from "react";
import Button from "@mui/material/Button";

const ResuableButton = ({ text, action, color, size }) => {
  return (
    <Button onClick={action} color={color} size={size} variant="contained">
      {text}
    </Button>
  );
};

export default ResuableButton;
