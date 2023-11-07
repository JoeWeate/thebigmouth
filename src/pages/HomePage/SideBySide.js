import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  Container,
  createTheme,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";



const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const SideBySide = () => {

  const words = ["NEWS", "DIGITAL", "MUSIC", "ADVICE", "PODCAST", "VIDEO", "RESOURCE"];
  const [wordIndex, setWordIndex] = useState(0);
  const [lightOn, setLightOn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLightOn((prevLightOn) => !prevLightOn);
      setWordIndex((index) => (index + 1) % words.length);
    }, 299);

    return () => clearInterval(intervalId);
  }, [words.length]);

  const TextColor = {
    color: "#E6007E",
  };

  return (
    <Container
      sx={{
        height: "100vh",
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
            spacing={5}
          >
            <Grid item xs={12} md={7} columnSpacing={2}>
              <Grid item>
                <Box

                  sx={{
                    display: "flex",
                    textAlign: "left",
                    fontWeight: "bold",
                    lineHeight: 0.8,
                    minWidth: "100%",
                    padding: { xs: "1px", md: "10px" },
                    fontSize: { xs: "30px", sm: "55px" },
                    height: { xs: "100%", md: "100%" },
                  }}
                >
                  <h1 style={{ color: lightOn ? "white" : "lightgrey", margin: 0 }}>
                    {`THE HOME OF OUR `}
                    <span style={TextColor}>{words[wordIndex]}</span>
                    {` CONTENT`}
                  </h1>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 0,
                  transition: "0.4s",
                  transitionTimingFunction: "ease-out",
                  height: "450px",
                  textAlign: "center",
                  border: 3,
                  color: "#E6007E",
                  padding: '20px',
                  ":hover": {
                    borderRadius: "50%",
                    transition: "0.4s",
                    transitionTimingFunction: "ease-in"
                  }
                }}
              >
                <Box
                  color="#fff"
                  sx={{
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    padding: { xs: "22px", md: "30px" },
                  }}
                >
                  <p>
                    Welcome to The Big Mouth, the place where The Big Houses
                    digital content lives. Its still early days and this is just
                    the start of some big things to come. Read more about what
                    we have
                    <span style={TextColor}> got planned </span>
                    or take a look below at what we have for you right now.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </Container>
  );
}

export default SideBySide;
