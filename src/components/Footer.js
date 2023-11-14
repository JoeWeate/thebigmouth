import React from "react";
import { Container, Grid, Box, CssBaseline, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import theme from "../theme";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import tiktok from "../assets/images/tiktok.svg";
const FullFooterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  margin-top: 2em;
`;

const FooterContainer = styled("footer")`
  display: flex;
  background-color: #e6007e;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  padding: 0 20px;
  -bottom: 1em;

  @media (min-width: ${theme.breakpoints.values.xs}px) {
    height: 500px;
    width: 100vh;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  // height: 280px;
  flex-direction: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  // padding-right: 50px;

  @media (max-width: ${theme.breakpoints.values.xs}px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LogoContainer = styled(Box)`
  position: relative;
  @media (max-width: ${theme.breakpoints.values.xs}px) {
    width: 314.24px;
    height: 222.19px;
  }
`;

const LogoTextContainer = styled(Box)`
  // position: relative;
  // margin-right: 4em;
  // width: 314px;
  // height: 64.65px;
  // left: 37.88px;
 
  @media (max-width: ${theme.breakpoints.values.xs}px) {
    margin-right: 0;
  // }
   @media (max-width: ${theme.breakpoints.values.md}px) {
  //   // margin-bottom: 0.5em;
  //   margin-right: 0;
  // }
  position: relative;
  display: flex;
  backdrop-filter: blur(5px);
  opacity: 77%;
  filter: brightness(33%) 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  // margin-top: -30px;
  @media (max-width: ${theme.breakpoints.values.xs}px) {
    margin-top: 0;
  }
`;

const LogoImage = styled("img")`
  width: 237px;
  height: 273px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  opacity: 1;

  @media (min-width: ${theme.breakpoints.values.xs}px) {
    height: 230px;
    width: 100%;
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    // height: 200px;
    width: auto;
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    height: 279.72px;
    width: 100%;
  }
`;

const LogoText = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e6007e;
  font-weight: bold;
  color: #ffffff;
  white-space: nowrap;
  letter-spacing: -2.04px;
  z-index: 1;
  background: rgba(230, 0, 126, 0.73);

  @media (min-width: ${theme.breakpoints.values.xs}px) {
    font-size: 41px;
  }
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    font-size: 35px;
  }

  // @media (min-width: ${theme.breakpoints.values.md}px) {
  //   top: 50%;
  //   left: 50%;
  // }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    font-size: 51px;
  }
`;

const FooterLinkContainer = styled(Box)`
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.values.xs}px) {
    flex-direction: column;
    column-gap: 10px;
    width: 319px;
    height: 183px;

    @media (min-width: ${theme.breakpoints.values.sm}px) {
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1em;
      justify-content: center;
      // margin-right: 4em;
    }

    // @media (min-width: ${theme.breakpoints.values.md}px) {
    // margin-left: auto;
    //   flex-direction: row;
    //   justify-content: space-around;
    //   align-items: center;
    // }
    @media (max-width: ${theme.breakpoints.values.md}px) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    margin-left: auto;
    text-align: left;
  }
`;

const FooterLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  display: flex;
  background-color: transparent;
  // margin: 0 2em;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    padding-top: 2em;
  }
  @media (min-width: ${theme.breakpoints.values.xs}px) {
    whites-space: no-wrap;
    flex-shrink: 0;
    // margin-bottom: 35px;
    font-size: 22px;
    line-height: 2em;
    text-wrap: nowrap;
    line-height:;
  }
`;
const SocialMediaContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
  font-size: 35px;

  @media (min-width: ${theme.breakpoints.values.xs}px) {
    margin-top: 0.5em;
    width: 319px;
    height: 35.18px;
  }
`;

const SocialMediaLink = styled(Link)`
  && {
    color: #e0e0e0;
    text-decoration: none;
    display: flex;
    background-color: transparent;
    padding: 8px;
    height: 35px;
  }
`;
const CustomIcon = styled("div")`
  .MuiSvgIcon-root {
    font-size: 35px !important;
  }
`;
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

  @media (min-width: ${theme.breakpoints.values.xs}px) {
    // width: 100vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
`;
const Footer = () => {
  return (
    <FullFooterContainer>
      <FooterContainer>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid>
            <StyledBox item xs={12} md={4}>
              <LogoContainer>
                <LogoImage
                  src="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/big-mouth.png"
                  alt="Logo"
                />
                <LogoTextContainer>
                  <LogoText variant="body1">THE BIG MOUTH</LogoText>
                </LogoTextContainer>
              </LogoContainer>
              <FooterLinkContainer>
                <FooterLink href="/back-to-the-big-mouth">
                  Back to The Big Mouth
                </FooterLink>
                <FooterLink href="/become-a-member">Become a member</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/talent-enquiry">Talent Enquiry</FooterLink>
              </FooterLinkContainer>
              <SocialMediaContainer>
                <CustomIcon>
                  <SocialMediaLink href="#tiktok">
                    <img src={tiktok} alt="TikTok" width="30.33" height="35" />
                  </SocialMediaLink>
                </CustomIcon>
                <CustomIcon>
                  <SocialMediaLink href="#facebook">
                    <FacebookIcon />
                  </SocialMediaLink>
                </CustomIcon>
                <CustomIcon>
                  <SocialMediaLink href="#twitter">
                    <TwitterIcon />
                  </SocialMediaLink>
                </CustomIcon>

                <CustomIcon>
                  <SocialMediaLink href="#instagram">
                    <InstagramIcon />
                  </SocialMediaLink>
                </CustomIcon>
                <CustomIcon>
                  <SocialMediaLink href="#linkedin">
                    <LinkedInIcon />
                  </SocialMediaLink>
                </CustomIcon>
              </SocialMediaContainer>
            </StyledBox>
          </Grid>
        </Container>
      </FooterContainer>
      <CopyrightContainer>
        © The Big House Theatre | Charity Number 1151106.
      </CopyrightContainer>
    </FullFooterContainer>
  );
};

export default Footer;
