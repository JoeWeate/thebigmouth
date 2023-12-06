import { Card } from "@mui/material";
import React from "react";
import UserVideoInfo from "./UserVideoInfo";
import VideoBoxWithDecor from "./VideoBoxWithDecor";

const UserVideo = ({ video, maxWidth = "600px", withVideoInfo }) => {
  const { URL, ...videoInfo } = video;
  console.log("allalal", videoInfo);
  console.log("URL", URL);
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
      <VideoBoxWithDecor videoUrl={URL} videoImg="" maxWidth={maxWidth} />
      {withVideoInfo && <UserVideoInfo videoInfo={videoInfo} />}
    </Card>
  );
};

export default UserVideo;
