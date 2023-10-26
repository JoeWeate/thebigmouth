import { createTheme, responsiveFontSizes } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 1)'
    },
    text: {
      main: '#232323'
    }
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    color: '#232323',
    h6: {
      fontFamily: 'Recoleta',
      fontWeight: 700,
      color: '#232323'
    },
    h5: {
      fontFamily: 'Recoleta',
      fontWeight: 700,
      color: '#232323'
    },
    h4: {
      fontFamily: 'Recoleta',
      fontWeight: 700,
      color: '#232323'
    },
    h3: {
      fontFamily: 'Recoleta',
      fontWeight: 700,
      color: '#232323'
    },
    h2: {
      fontFamily: 'Recoleta',
      fontWeight: 700,
      color: '#232323'
    },
    h1: {
      fontFamily: 'Recoleta',
      fontWeight: 700,
      color: '#232323'
    },
    body2: {
      fontFamily: 'Source Sans Pro',
      color: '#232323'
    },
    body1: {
      fontFamily: 'Source Sans Pro',
      color: '#232323'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Source Sans Pro',
          textTransform: 'none',
          borderRadius: 25,
          padding: '10px 12px',
          color: '#232323',
          fontWeight: 'bold'
        },
        contained: {
          color: 'white'
        },
        outlined: {
          borderColor: '#232323'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#232323'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0
          },
          '&:before': {
            display: 'none'
          },
          '&$expanded': {
            margin: 'auto'
          }
        },
        expanded: {}
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingRight: 5
        },
        content: {
          '&$expanded': {
            margin: '12px 0'
          }
        },
        expanded: {}
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Source Sans Pro',
          fontWeight: 800,
          textTransform: 'capitalize'
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          padding: 0,
          display: 'flex',
          flexGrow: 1,
          borderRadius: 50
        },
        message: {
          padding: 0,
          flexGrow: 1,
          borderRadius: 50
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 5
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1rem'
        }
      }
    }
  }
})

export default responsiveFontSizes(theme)
