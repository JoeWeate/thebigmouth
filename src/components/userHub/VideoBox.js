import { Box, CardMedia } from "@mui/material";
import React from 'react';
import ReactPlayer from 'react-player';
import {videoUrlMocks} from "../../api/mocks";


const VideoBox = ({videoUrl, videoImg, maxWidth = "600px", children }) => {
    const [hover, setHover] = React.useState(false);
    const [playVideo, setPlayVideo] = React.useState(false);

    const handleEnded = () => {
        setPlayVideo(false);
    };

    const togglePlaying = () => {
        setPlayVideo(!playVideo);
    }

    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                maxWidth,
                cursor: "pointer",
                margin: "0 auto",
                textAlign: "center",
                overflow: "hidden"
            }}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            onClick={togglePlaying}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "0",
                    paddingTop: "56.25%",
                    position: "relative",
                }}>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    playing={playVideo}
                    muted={true}
                    controls={true}
                    onEnded={handleEnded}
                    url={videoUrl || videoUrlMocks || "https://www.youtube.com/watch?v=UbPPNJgFouk"}
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}/>
                {videoImg && !playVideo && <CardMedia component="img" image={videoImg} alt="Cover"
                                        sx={{position: "absolute", top: 0, left: 0, height: '100%', width: '100%', objectFit: 'cover'}}/>}
                {children(playVideo, hover, videoImg)}
            </Box>
        </Box>
    )
}

export default VideoBox;