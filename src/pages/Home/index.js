import React, { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TitleComponent } from "../../components/TitleComponent";
import VideoBanner from "../../components/VideoBanner";
import SideBySide from "../../components/sideBySide/SideBySide";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  // const [message, setMessage] = useState("");

  // useEffect(()=>{
  //   getHelloWorld().then((msg) => {
  //     setMessage(msg)
  // })
  // },[])

  return (
    <Grid
      container
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleComponent title="TheBigMouth" description="" />
      <Banner />

      <SideBySide />
      <VideoBanner />
    </Grid>
  );
}
// import Banner from "../../components/PageForEpisodes/Banner/Banner";
// import About from "../../components/PageForEpisodes/About/About";
// {/* <Grid
// container
// style={{
//   margin: "auto",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// }}
// >
// <Banner />
// <About />
// </Grid> */}
