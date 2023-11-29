import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { Box, Avatar } from '@mui/material';

const VIDEO_SRC = 'https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/multimedia/longer_movie.mp4';

const PosterComponent = ({ isFullScreen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        bottom: 0,
        left: 0,
        maxWidth: isFullScreen ? "100%" : "640px",
        height: "150px",
        backgroundColor: "rgba(59, 59, 59, 0.7)",
        border: "solid red 1px"
      }}
    >
      <Grid container direction="row" lg={10} gap={4}>
        <Grid item lg={2} sx={{ marginBottom: "5rem" }}>
          <Avatar src="https://images.unsplash.com/photo-1580518337843-f959e992563b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0b3JzfGVufDB8fDB8fHww" sx={{ width: 104, height: 104, borderRadius: 1, border: "solid #E60077 1px" }}></Avatar>
        </Grid>
        <Grid item lg={9} sx={{ marginTop: "1.5rem" }}>
          <Typography variant="h6">Andre Sebastian</Typography>
          <Typography sx={{ fontSize: "10pt" }}>
            We and our partners store and/or access information on a device, such as cookies and process personal data, such as unique identifiers
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function VideoPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('video-active');
    if (!videoElement) {
      console.error("Video element not found.");
      return;
    }


    const onTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
      setDuration(videoElement.duration);
    };

    const onPlay = () => {
      setIsPlaying(true);
    };

    const onPause = () => {
      setCurrentTime(videoElement.currentTime);
      setIsPlaying(false);
      toggleOverlay();
    };
    //check if IsFullScreen is true
    const onFullScreenChange = () => {
      if (document.fullscreenElement !== null) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false)
      }

    };
    console.log("full-screen", isFullScreen)
    videoElement.addEventListener('timeupdate', onTimeUpdate);
    videoElement.addEventListener('play', onPlay);
    videoElement.addEventListener('pause', onPause);
    document.addEventListener('fullscreenchange', onFullScreenChange);

    return () => {
      videoElement.removeEventListener('timeupdate', onTimeUpdate);
      videoElement.removeEventListener('play', onPlay);
      videoElement.removeEventListener('pause', onPause);
      document.removeEventListener('fullscreenchange', onFullScreenChange);
    };
  }, [isFullScreen, currentTime]);

  const toggleOverlay = () => {
    const overlayId = isFullScreen ? 'overlay-fullscreen' : 'overlay';
    const overlay = document.getElementById(overlayId);

    console.log("Overlay display style:", overlay.style.display);
    console.log("isPlaying:", isPlaying);
    console.log("currentTime:", currentTime);

    if (overlayId === "overlay-fullscreen") {
      console.log("overlayId", overlayId)
      overlay.style.display = (isFullScreen && !isPlaying && currentTime >= 521 && currentTime <= 562) ? 'none' : 'block';
    } else {
      overlay.style.display = (isPlaying && currentTime >= 521 && currentTime <= 562) ? 'block' : 'none';
    }
  };


  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Typography>Current Time: {currentTime}</Typography>
      <Typography>Duration Time: {duration}</Typography>
      <div id="overlay" className="overlay" onClick={toggleOverlay}>
        {isPlaying ? null : <PosterComponent isFullScreen={isFullScreen} />}
      </div>
      <div id="overlay-fullscreen" className="overlay-fullscreen" onClick={toggleOverlay} style={{
        objectFit: 'contain',
        userSelect: 'text',
        position: 'fixed',
        boxSizing: 'border-box',
        minWidth: '0px',
        maxWidth: 'none',
        minHeight: '0px',
        maxHeight: 'none',
        width: '100%',
        height: '100%',
        transform: 'none',
        inset: '0px',
        margin: '0px',
      }}>
        {isFullScreen && !isPlaying && <PosterComponent isFullScreen={isFullScreen} />}
      </div>

      <video
        id="video-active"
        width="640"
        height="390"
        controls="controls"
        src={VIDEO_SRC}
        onClick={toggleOverlay}
      />
    </Grid>
  );
}
