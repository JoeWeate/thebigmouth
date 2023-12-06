import React from "react";
import PendingVideo from "../../components/dashboard/PendingVideo";
import ApprovedVideo from "../../components/dashboard/ApprovedVideo";
import { Grid, Typography } from "@mui/material"
import { useContext } from "react";
import { MyContext } from "../../App";

const VideosPage = ({ state, data }) => {
  const { userRole } = useContext(MyContext);
  return (
    <>
      <Typography variant="h5">{state}</Typography>
      {state !== "approved" && data && data.length > 0 ? (
        data.map((video) => (
          <PendingVideo userRole={userRole} key={video.id} video={video}  state={state} />
        ))
      ) : state !== "approved" && data && data.length === 0 ? (
        <Typography>
          No {state} videos available.
        </Typography>
      ) : (
        <Grid container sx={{ gap: { lg: 1, md: 0 } }}>
          {data.map((video) =>
          (<Grid item lg={5} md={11} xs={11} sx={{ padding: "1rem" }} key={video.id}>
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


    </>
  );
};

export default VideosPage;
