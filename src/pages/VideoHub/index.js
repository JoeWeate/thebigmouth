import { Grid } from "@mui/material";
import UserVideo from "../../components/userHub/UserVideo";
import PageTitleComponent from "./PageTitleComponent";
import AddArtButton from "../../components/userHub/AddArtButton";
import SelectSortBy from "../../components/userHub/SelectSortBy";
import { useEffect, useState } from "react";
import { getAllVideosByState } from "../../api/videos";
import SubtitleComponent from "./SubtitleComponent";

const VideoHub = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getAllVideosByState("approved")
      .then((videosData) => {
        console.log(videosData.videos);
        setVideoData(videosData.videos);
      })
      .catch((error) => {
        console.error({ error });
      });
  }, []);

    let title = "Welcome to VideoHub"
    let subtitle = "Your Ultimate Destination for Awesome Content Experiences!"
    let titleFontSize = "50pt";
    let subtitleFontSize = "26pt";

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item lg={12} sx={{ mt: { xs: "2rem", lg: "2rem" }, mb: "1rem" }}>
                <PageTitleComponent title={title} titleFontSize={titleFontSize} />
                <SubtitleComponent subtitle={subtitle} subtitleFontSize={subtitleFontSize} />
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
export default VideoHub;