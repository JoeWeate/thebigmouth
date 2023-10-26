import React from "react";
import {
  ThemeProvider,
  Container,
  createTheme,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import "../../../src/App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function About() {
  const TextColor = {
    color: "#E6007E",
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Box
                  className="right-box"
                  sx={{
                    display: "flex",
                    textAlign: "left",
                    fontWeight: "bold",
                    lineHeight: 0.8,
                    marginRight: { xs: "10px" },
                    padding: { xs: "1px", md: "10px" },
                    fontSize: { xs: "30px", sm: "55px" },
                    height: { xs: "100%", md: "491" },
                  }}
                ></Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                color="#fff"
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  fontSize: "20px",
                  padding: { xs: "22px", md: "30px" },
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  ABOUT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Introductory text about the Project/series. Mauris fringilla
                  gravida purus, vel iaculis mauris commodo dignissim. Ut tempus
                  pretium est, in feugiat libero volutpat at. Aenean tempus
                  purus et lectus facilisis placerat. Aenean ipsum purus, read
                  article in pretium accumsan, eleifend et nulla
                  <span style={TextColor}> got planned </span>
                  placerat. Aenean ipsum purus, read article in pretium
                  accumsan, eleifend et nulla.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </Container>
  );
}
