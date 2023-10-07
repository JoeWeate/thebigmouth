import React from "react";
import { Container, Grid, Typography, Box, CssBaseline } from "@mui/material";
import logofooter from "../assets/TheBigMouth.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#E6007E",
        width: "100%",
        position: "absolute",
        top: "5690px",
        left: "0",
        height: "279.72px",
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <img
                className="logo-image"
                src={logofooter}
                alt="Logo"
                width="237"
                height="273"
                style={{
                  background:
                    "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                  opacity: "1",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              height="100%"
              flexDirection="row"
            >
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                }}
              >
                Back to The Big Mouth
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                }}
              >
                Become a member
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                }}
              >
                Contact
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Core Sans D 45 Medium W01 Rg",
                  color: "#E0E0E0",
                }}
              >
                Talent Enquiry
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
