import React, { useEffect, useState } from "react";
import { Container, Box, Grid, Hidden } from "@mui/material";

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
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "2.3rem",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={11} lg={6} alignItems="center" justifyContent="center" sx={{ marginTop: { lg: 0, md: "2rem", sm: "2rem", xs: "1rem" }, marginBottom: { lg: "1rem", md: "1rem", sm: "2rem" } }}>
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
        <Grid item xs={0} lg={1} sx={{ marginRight: { lg: "-3rem" } }}></Grid>
        <Grid item xs={11} lg={5} alignItems="center" justifyContent="center" sx={{ paddingRight: { xs: 0, lg: "2rem" } }}>
          <Hidden smDown>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { lg: 0, md: "2rem", sm: "2rem" },
                marginBottom: { lg: 0, md: "2rem", sm: "2rem" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 0,
                  transition: "0.4s",
                  transitionTimingFunction: "ease-out",
                  height: "450px",
                  width: "450px",
                  textAlign: "center",
                  border: 2,
                  color: "#E6007E",
                  padding: "30px",
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
                    padding: "30px",
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
          </Hidden>
          <Hidden smUp>
            <Box
              color="#fff"
              sx={{
                textAlign: "left",
                display: "flex",
                fontSize: "25px",
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
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SideBySide;
