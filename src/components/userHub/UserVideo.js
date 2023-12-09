import { Card } from "@mui/material";
import React from "react";
import UserVideoInfo from "./UserVideoInfo";
import VideoBox from "./VideoBox";

const UserVideo = ({ video, maxWidth = "600px", withVideoInfo }) => {
  const { URL, ...videoInfo } = video;

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        p: 2,
        maxWidth,
      }}
    >
      <VideoBox videoUrl={URL} maxWidth={maxWidth} />
      {withVideoInfo && <UserVideoInfo videoInfo={videoInfo} />}
    </Card>
  );
};

export default UserVideo;
