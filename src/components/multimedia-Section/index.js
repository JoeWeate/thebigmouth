import configureAxios from '../../hooks/configureAxios'; 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoSection from './VideoSection/VideoSection';
import Multimedia from '../../pages/Multimedia/index'; // Import the Multimedia component
import './index.css';
import env_config from "../../env_config";

function Index(props) {
  const [multimediaData, setMultimediaData] = useState([]);

  useEffect(() => {
    const axios = configureAxios();

    axios.get(`/multimedia`)
      .then(response => {
        if (response.data) {
          setMultimediaData(response.data.multimedia);
          console.log('Fetched Multimedia Data:', response.data.multimedia);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container-mult">
      <VideoSection sectionTitle="New to the Bigmouth" multimediaData={multimediaData} />
      <VideoSection sectionTitle="Behind the Scenes" multimediaData={multimediaData} />
      <VideoSection sectionTitle="Short" multimediaData={multimediaData} />
      <Routes>
        <Route path='/multimedia/:ID' element={<Multimedia />} />
      </Routes>
    </div>
  );
}

export default Index;
