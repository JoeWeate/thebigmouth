import configureAxios from "../../api/configureAxios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MediaCard from "../../components/MediaCard";
import Multimedia from "../MultimediaPage"; // Import the Multimedia component
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
          console.log("Fetched Multimedia Data:", response.data.multimedia);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Grid container lg={11.2} xs={11.2} alignSelf="flex-end" direction="column" sx={{
      marginTop: "4rem"
    }}>
      <MediaCard
        sectionTitle="New to the Bigmouth"
        multimediaData={multimediaData}
      />
      <Divider sx={{
        backgroundColor: "#838383", mr: { lg: "5rem", xs: "2rem" }, mb: "2rem"
      }} />
      <MediaCard
        sectionTitle="Behind the Scenes"
        multimediaData={multimediaData}
      />
      <Divider sx={{
        backgroundColor: "#838383", mr: { lg: "5rem", xs: "2rem" }, mb: "2rem"
      }} />
      <MediaCard sectionTitle="Short" multimediaData={multimediaData} />
      <Divider sx={{
        backgroundColor: "#838383", mr: { lg: "5rem", xs: "2rem" }, mb: "2rem"
      }} />
      <Routes>
        <Route path="/multimedia/:ID" element={<Multimedia />} />
      </Routes>
    </Grid>
  );
}

export default MultimediaSection;
