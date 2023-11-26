import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import ScrollDownBtn from "./ScrollDownBtn";
import EmbedVideo from "./EmbedVideo";

const VideoImageContainer = styled(Box)(() => ({
  display: "block",
  textAlign: "center",
  position: "relative",
  marginBottom: "30px",
  height: "auto",
  maxHeight: "90vh",
  overflow: "hidden",
}));
const PlayButton = styled("div")(({}) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  cursor: "pointer",
}));

const Image = styled("img")({
  width: "90px",
  height: "90px",
  margin: "0 10px",
});

const SIcon = styled("img")(({ isHovered }) => ({
  width: isHovered ? "45px" : "40px",
  height: isHovered ? "45px" : "40px",
  position: "absolute",
  top: isHovered ? "50%" : "49.3%",
  left: isHovered ? "53%" : "50.3%",
  transform: "translate(-50%, -50%)",
  transition: "width 0.5s, height 0.5s, left 0.5s, top 0.5s",
  fontSize: "100px",
}));

const CircleIcon = styled("img")(({ isHovered }) => ({
  width: isHovered ? "83px" : "105px",
  height: isHovered ? "83px" : "105px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "width 0.5s, height 0.5s, left 0.5s, top 0.5s",
}));

const VideoBanner = ({ videoUrl, videoImg, targetRef, title }) => {
  const [isContainerHovered, setContainerHovered] = useState(false);
  const [isMainImageHovered, setMainImageHovered] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <VideoImageContainer
        isContainerHovered={isContainerHovered}
        isMainImageHovered={isMainImageHovered}
        onMouseEnter={() => setContainerHovered(true)}
        onMouseLeave={() => setContainerHovered(false)}
      >
        <EmbedVideo
          videoUrl={videoUrl}
          videoImg={videoImg}
          playVideo={playVideo}
          setPlayVideo={setPlayVideo}
          onMouseEnter={() => setMainImageHovered(true)}
          onMouseLeave={() => setMainImageHovered(false)}
        />

        {!playVideo && (
          <PlayButton onClick={() => setPlayVideo(true)}>
            <Image
              src="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/y-p.png"
              alt="Play Button"
            />
            <CircleIcon
              src="https://tbh.flipclip.co.in/p-c.png"
              alt="Circle Icon"
              isHovered={isMainImageHovered}
              onMouseEnter={() => setMainImageHovered(true)}
              onMouseLeave={() => setMainImageHovered(false)}
            />
            <SIcon
              src={
                isMainImageHovered
                  ? "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/play-pink.png"
                  : "https://tbh.flipclip.co.in/ics.png"
              }
              alt="S Icon"
              isHovered={isMainImageHovered}
              onMouseEnter={() => setMainImageHovered(true)}
              onMouseLeave={() => setMainImageHovered(false)}
            />
          </PlayButton>
        )}
        {!playVideo && targetRef && (
          <ScrollDownBtn
            targetRef={targetRef}
            sx={{ display: { xs: "none", md: "block" } }}
          />
        )}
        {!playVideo && title && (
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "10rem" },
              lineHeight: "1",
              color: "white",
              position: "absolute",
              top: "50%",
              left: "5vw",
              transform: "translateY(-50%)",
              zIndex: "10",
              maxWidth: "30vw",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
        )}
      </VideoImageContainer>
    </>
  );
};

export default VideoBanner;
