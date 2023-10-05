import React from "react";
import { Container, Grid, Typography, Box, CssBaseline } from "@mui/material";
import FooterLogo from "..FooterLogo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#E6007E", height: "280px" }}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ height: "100%" }}>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12} md={4}>
            {/* Logo */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <img src="FooterLogo.png" alt="Logo" width="100" height="100" />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* Titles */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              height="100%"
              flexDirection="row"
            >
              <Typography variant="h6" style={{ color: "white" }}>
                Back to The Big Mouth
              </Typography>
              <Typography variant="h6" style={{ color: "white" }}>
                Become a member
              </Typography>
              <Typography variant="h6" style={{ color: "white" }}>
                Contact
              </Typography>
              <Typography variant="h6" style={{ color: "white" }}>
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
