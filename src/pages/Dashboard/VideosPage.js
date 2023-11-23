import React from "react";
import PandingVideo from "../../components/dashboard/PendingVideo";
import { userHubVideoListMocks } from "../../api/mocks";
import ApprovedVideo from "../../components/dashboard/ApprovedVideo";

const VideosPage = ({ state }) => {
  console.log("userHubVideoListMocks", userHubVideoListMocks)
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
      }}
    >
      {userHubVideoListMocks.map((video) => (
        video.state !== "approved" ?
          <PandingVideo video={video} state={state} /> :
          <ApprovedVideo video={video} withVideoInfo={true} maxWidth="400px" />
      ))}

      {state}
    </div>
  );
};

export default VideosPage;
