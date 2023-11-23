import React from "react";
import VideoDeshboard from "./VideoDeshboard";
import { userHubVideoListMocks } from "../../api/mocks";

const VideosPage = ({ state }) => {
  console.log("userHubVideoListMocks", userHubVideoListMocks)
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
      }}
    >
      {userHubVideoListMocks.map((video) => (
        <VideoDeshboard video={video} />
      ))}

      {state}
    </div>
  );
};

export default VideosPage;
