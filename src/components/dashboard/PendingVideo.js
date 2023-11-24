import VideoBox from "../userHub/VideoBox";
import { Grid } from "@mui/material"
import UserInfoPending from "./UserInfoPending";
import TopCover from "./TopCover";


const PendingVideo = ({ video }) => {
    const { videoUrl, state, videoImg, ...videoInfo } = video;
    const maxWidth = "500px";

    return (
        <Grid container flexWrap="wrap" sx={{ direction: { lg: "row", xs: "column" }, justifyContent: { xs: "center", lg: "flex-start" }, mb: { xs: "1rem", lg: 0 } }}>
            <Grid item lg={4} xs={11} p="1rem" style={{ position: "relative" }}>
                <div style={{ position: "relative" }}>
                    <VideoBox videoUrl={videoUrl} maxWidth={maxWidth} videoImg={videoImg} />
                    {state === "pending" || state === "rejected" ? (
                        <TopCover maxWidth={maxWidth} state={state} />
                    ) : (
                        console.log("TopCover not rendered. State:", state)
                    )}
                </div>
            </Grid>
            <Grid item lg={6} xs={11} p="1rem" sx={{ marginTop: { lg: 0, xs: "-1.5rem" } }}>
                <UserInfoPending videoInfo={videoInfo} state={state} />
            </Grid>
        </Grid>
    );
}

export default PendingVideo;