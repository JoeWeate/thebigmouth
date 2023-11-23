import React from "react";
import Button from "@mui/material/Button";

const getColor = ({ template, variant, theme }) => {
  const colorMap = {
    approve: {
      contained: "#6B8E50",
      outlined: theme.palette.success.light,
    },
    "send back to draft": {
      contained: "#CEA511",
      outlined: theme.palette.success.main,
    },
    "send to draft": {
      contained: "#E8FA36",
      outlined: theme.palette.success.main,
    },
    decline: {
      contained: "#FF0000",
      outlined: theme.palette.error.main,
    },
    delete: {
      contained: "#EB038F",
      outlined: theme.palette.primary.main,
    },
    send: {
      outlined: "#E8FA36",
    },
  };

  return colorMap[template]?.[variant] || "";
};

function MyButton({ template, variant, theme, onClick, children }) {
  const color = getColor({ template, variant, theme });
  const buttonVariant = variant === "contained" ? "contained" : "outlined";
  return (
    <Button
      style={{ backgroundColor: color }}
      variant={buttonVariant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default MyButton;
