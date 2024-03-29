import React from "react";
import VideoForm from "./VideoForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const VideoUpload = () => {
  return (
    <Grid
      container
      style={{
        mb: {
          lg: "5rem",
          sm: "4rem",
        },
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box
          sx={{
            paddingTop: "2em",
            borderRadius: "8px",
            textAlign: "center",
          }}
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h5" sx={{ padding: "0.5em", color: "white" }}>
            PLEASE PROVIDE A LINK TO THE
            <span style={{ color: "#EB038F" }}> VIDEO</span> YOU'D LIKE TO
            UPLOAD
          </Typography>
          <Typography variant="h5" sx={{ color: "#E8FA36" }}>
            We're excited to check it out!
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginBottom: "4rem",
        }}
      >
        <VideoForm />
      </Grid>
    </Grid>
  );
};

export default VideoUpload;
