import React, { Grid } from "@mui/material";
import { TitleComponent } from "../../components/TitleComponent";
import VideoBanner from "../../components/VideoBanner";
import SideBySide from "./SideBySide";
import Banner from "./Banner";
import MultiMediaSection from "./MultimediaSection";
import ShowMore from "../../components/ShowMore";
import { useRef } from "react";

export default function HomePage() {
  const targetRef = useRef(null);
  const videoBannerData = {
    videoUrl: "https://www.youtube.com/watch?v=DpPzA4OBVqo",
    videoImg:
      "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/video-banner.png",
  };

  return (
    <Grid
      container
      direction="column"
      style={{
        backgroundColor: "black",
      }}
    >
      <TitleComponent title="TheBigMouth" description="" />
      <Banner targetRef={targetRef} />
      <SideBySide targetRef={targetRef} />
      <VideoBanner
        videoUrl={videoBannerData.videoUrl}
        videoImg={videoBannerData.videoImg}
      />
      <MultiMediaSection />
      <ShowMore />

      {/* <img
           src={`https://${env_config.s3.BUCKET}.s3.amazonaws.com/public/big-mouth.png`}
          style={{ width: 250, height: 250 }}
        /> */}
    </Grid>
  );
}
