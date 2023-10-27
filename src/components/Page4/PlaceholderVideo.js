import React, { useState } from "react";
import { Paper, styled } from "@mui/material";

const VideoImageContainer = styled(Paper)(
  ({ theme, isContainerHovered, isMainImageHovered }) => ({
    minHeight: "700px",
    backgroundColor: "#000",
    textAlign: "center",
    position: "relative",
    maxHeight: "800px",
    transition: "filter 0.5s ease", // Increased transition duration
    "&:hover": {
      filter: isMainImageHovered
        ? "none"
        : isContainerHovered
          ? "brightness(50%)"
          : "none",
    },
  })
);

const Video = styled("video")({
  height: "90%",
  width: "100%",
  objectFit: "cover",
  transition: "filter 0.5s ease", // Increased transition duration
  transform: "scaleY(1.1)",
  cursor: "pointer",
});

const PlayButton = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  width: "100%",
  height: "100%",
}));

const Image = styled("img")({
  width: "90px",
  height: "90px",
  margin: "0 10px",
});

const SIcon = styled("img")(({ theme, isHovered }) => ({
  width: isHovered ? "45px" : "40px",
  height: isHovered ? "45px" : "40px",
  position: "absolute",
  top: isHovered ? "50%" : "49.3%",
  left: isHovered ? "50.4%" : "50.3%",
  transform: "translate(-50%, -50%)",
  transition: "width 0.5s, height 0.5s, left 0.5s, top 0.5s", // Increased transition duration
  fontSize: isHovered ? "100px" : "100px",
}));

const CircleIcon = styled("img")(({ theme, isHovered }) => ({
  width: isHovered ? "83px" : "105px",
  height: isHovered ? "83px" : "105px",
  position: "absolute",
  top: "50%",
  left: isHovered ? "50%" : "50%",
  transform: isHovered ? "translate(-50%, -50%)" : "translate(-50%, -50%)",
  transition: "width 0.5s, height 0.5s, left 0.5s, top 0.5s", // Increased transition duration
}));

const VideoBanner = ({ episode }) => {
  const [isContainerHovered, setContainerHovered] = useState(false);
  const [isMainImageHovered, setMainImageHovered] = useState(false);

  return (
    <VideoImageContainer
      isContainerHovered={isContainerHovered}
      isMainImageHovered={isMainImageHovered}
      onMouseEnter={() => setContainerHovered(true)}
      onMouseLeave={() => setContainerHovered(false)}
    >
      <Video
        poster={episode.episode.image}
        onMouseEnter={() => setMainImageHovered(true)}
        onMouseLeave={() => setMainImageHovered(false)}
      ></Video>
      <PlayButton>
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
              ? "https://thebigmouth-frontend.s3.eu-west-2.amazonaws.com/play-pink.png"
              : "https://tbh.flipclip.co.in/ics.png"
          }
          alt="S Icon"
          isHovered={isMainImageHovered}
          onMouseEnter={() => setMainImageHovered(true)}
          onMouseLeave={() => setMainImageHovered(false)}
        />
      </PlayButton>
    </VideoImageContainer>
  );
};

export default VideoBanner;
