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

  //   color: '#232323',
  //   h6: {
  //     fontFamily: 'Recoleta',
  //     fontWeight: 700,
  //     color: '#232323'
  //   },
  //   h5: {
  //     fontFamily: 'Core Sans',
  //     fontWeight: 700,
  //     color: '#232323'
  //   },
  //   h4: {
  //     fontFamily: 'Recoleta',
  //     fontWeight: 700,
  //     color: '#232323'
  //   },
  //   h3: {
  //     fontFamily: 'Recoleta',
  //     fontWeight: 700,
  //     color: '#232323'
  //   },
  //   h2: {
  //     fontFamily: 'Recoleta',
  //     fontWeight: 700,
  //     color: '#232323'
  //   },
  //   h1: {
  //     fontFamily: 'Recoleta',
  //     fontWeight: 700,
  //     color: '#232323'
  //   },
  //   body2: {
  //     fontFamily: 'Source Sans Pro',
  //     color: '#232323'
  //   },
  //   body1: {
  //     fontFamily: 'Source Sans Pro',
  //     color: '#232323'
  //   }
  // },
  components: {
    //   MuiButton: {
    //     styleOverrides: {
    //       root: {
    //         fontFamily: 'Source Sans Pro',
    //         textTransform: 'none',
    //         borderRadius: 25,
    //         padding: '10px 12px',
    //         color: '#232323',
    //         fontWeight: 'bold'
    //       },
    //       contained: {
    //         color: 'white'
    //       },
    //       outlined: {
    //         borderColor: '#232323'
    //       }
    //     }
    // },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       color: '#232323'
    //     }
    //   }
    // },
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
    //   MuiAccordion: {
    //     styleOverrides: {
    //       root: {
    //         boxShadow: 'none',
    //         '&:not(:last-child)': {
    //           borderBottom: 0
    //         },
    //         '&:before': {
    //           display: 'none'
    //         },
    //         '&$expanded': {
    //           margin: 'auto'
    //         }
    //       },
    //       expanded: {}
    //     }
    //   },
    //   MuiAccordionSummary: {
    //     styleOverrides: {
    //       root: {
    //         padding: 0,
    //         paddingRight: 5
    //       },
    //       content: {
    //         '&$expanded': {
    //           margin: '12px 0'
    //         }
    //       },
    //       expanded: {}
    //     }
    //   },
    //   MuiAccordionDetails: {
    //     styleOverrides: {
    //       root: {
    //         paddingTop: 0,
    //         paddingBottom: 0
    //       }
    //     }
    //   },
    //   MuiTab: {
    //     styleOverrides: {
    //       root: {
    //         fontFamily: 'Source Sans Pro',
    //         fontWeight: 800,
    //         textTransform: 'capitalize'
    //       }
    //     }
    //   },
    //   MuiSnackbarContent: {
    //     styleOverrides: {
    //       root: {
    //         padding: 0,
    //         display: 'flex',
    //         flexGrow: 1,
    //         borderRadius: 50
    //       },
    //       message: {
    //         padding: 0,
    //         flexGrow: 1,
    //         borderRadius: 50
    //       }
    //     }
    //   },
    //   MuiListItem: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: 5
    //       }
    //     }
    //   },
    //   MuiListItemText: {
    //     styleOverrides: {
    //       primary: {
    //         fontSize: '1rem'
    //       }
    //     }
  },
});

export default responsiveFontSizes(theme);
