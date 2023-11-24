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

const MyButton = ({ template, onClick, children, variant }) => {
  const theme = useTheme();
  console.log(theme);
  const styles = getColor({ template, theme });
  return (
    <Button
      sx={
        variant === "contained"
          ? {
              backgroundColor: styles.bg,
              color: styles.color,
              ":hover": {
                backgroundColor: styles.bg,
              },
            }
          : {
              backgroundColor: "transparent",
              color: styles.bg,
              border: `2px solid ${styles.bg}`,
            }
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default MyButton;
