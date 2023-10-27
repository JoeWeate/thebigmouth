import configureAxios from '../../hooks/configureAxios'; 
import React, { useState, useEffect } from 'react';
import VideoSection from './VideoSection/VideoSection';
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
  console.log( multimediaData);

 
  return (
    <div className="container-mult">
      <VideoSection sectionTitle="New to the Bigmouth" multimediaData={multimediaData} />
      <VideoSection sectionTitle="Behind the Scenes" multimediaData={multimediaData} />
      <VideoSection sectionTitle="Short" multimediaData={multimediaData} />
   
    </div>
  );
}

export default Index;
