import React from "react";
import PendingVideo from "../../components/dashboard/PendingVideo";
import { userHubVideoListMocks } from "../../api/mocks";
import ApprovedVideo from "../../components/dashboard/ApprovedVideo";
import { Grid, Typography } from "@mui/material"

const getFilteredVideos = (state) => {
  return userHubVideoListMocks.filter((video) => (
    video.state === state
  ))
}

const VideosPage = ({ state, videosByState = getFilteredVideos(state) }) => {
  console.log("userHubVideoListMocks", userHubVideoListMocks)
  console.log("state", state);
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
      }}
    >
      {state !== "approved" ?
        videosByState.map((video) => (
          <PendingVideo key={video.id} video={video} state={state} />
        )) :
        <Grid container>
          {videosByState.map((video) => (
            <Grid item lg={5} xs={11} sx={{ padding: "1rem" }} key={video.id}>
              <ApprovedVideo video={state} withVideoInfo={true} maxWidth="400px" />
            </Grid>
          ))}
        </Grid>
      }

      {state === "All my videos" &&
        <Typography>
          No videos are in the {state} section
        </Typography>
      }




      {state}
    </div>
  );
};

export default VideosPage;
