import React from "react";
import { Grid, Box, CardMedia, Typography, Paper, Hidden } from "@mui/material";
import Link from "@mui/material/Link";
import theme from "../theme";
import { styled, width } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import tiktok from "../assets/images/tiktok.svg";

const CopyrightContainer = styled(Box)`
  background-color: #2b2b2b;
  color: #ffffff;
  font-size: 12px;
  height: 56px;
  width: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.36px;
  line-height: 20px;
`;
const Footer = () => {
  const src =
    "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/big-mouth.png";
  const title = "THE BIG MOUTH";

  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "relative",
        bottom: 0,
      }}
      component="footer"
      square
      // variant="outlined"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        lg={12}
        sx={{
          backgroundColor: "#E6007E",
          flexDirection: "row",
          height: { lg: "280px", md: "400px", sm: "600px" },
        }}
      >
        <Grid
          item
          lg={4}
          xs={12}
          alignItems="center"
          justifyConten="center"
          // sx={{ height: "279px" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              justifyConten: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              src={src}
              alt={title}
              sx={{
                alignSelf: "center",
                maxWidth: {
                  xs: "40%",
                  sm: "30%",
                  md: "25%",
                  lg: "40%",
                },
                paddingBottom: {
                  md: "3em",
                  lg: "3em",
                },
              }}
            ></CardMedia>
            <Typography
              variant="h8"
              sx={{
                position: "absolute",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                background: "rgba(230, 0, 126, 0.73)",
                fontWeight: "bold",
                backdropFilter: "blur(5px)",
                color: "white",
                letterSpacing: " -2.04px",
                textAlign: "center",
                whiteSpace: "nowrap",
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                },
                mb: {
                  xs: "0.3em",
                  md: "1em",
                },
              }}
            >
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={8} md={8} lg={8}>
          <Grid
            container
            justifyContent={{ xs: "center", sm: "center", md: "center" }}
            alignItems="center"
            sx={{
              width: "100%",
              gap: {
                xs: "2.6rem",
                sm: "0.5rem",
                md: "2.6rem",
              },
              mb: "1rem",
            }}
          >
            <Link
              sx={{
                textAlign: "center",
                color: "white",
                textDecoration: "none",
              }}
              href="/back-to-the-big-mouth"
            >
              Back to The Big Mouth
            </Link>
            <Link
              href="/become-a-member"
              sx={{
                textAlign: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              Become a member
            </Link>
            <Link
              href="/contact"
              sx={{
                textAlign: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            <Link
              href="/talent-enquiry"
              sx={{
                textAlign: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              Talent Enquiry
            </Link>
          </Grid>
        </Grid>
        <Hidden smUp>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            sm={12}
            sx={{
              mt: "1rem",
              mb: "4rem",
              ml: "6rem",
              mr: "4rem",
              zIndex: 1,
            }}
          >
            <Link href="#tiktok">
              <img src={tiktok} alt="TikTok" width="30" height="35" />
            </Link>
            <Link href="#facebook">
              <FacebookIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
            <Link href="twitter">
              <TwitterIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
            <Link href="#instagram">
              <InstagramIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
            <Link href="#linkedin">
              <LinkedInIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
          </Grid>
        </Hidden>

        <Grid
          item
          xs={12}
          lg={0}
          sx={{
            bottom: 0,
            width: "100%",
            position: "absolute",
          }}
        >
          <CopyrightContainer>
            © The Big House Theatre | Charity Number 1151106.
          </CopyrightContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
