import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/system";

const getColor = ({ template, theme }) => {
  const colorMap = {
    pink: {
      bg: theme.palette.pink.main,
      color: "white",
    },
    yellow: {
      bg: theme.palette.yellow.main,
      color: "black",
    },
  };
  return colorMap[template];
};

const MyButton = ({ template, onClick, children, variant, startIcon }) => {
  const theme = useTheme();
  const styles = getColor({ template, theme });
  const buttonStyles =
    variant === "contained"
      ? {
          backgroundColor: styles.bg,
          fontSize: "12pt",
          marginRight: "0.5rem",
          paddingLeft: "2rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          paddingRight: "2rem",
          color: styles.color,
          ":hover": {
            backgroundColor: styles.bg,
          },
        }
      : {
          backgroundColor: "transparent",
          fontSize: "12pt",
          marginRight: "1rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          color: styles.bg,
          border: `1px solid ${styles.bg}`,
        };
  return (
    <Button sx={buttonStyles} onClick={onClick} startIcon={startIcon}>
      {children}
    </Button>
  );
};
export default MyButton;
