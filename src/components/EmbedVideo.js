import React from "react";
import { Box, CardMedia } from "@mui/material";
import ReactPlayer from "react-player";
import ImageOverlay from "./ImageOverlay";

const EmbedVideo = ({ playVideo, setPlayVideo, videoUrl, videoImg }) => {
  const handleEnded = () => {
    setPlayVideo(false);
  };

  return (
    <Box sx={{height: "100%", width: "100%"}}>
      {playVideo ? (
          <Box
              sx={{
                  position: "relative",
                  paddingBottom: "56.2344%",
              }}
          >
              <ReactPlayer
                  url={videoUrl}
                  playing
                  controls
                  onEnded={handleEnded}
                  width="100%"
                  height="100%"
                  style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                  }}
              />
          </Box>
      ) : (
          <>
          <CardMedia  component="img" image={videoImg} alt="Cover" sx={{height: '100%', width: '100%', objectFit: 'cover'}}/>
          <ImageOverlay />
          </>
      )}
    </Box>
  );
};

export default EmbedVideo;
