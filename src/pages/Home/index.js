import React, { Grid, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import { TitleComponent } from "../../components/TitleComponent";
// import { getHelloWorld, getHelloWorldByName } from "../../hooks/API/helloworld";
// import env_config from "../../env_config";
// import { useAuth0 } from "@auth0/auth0-react";
import VideoBanner from "./VideoBanner";
import SideBySide from "./sideBySide/SideBySide";
import Banner from "./Banner/Banner";
import MultiMediaSection from "./multimedia-Section/index";
import ShowMore from "../../components/ShowMore";
export default function Home() {
  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <TitleComponent title="TheBigMouth" description="" />
      <Banner />
      <SideBySide />
      <VideoBanner />
      <MultiMediaSection />
      <ShowMore />

      {/* <img
           src={`https://${env_config.s3.BUCKET}.s3.amazonaws.com/public/big-mouth.png`}
          style={{ width: 250, height: 250 }}
        /> */}
    </Grid>
  );
}
