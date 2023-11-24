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
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
      }}
    >
      <Typography variant="h5">{state}</Typography>
      {state !== "approved" && videosByState.length > 0 ? (
        videosByState.map((video) => (
          <PendingVideo key={video.id} video={video} state={state} />
        ))
      ) : state !== "approved" && videosByState.length === 0 ? (
        <Typography>
          No {state} videos available.
        </Typography>
      ) : (
        <Grid container sx={{ gap: { lg: 1, md: 0 } }}>
          {videosByState.map((video) => (
            <Grid item lg={5} md={11} xs={11} sx={{ padding: "1rem" }} key={video.id}>
              <ApprovedVideo video={video} withVideoInfo={true} maxWidth="600px" />
            </Grid>
          ))}
        </Grid>
      )}

      {state === "approved" && videosByState.length === 0 &&
        <Typography>
          No approved videos available.
        </Typography>
      }


    </div>
  );
};

export default VideosPage;
