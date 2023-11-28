import { Grid } from "@mui/material";
import UserVideo from "../../components/userHub/UserVideo";
import { userHubVideoListMocks } from "../../api/mocks";
import PageTitleComponent from "./PageTitleComponent";
import AddArtButton from "../../components/userHub/AddArtButton";
import SelectSortBy from "../../components/userHub/SelectSortBy";
import { useState } from "react";

const DummyHomePage = () => {
  const [videoData, setVideoData] = useState(userHubVideoListMocks);
  let title = {
    mainTitle: "Welcome to VideoHub",
    subtitle: "Your Ultimate Destination for Awesome Content Experiences!",
  };
  let fontSize = {
    titleFontSize: "50pt",
    subtitleFontSize: "24pt",
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item lg={12} sx={{ mt: { xs: "2rem", lg: "2rem" }, mb: "1rem" }}>
        <PageTitleComponent title={title} fontSize={fontSize} />
      </Grid>
      <Grid item>
        <AddArtButton />
      </Grid>
      <Grid
        item
        sx={{ width: "88%" }}
        container
        justifyContent="flex-end"
        alignItems="center"
      >
        <SelectSortBy setVideoData={setVideoData} videoData={videoData} />
      </Grid>

      <Grid item sx={{ width: "90%", marginTop: "2rem", marginBottom: "2rem" }}>
        <Grid
          container
          justifyContent="center"
          sx={{ marginBottom: { lg: "4rem", sm: 0 } }}
        >
          {videoData.map((video) => {
            let withVideoInfo = true;
            let maxWidth = "800px";
            return (
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                key={video.id}
                sx={{
                  padding: { lg: "1rem", md: "1rem", sm: 0 },
                  paddingBottom: { sm: "2rem", xs: "1rem" },
                }}
              >
                <UserVideo
                  video={video}
                  maxWidth={maxWidth}
                  withVideoInfo={withVideoInfo}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DummyHomePage;
