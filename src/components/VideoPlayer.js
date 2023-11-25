import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';

const VIDEO_SRC = "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/multimedia/longer_movie.mp4"

export default function VideoPlayer() {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const videoElement = document.getElementById('video-active');
        const onTimeUpdate = (event) => {
            setCurrentTime(videoElement.currentTime);
            setDuration(videoElement.duration);
        };
        videoElement.addEventListener('timeupdate', onTimeUpdate);
        return () => {
          // Cleanup: remove the event listener when the component is unmounted
          videoElement.removeEventListener('timeupdate', onTimeUpdate);
        };
      }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
    <Typography>Currrent Time: {currentTime}</Typography>
    <Typography>Duration Time: {duration}</Typography>
    <video
        id="video-active"
        width="640"
        height="390"
        controls="controls"
        src={VIDEO_SRC}
       / >
    </Grid>
  );
}
