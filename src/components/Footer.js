import React from "react";
import { Grid, Box, CardMedia, Typography, Paper, Hidden } from "@mui/material";
import Link from "@mui/material/Link";
import theme from "../theme";
import { styled } from "@mui/system";
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
  const tiktokUrl = "https://www.tiktok.com/@bighousetheatre";
  const fbUrl = "https://www.facebook.com/BigHouseTheatre/?locale=en_GB";
  const instUrl = "https://www.instagram.com/_thebighouse_/?hl=en-gb";
  const twitterUrl = "https://twitter.com/BigHouseTheatre";
  const lnkdUrl =
    "https://www.linkedin.com/company/the-big-house-theatre-company/";
  return (
    <Paper
      sx={{
        width: "100%",
        position: "relative",
        flexGrow: "0",
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
          height: { lg: "280px", md: "400px", sm: "500px" },
          pt: {
            xs: 3,
            lg: 0,
          },
        }}
      >
        <Grid
          item
          lg={4}
          xs={12}
          // alignItems="center"
          // justifyConten="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "row",
              alignItems: "right",
            },
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
              justifyContent: "space-around",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              justifyConten: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              [theme.breakpoints.down("sm", "md")]: {
                textAlign: "right",
              },
            }}
          >
            <CardMedia
              component="img"
              src={src}
              alt={title}
              sx={{
                alignSelf: "center",
                maxWidth: {
                  xs: "30%",
                  sm: "25%",
                  md: "20%",
                  lg: "30%",
                },
                paddingBottom: {
                  lg: "3em",
                },
                marginBottom: {
                  md: "1em",
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
                  xs: "1.5rem",
                  sm: "2.5rem",
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
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            justifyContent={{
              xs: "center",
              sm: "flex-start",
              md: "center",
            }}
            alignItems="center"
            sx={{
              width: "100%",
              gap: {
                xs: "2.6rem",
                sm: "1rem",
                md: "2.6rem",
              },
              mb: { xs: "2rem", sm: "7rem" },
              mt: {
                lg: "4rem",
              },
              pr: {
                md: "2em",
              },
            }}
          >
            <Link
              sx={{
                textAlign: { xs: "center", sm: "left" },
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
                textAlign: { xs: "center", sm: "right", md: "right" },
                color: "white",
                textDecoration: "none",
              }}
            >
              Become a member
            </Link>
            <Link
              href="/contact"
              sx={{
                textAlign: { xs: "center", sm: "right", md: "right" },
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            <Link
              href="/talent-enquiry"
              sx={{
                textAlign: { xs: "center", sm: "right", md: "right" },
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
              ml: "4rem",
              mr: "4rem",
              zIndex: 1,
            }}
          >
            <Link href={tiktokUrl} target="_blank" rel="noopener noreferrer">
              <img src={tiktok} alt="TikTok" width="30" height="35" />
            </Link>
            <Link href={fbUrl} target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
            <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <TwitterIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
            <Link href={instUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: "2rem", color: "white" }} />
            </Link>
            <Link href={lnkdUrl} target="_blank" rel="noopener noreferrer">
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
