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
                  paddingBottom: {xs: "56.25%", md: "45.2344%"},
              }}
          >
              <ReactPlayer
                  url={videoUrl}
                  playing
                  controls
                  onEnded={handleEnded}
                  width ="100%"
                  height="100%"
                  style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width:"auto",
                      height: "100%",
                      maxWidth:"100%",
                      maxHeight:"100%"
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
