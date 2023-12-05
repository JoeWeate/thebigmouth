import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import XRayMocks from "../api/mocks";
import PosterComponent from "./PosterComponent";
import { Box } from "@mui/system";

const VIDEO_SRC =
  "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/multimedia/longer_movie.mp4";

export default function VideoPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
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

  const handleFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);
  console.log(isFullScreen);
  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      {showOverlay && !isPlaying && (
        <Box
          className={isFullScreen ? "overlay-fullscreen" : "overlay"}
          onClick={toggleOverlay}
        >
          <PosterComponent
            XRayMocks={XRayMocks}
            currentTime={currentTime}
            isFullScreen={isFullScreen}
          />
        </Box>
      )}
      <ReactPlayer
        url={VIDEO_SRC}
        width="100%"
        height="calc(100vh - 65px)"
        controls
        playing={isPlaying}
        onProgress={handleProgress}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        config={{
          file: {
            attributes: {
              controlsList: "nofullscreen",
            },
          },
        }}
      />
      <Typography>Current Time seconds: {Math.floor(currentTime)}</Typography>
      <Typography>Current Time minutes: {formatTime(currentTime)}</Typography>
    </Grid>
  );
}
