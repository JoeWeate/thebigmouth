import React from "react";
import { Paper, Box } from "@mui/material";
import ReactPlayer from "react-player";

const EmbedVideo = ({ playVideo, setPlayVideo, videoUrl, videoImg }) => {
  const handleEnded = () => {
    setPlayVideo(false);
  };

  return (
    <Paper
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "auto",
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
    >
      {playVideo ? (
        <ReactPlayer
          url={videoUrl}
          playing
          controls
          width="auto"
          onEnded={handleEnded}
          height={`calc(100vh - 65px)`}
        />
      ) : (
        <Box
          sx={{
            position: "relative",
            maxWidth: {
              xs: "600px",
              sm: "960px",
              md: "1280px ",
              lg: "1920px",
            },
            height: {
              xs: "100% ",
              sm: "100%",
              md: `100%`,
              lg: `calc(100vh - 65px)`,
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            },
          }}
        >
          <img src={videoImg} alt="Cover" />
        </Box>
      )}
    </Paper>
  );
};

export default EmbedVideo;
