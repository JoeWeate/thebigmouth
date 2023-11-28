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
      main: "#C4FF00",
    },
    pink: {
      main: "#EB038F",
    },
    primary: {
      main: grey[300],
    },
  },
  typography: {
    fontFamily: "Core Sans",
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
