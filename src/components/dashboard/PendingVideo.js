import VideoBox from "../userHub/VideoBox";
import { Grid } from "@mui/material"
import UserInfoPending from "./UserInfoPending";
import TopCover from "./TopCover";



const PendingVideo = ({ video, state, setUpdateData }) => {
    const { VideoID, URL, UserID, videoImg, ...videoInfo } = video;
    const maxWidth = "500px";
    console.log("videoPending", videoInfo)
    return (
        <Grid container flexWrap="wrap" sx={{ direction: { lg: "row", xs: "column" }, justifyContent: { xs: "center", lg: "flex-start" }, mb: { xs: "1rem", lg: 0 } }}>
            <Grid item lg={4} xs={11} p="1rem" style={{ position: "relative" }}>
                <div style={{ position: "relative" }}>
                    <VideoBox videoUrl={URL} maxWidth={maxWidth} videoImg={videoImg} />
                    {state === "pending" || state === "rejected" ? (
                        <TopCover maxWidth={maxWidth} state={state} />
                    ) : ""}
                </div>
            </Grid>
            <Grid item lg={6} xs={11} p="1rem" sx={{ marginTop: { lg: 0, xs: "-1.5rem" } }}>
                <UserInfoPending setUpdateData={setUpdateData} videoInfo={video} />
            </Grid>
        </Grid>
    );
}

export default PendingVideo;