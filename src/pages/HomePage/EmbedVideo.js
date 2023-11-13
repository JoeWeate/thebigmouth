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
            width: "100%",
            height: {
              xs: "50vh",
              sm: "60vh",
              md: `calc(100vh - 65px)`,
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
