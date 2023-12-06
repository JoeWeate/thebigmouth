import configureAxios from "../../api/configureAxios";
import React, { useState, useEffect } from "react";
import MediaCardList from "../../components/MediaCardList";
import { Grid, Divider } from "@mui/material";

function MultimediaSection() {
  const [multimediaData, setMultimediaData] = useState([]);

  useEffect(() => {
    const axios = configureAxios();
    axios
      .get(`/multimedia`)
      .then((response) => {
        if (response.data) {
          setMultimediaData(response.data.multimedia);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Grid container alignSelf="flex-end" direction="column" sx={{
      marginTop: "4rem"
    }}>
      <MediaCardList
        sectionTitle="New to the Bigmouth"
        multimediaData={multimediaData}
      />
      <Divider sx={{
        backgroundColor: "#838383", mr: { lg: "5rem", xs: "2rem" }, mb: "2rem"
      }} />
      <MediaCardList
        sectionTitle="Behind the Scenes"
        multimediaData={multimediaData}
      />
      <Divider sx={{
        backgroundColor: "#838383", mr: { lg: "5rem", xs: "2rem" }, mb: "2rem"
      }} />
      <MediaCardList sectionTitle="Short" multimediaData={multimediaData} />
      <Divider sx={{
        backgroundColor: "#838383", mr: { lg: "5rem", xs: "2rem" }, mb: "2rem"
      }} />
    </Grid>
  );
}

export default MultimediaSection;
