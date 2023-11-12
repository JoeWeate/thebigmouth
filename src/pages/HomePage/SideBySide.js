import React, { useEffect, useState } from "react";
import { Container, Box, Grid } from "@mui/material";

const SideBySide = ({ targetRef }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [lightOn, setLightOn] = useState(true);
  const words = ["NEWS", "DIGITAL", "MUSIC", "ADVICE", "PODCAST", "VIDEO", "RESOURCE"];

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
      ref={targetRef}
      sx={{
        minHeight: { lg: "100vh" },
        height: { xs: "auto", sm: "100%" },
        display: "flex",
        justifyContent: "center",
        marginBottom: { lg: "2rem" },
      }}
    >
      <Grid container alignItems="center" justifyContent="center" gap={1}>
        <Grid item xs={11} lg={6} sx={{ marginTop: { lg: 0, md: "2rem", sm: "2rem", xs: "3rem" }, marginBottom: { lg: "1rem", md: "1rem", sm: "1rem", xs: 0 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              lineHeight: 0.8,
              fontSize: { xs: "32px", sm: "45px", lg: "55px" },

            }}
          >
            <Box
              sx={{
                width: {
                  lg: "100%",
                  md: "26rem",
                  sm: "26rem",
                  xs: "100%"
                }
              }}>
              <h1 style={{ color: lightOn ? "white" : "lightgrey" }}>
                {`THE HOME`}
                <br />
                {` OF OUR `}
                <br />
                <span style={TextColor}>{words[wordIndex]}</span>
                <br />
                {`CONTENT`}
              </h1>
            </Box>

          </Box>
        </Grid>

        <Grid item xs={11} lg={5} sx={{ pr: { xs: 0, lg: "2rem" }, mb: { sm: "3rem", xs: "4rem" }, mt: { sm: "2rem", xs: "2rem" }, }} >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box
              sx={{

                display: "flex",
                borderRadius: 0,
                transition: "0.4s",
                transitionTimingFunction: "ease-out",
                height: { xs: "100%", sm: "450px" },
                maxHeight: "450px",
                width: { xs: "100%", sm: "450px" },
                maxWidth: "450px",
                textAlign: "center",
                border: { xs: 0, sm: 2 },
                color: "#E6007E",
                padding: { xs: 0, sm: "30px" },
                ":hover": {
                  borderRadius: "50%",
                  transition: "0.4s",
                  transitionTimingFunction: "ease-in",
                },
              }}
            >
              <Box
                color="#fff"
                sx={{
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "17px",
                  padding: { xs: 0, sm: "30px" },
                }}
              >
                <p>
                  Welcome to The Big Mouth, the place where The Big House's
                  digital content lives. It's still early days, and this is just
                  the start of some big things to come. Read more about what
                  we have
                  <span style={TextColor}> got planned </span>
                  or take a look below at what we have for you right now.
                </p>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
}

export default SideBySide;
