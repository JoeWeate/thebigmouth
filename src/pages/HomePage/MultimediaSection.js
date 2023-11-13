import configureAxios from "../../api/configureAxios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoSection from "./VideoSection";
import Multimedia from "../MultimediaPage"; // Import the Multimedia component

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
    <div style={{
      marginTop: "4rem",
      padding: "35px",
    }}>
      <VideoSection
        sectionTitle="New to the Bigmouth"
        multimediaData={multimediaData}
      />
      <VideoSection
        sectionTitle="Behind the Scenes"
        multimediaData={multimediaData}
      />
      <VideoSection sectionTitle="Short" multimediaData={multimediaData} />
      <Routes>
        <Route path="/multimedia/:ID" element={<Multimedia />} />
      </Routes>
    </div>
  );
}

export default MultimediaSection;
