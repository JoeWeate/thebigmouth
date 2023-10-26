import React, { useState } from "react";
import { Paper, styled } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoImageContainer = styled(Paper)(({ theme, isContainerHovered }) => ({
  minHeight: "700px",
  backgroundColor: "#000",
  textAlign: "center",
  position: "relative",
  maxHeight: "800px",
  "&:hover": {
    filter: isContainerHovered ? "brightness(50%)" : "none", // Apply brightness filter on hover
  },
}));

const Video = styled("video")({
  height: "90%",
  width: "100%",
  objectFit: "cover",
  transition: "filter 0.2s ease",
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
  width: isHovered ? "60px" : "40px",
  height: isHovered ? "60px" : "40px",
  position: "absolute",
  top: isHovered ? "50%" : "49.3%",
  left: isHovered ? "50.4%" : "50.3%",
  transform: "translate(-50%, -50%)",
  transition: "width 0.2s, height 0.2s, left 0.2s, top 0.2s",
  fontSize: isHovered ? "100px" : "100px",
}));

const CircleIcon = styled("img")(({ theme, isHovered }) => ({
  width: isHovered ? "83px" : "105px",
  height: isHovered ? "83px" : "105px",
  position: "absolute",
  top: "50%",
  left: isHovered ? "50%" : "50%",
  transform: isHovered ? "translate(-50%, -50%)" : "translate(-50%, -50%) ",
  transition: "width 0.2s, height 0.2s, left 0.2s, top 0.2s",
}));

const VideoBanner = () => {
  const [isContainerHovered, setContainerHovered] = useState(false);
  const [isIconHovered, setIconHovered] = useState(false);

  return (
    <VideoImageContainer
      isContainerHovered={isContainerHovered}
      onMouseEnter={() => setContainerHovered(true)}
      onMouseLeave={() => setContainerHovered(false)}
    >
      <Video poster="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/video-banner.png"></Video>
      <PlayButton>
        <PlayCircleOutlineIcon sx={{ fontSize: 110 }} />
        {/* <Image
          src="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/y-p.png"
          alt="Play Button"
        /> */}
        <CircleIcon
          src="https://tbh.flipclip.co.in/p-c.png"
          alt="Circle Icon"
          isHovered={isIconHovered}
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
        />
        <SIcon
          src={
            isIconHovered
              ? <PlayArrowIcon sx={{ width: "3rem", color: "pink" }} />
              : "https://tbh.flipclip.co.in/ics.png"
          }
          alt="S Icon"
          isHovered={isIconHovered}
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}
        />
      </PlayButton>
    </VideoImageContainer>
  );
};

export default VideoBanner;
