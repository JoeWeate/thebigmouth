import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import XRayMocks from '../api/mocks';
import PosterComponent from './PosterComponent';

const VIDEO_SRC = 'https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/multimedia/longer_movie.mp4';

console.log(XRayMocks, XRayMocks)

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
      overlay.style.display = (!isFullScreen && isPlaying ? 'block' : 'none')
    } else {
      overlay.style.display = (isPlaying ? 'block' : 'none');
    }
  };


  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Typography>Current Time: {currentTime}</Typography>
      <Typography>Duration Time: {duration}</Typography>
      <div id="overlay" className="overlay" onClick={toggleOverlay}>
        {isPlaying ? null : <PosterComponent XRayMocks={XRayMocks} currentTime={currentTime} isFullScreen={isFullScreen} />}
      </div>
      <div id="overlay-fullscreen" className="overlay-fullscreen" onClick={toggleOverlay}>
        {isFullScreen && !isPlaying && <PosterComponent XRayMocks={XRayMocks} currentTime={currentTime} isFullScreen={isFullScreen} />}
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
