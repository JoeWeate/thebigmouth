import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { isEmpty } from "lodash";
import BannerMultimedia from "../../components/BannerMultimedia";
import AboutInfo from "../../components/Page4/About/AboutInfo";
import Information from "../../components/Page4/Information";
import configureAxios from "../../hooks/configureAxios";
import styles from "./index.module.css";
import ScrollMultimedia from "../../components/PageForEpisodes/Multimedia/ScrollMultimedia/ScrollMultimedia"; // Import ScrollMultimedia component
import SeasonComponent from "../../components/SeasonComponent/SeasonComponent";
import axios from "axios";
import { Link } from "react-router-dom";

const Multimedia = () => {
  const params = useParams();
  const { ID } = params;
  const [media, setMedia] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(true);
  
  useEffect(() => {
    const axios = configureAxios();
    axios
      .get(`/multimedia`)
      .then((response) => {
        const { multimedia } = response.data || {};
        const selectedMedia = multimedia.find((item) => item.ID === ID);
        setMedia(selectedMedia);
        setEpisodes(selectedMedia.episodes); 
        setIsLoadingMedia(false);
      })
      .catch((error) => {
        console.log("Error fetching multimedia data:", error);
        setIsLoadingMedia(false);
      });
  }, [ID]);


  useEffect(() => {
    const fetchDetailedData = async () => {
      try {
        const response = await axios.get(
          `https://bthgkjfail.execute-api.eu-west-2.amazonaws.com/v1/multimedia/${ID}`
        );
        const { episodes: detailedEpisodes, multimedia: detailedMedia } =
          response.data || {};
        setEpisodes(detailedEpisodes);
        const selectedMedia = detailedMedia.find((item) => item.ID === ID);
        setMedia(selectedMedia);
        setIsLoadingMedia(false);
      } catch (error) {
        console.error("Error fetching detailed multimedia data:", error);
        setIsLoadingMedia(false);
      }
    };

    if (ID) {
      fetchDetailedData();
    }
  }, [ID]);
 

  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: "#2B2B2B" }}
        className={styles.container}
      >
        <Grid item xs={12}>
          {!isLoadingMedia && isEmpty(media) && (
            <p>Try another ID! There is no media with ID {ID}</p>
          )}
          {!isLoadingMedia && !isEmpty(media) && (
            <BannerMultimedia src={media.Images} alt={media.Name} />
          )}
        </Grid>
        <Grid item xs={12}>
        <AboutInfo episode={media.Description} />
        {/* <p >{media.Description?.S}</p> */}
      </Grid>

      
        <Grid item xs={12}>

          {!isLoadingMedia && !isEmpty(media) && (
            <Link to={`/episode/${media.ID}?episode_id=S01E01`}>

            <ScrollMultimedia episodes={episodes} seriesId={media.ID} />
            </Link>

          )}
        </Grid>
    

    <Grid item xs={12}>
    {!isLoadingMedia && !isEmpty(media) && (
      <Information
        released={media.Released}
        rated={media.Rated}
        regionOfOrigin={media.RegionOfOrigin}
        originalAudio={media.OriginalAudio}
      />
    )}
  </Grid>

       
      </Grid>
    </>
  );
};

export default Multimedia;
