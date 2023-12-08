import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import XRayMocks from "../api/mocks";
import PosterComponent from "./PosterComponent";
import { Box } from "@mui/system";




export default function VideoPlayer({ url }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    toggleOverlay();
  };

  const handlePause = () => {
    setIsPlaying(false);
    toggleOverlay();
  };


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      {showOverlay && !isPlaying && (
        <Box
          onClick={toggleOverlay}
        >
          <PosterComponent
            XRayMocks={XRayMocks}
            currentTime={currentTime}
            isPlaying={isPlaying}
          />
        </Box>
      )}
      <ReactPlayer
        url={url}
        width="100%"
        height="calc(100vh - 90px)"
        controls
        playing={isPlaying}
        onProgress={handleProgress}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload nofullscreen",
            },
          },
        }}
      />
      <Typography>Current Time seconds: {Math.floor(currentTime)}</Typography>
      <Typography>Current Time minutes: {formatTime(currentTime)}</Typography>
    </Grid>
  );
}
