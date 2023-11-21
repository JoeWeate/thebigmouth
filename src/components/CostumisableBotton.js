import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CostumizableButton = styled(Button)(
  ({ theme, backgroundColor, variant, color, action }) => ({
    background:
      variant === "outlined"
        ? "transparent"
        : backgroundColor || theme.palette.primary.main,
    color:
      color ||
      theme.palette.getContrastText(
        backgroundColor || theme.palette.primary.main
      ),
    border:
      variant === "outlined"
        ? `1px solid ${theme.palette.primary.main}`
        : "none",
    "&:hover": {
      background:
        variant === "outlined"
          ? theme.palette.primary.main
          : backgroundColor || theme.palette.primary.main,
    },
  })
);

export default CostumizableButton;
