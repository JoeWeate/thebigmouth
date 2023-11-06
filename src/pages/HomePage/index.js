import React, { Grid} from "@mui/material";
import { TitleComponent } from "../../components/TitleComponent";
import VideoBanner from "./VideoBanner";
import SideBySide from "./SideBySide";
import Banner from "./Banner";
import MultiMediaSection from "./MultimediaSection";
import ShowMore from "../../components/ShowMore";
export default function HomePage() {
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
