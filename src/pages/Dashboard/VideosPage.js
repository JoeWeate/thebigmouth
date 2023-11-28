import React from "react";
import PendingVideo from "../../components/dashboard/PendingVideo";
import ApprovedVideo from "../../components/dashboard/ApprovedVideo";
import { Grid, Typography } from "@mui/material"


const VideosPage = ({ state, data }) => {
  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
      }}
    >
      <Typography variant="h5">{state}</Typography>
      {state !== "approved" && data && data.length > 0 ? (
        data.map((video) => (
          <PendingVideo key={video.id} video={video} state={state} />
        ))
      ) : state !== "approved" && data && data.length === 0 ? (
        <Typography>
          No {state} videos available.
        </Typography>
      ) : (
        <Grid container sx={{ gap: { lg: 1, md: 0 } }}>
          {data.map((video) => (
            <Grid item lg={5} md={11} xs={11} sx={{ padding: "1rem" }} key={video.id}>
              <ApprovedVideo video={video} withVideoInfo={true} maxWidth="600px" />
            </Grid>
          ))}
        </Grid>
      )}

      {state === "approved" && data.length === 0 &&
        <Typography>
          No approved videos available.
        </Typography>
      }


    </div>
  );
};

export default VideosPage;
