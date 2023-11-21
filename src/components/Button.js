import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const getColor = (template, theme) => {
  switch (template) {
    case "approve":
      return theme.palette.success.main;
    case "decline":
      return theme.palette.error.main;
    case "submit":
      return theme.palette.primary.main;
    default:
      return theme.palette.primary.main;
  }
};

const Button = styled(MuiButton)(({ theme, template, onClick }) => ({
  background: getColor(template, theme),
  color: theme.palette.getContrastText(getColor(template, theme)),
  border: `1px solid ${getColor(template, theme)}`,
  "&:hover": {
    background: theme.palette.action.hover,
  },
}));

export default Button;
