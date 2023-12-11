import React from "react";
import { Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from "@mui/system";

export const BUTTON_TEMPLATE = {
  PINK: "pink",
  YELLOW: "yellow",
};

export const BUTTON_VARIANT = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
};

const getColor = ({ template, theme }) => {
  const colorMap = {
    [BUTTON_TEMPLATE.PINK]: {
      bg: theme.palette.pink.main,
      color: "white",
      hover: 'rgba(235, 3, 143, 0.8)',
      disabled: 'rgba(235, 3, 143, 0.3)',
    },
    [BUTTON_TEMPLATE.YELLOW]: {
      bg: theme.palette.yellow.main,
      color: "black",

      hover: 'rgba(232, 250, 54, 0.8)',
      disabled: 'rgba(232, 250, 54, 0.3)',
    },
  };
  return colorMap[template];
};

const MyButton = ({ template, onClick, children, variant, startIcon, disabled, type, loadingButton, loading = false, }) => {
  const theme = useTheme();
  const Component = loadingButton ? LoadingButton : Button;

  const styles = getColor({ template, theme });
  const buttonStyles =
    variant === BUTTON_VARIANT.CONTAINED
      ? {
          backgroundColor: styles.bg,
          color: styles.color,
          "&:hover": {
            backgroundColor: styles.hover,
          },
          "&:disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
            color: styles.color,
          },
        }
      : {
          backgroundColor: "transparent",
          color: styles.bg,
          border: `1px solid ${styles.bg}`,
          "&:hover": {
            border: `1px solid ${styles.hover}`,
          },
          "&:disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
            border: `1px solid ${ theme.palette.action.disabledBackground}`,
          },
        };
  return (
        <Component size="large" sx={
          {...buttonStyles,
            px: "2rem",
            "&.MuiLoadingButton-loading": {
              pl: "3rem"
            },
            "&.MuiLoadingButton-loading .MuiLoadingButton-loadingIndicator": {
                  pl: "1rem"
                },
             "&.MuiLoadingButton-loading .MuiLoadingButton-loadingIndicator svg": {
              fill: "currentColor",
            },
              }

            }
           onClick={onClick} disabled={disabled || loading} type={type} loading={loading} loadingPosition="start" startIcon={startIcon}>
          {children}
        </Component>
  );
};
export default MyButton;
