import React from "react";
import VideoForm from "../VideoUpload/VideoForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const VideoUploadPage = () => {
  return (
    <Grid
      container
      style={{
        height: "100vh",
        backgroundColor: "white",
        mb: {
          lg: "5rem",
        },
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box
          sx={{
            paddingTop: "2em",
            backgroundColor: "white",
            borderRadius: "8px",
            textAlign: "center",
          }}
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <h2>Share your Art</h2>
          <p>Unleash your creativity and let your art shine!</p>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginBottom: "6rem",
        }}
      >
        <VideoForm />
      </Grid>
    </Grid>
  );
};

export default VideoUploadPage;
