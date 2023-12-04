import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import XRayMocks from "../api/mocks";
import PosterComponent from "./PosterComponent";
import { Box } from "@mui/system";
import Controls from "./Controls";
import { useRef } from "react";
import { setCurrentTime } from "react";

function formatingTime(time) {
  if (isNaN(time)) {
    return "00:00";
  }
  const date = new Date(time * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  if (hours) {
    return `${hours}:${minutes.toString().padStart(2, "0")} `;
  } else return `${minutes}:${seconds}`;
};

const VIDEO_SRC =
  "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/multimedia/longer_movie.mp4";

export default function VideoPlayer() {
  const videoPlayerRef = useRef(null);

  const currentTime = videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : "00:00";
  const duration = videoPlayerRef.current ? videoPlayerRef.current.getDuration() : "00:00";

  const formattedCurrentTime = formatingTime(currentTime);
  const formattedDuration = formatingTime(duration);
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true
  });
  const { playing, muted, volume, playbackRate, played, seeking, buffer } = videoState;


  const toggleOverlay = () => {
    if (showOverlay) {
      setShowOverlay(!showOverlay);
    } else {
      setShowOverlay(showOverlay);
    }
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };



  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing })
    setShowOverlay(!showOverlay)
  };

  const rewindHandler = () => {
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
  };

  const handleFastForward = () => {
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };

  const progressHandler = (state) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value) / 100 });
  };

  const seekMouseUpHandler = (e, value) => {
    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };
  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    })

  };
  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    })
  };
  const muteHandler = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100%",
        left: 0,
        right: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: -1,
        }}
      />
      {showOverlay && !playing && (
        <Box
          className="overlay"
        >
          <PosterComponent
            XRayMocks={XRayMocks}
            currentTime={currentTime}
          />
        </Box>
      )}
      <ReactPlayer
        ref={videoPlayerRef}
        url={VIDEO_SRC}
        width="auto"
        height="100%"
        playing={playing}
        muted={muted}
        volume={volume}
        onProgress={progressHandler}
      />
      <Controls
        onPlayPause={playPauseHandler}
        playing={playing}
        onRewind={rewindHandler}
        onForward={handleFastForward}
        played={played}
        onSeek={seekHandler}
        onSeekMouseUp={seekMouseUpHandler}
        Volume={volume}
        onVolumeChangeHandler={volumeChangeHandler}
        onVolumeSeekUp={volumeSeekUpHandler}
        volume={volume}
        mute={muted}
        onMute={muteHandler}
        duration={formattedDuration}
        currentTime={formattedCurrentTime} />
      <Typography>Current Time seconds: {Math.floor(currentTime)}</Typography>
      <Typography>Current Time minutes: {formatTime(currentTime)}</Typography>
    </Grid>

  );
}
