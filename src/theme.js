import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2B2B2B",
    },
    text: {
      secondary: "#8c8c8c",
    },
    yellow: {
      main: "#E8FA36",
    },
    pink: {
      main: "#EB038F",
    },
    primary: {
      main: grey[300],
    },
    error: {
      main: "#EB038F",
    },
  },
  typography: {
    fontFamily: "Core Sans",
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&.MuiError $notchedOutline.": {
          borderColor: "$error.main !important",
        },
        "&:not($disabled):hover $notchedOutline": {
          borderColor: "$error.main !important",
        },
        "&$focused$notchedOutline": {
          borderColor: "$error.main !important",
        },
      },
      input: {
        "&:not(.MuiDisabled)": {
          color: "$error.main",
        },
        "&::placeholder": {
          color: "$error.main",
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&.Mui-error": {
          color: "$error.main !important",
        },
      },
    },
  },

  components: {
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          backgroundImage: "none",
          color: "white",
          boxShadow: "none",
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&$expanded": {
            margin: "auto",
          },
        }),
      },
    },
  },
});

export default responsiveFontSizes(theme);
