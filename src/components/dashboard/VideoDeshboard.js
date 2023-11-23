import VideoBox from "../userHub/VideoBox";
import { Box, Grid } from "@mui/material"
import UserVideoInfoDashboard from "./UserVideoInfoDashboard";
import cross from "../../assets/images/cross.svg"
import Avatar from '@mui/material/Avatar';


const TopCover = ({ maxWidth }) => {
    return (
        <Box
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(128, 128, 128, 0.9)",
                margin: "0 auto",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: "center",
                overflow: "hidden",
                position: "absolute",
                maxWidth,
                border: "solid white 1px"
            }}
        >
            <Avatar
                alt="cross-icon"
                src={cross}
                sx={{ width: "6rem", height: "6rem" }}
            />
        </Box>
    );
}

const VideoDashboard = ({ video }) => {
    const { videoUrl, videoImg, ...videoInfo } = video;
    const maxWidth = "500px";

    return (
        <Grid container flexWrap="wrap" sx={{ direction: { lg: "row", xs: "column" }, justifyContent: { xs: "center", lg: "flex-start" } }}>
            <Grid item lg={4} xs={11} p="1rem" style={{ position: "relative" }}>
                <div style={{ position: "relative" }}>
                    <VideoBox videoUrl={videoUrl} maxWidth={maxWidth} videoImg={videoImg} />
                    <TopCover maxWidth={maxWidth} />
                </div>
            </Grid>
            <Grid item lg={6} xs={11} p="1rem">
                <UserVideoInfoDashboard videoInfo={videoInfo} />
            </Grid>
        </Grid>
    );
}

export default VideoDashboard;