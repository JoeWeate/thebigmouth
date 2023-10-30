import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { isEmpty } from "lodash";
import BannerMultimedia from "../../components/BannerMultimedia";
import AboutInfo from "../../components/Page4/About/AboutInfo";
import Information from "../../components/Page4/Information";
import { getOneMultimedia } from "../../hooks/API/multimedia";
import styles from "./index.module.css";
import configureAxios from "../../hooks/configureAxios";
import { colors } from "@mui/material";
import SeasonComponent from "../../components/SeasonComponent/SeasonComponent";
import ScrollMultimedia from "../../components/PageForEpisodes/Multimedia/ScrollMultimedia/ScrollMultimedia";
import EpisodePage from "../Episode/";
import { Route, Routes } from "react-router-dom";

const Multimedia = () => {
  const params = useParams();
  const { ID } = params;
  const [media, setMedia] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(true);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);

  // useEffect(() => {
  //   const axios = configureAxios();

  //   setIsLoadingMedia(true);
  //   axios
  //     .get(`/multimedia`)
  //     .then((response) => {
  //       const { multimedia } = response.data || {};
  //       console.log("Multimedia Data:", multimedia);
  //       console.log("Target ID:", ID);

  //       const selectedMedia = multimedia.find(
  //         (item) => item.ID === ID
  //       );
  //       console.log(selectedMedia)
  //       setMedia(selectedMedia);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching multimedia data:", error);
  //     })
  //     .finally(() => setIsLoadingMedia(false));
  // }, []);

  useEffect(() => {
    const axios = configureAxios();
    axios
      .get(`/multimedia/${ID}`)
      .then((response) => {
        const { episodes, multimedia } = response.data || {};
        setMedia(multimedia);
        setEpisodes(episodes);
      })
      .catch((error) => {
        console.log("Error fetching episodes:", error);
      })
  }, []);

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
            <ScrollMultimedia episodes={episodes} />
          )}
          {/* <Routes>
         <Route path='/hey' element={<EpisodePage />} />
      </Routes> */}
        </Grid>

        <Grid item xs={12}>
          {!isLoadingMedia && !isEmpty(media) && (
            <Information
              released={media.released}
              rated={media.rated}
              regionOfOrigin={media.region_of_origin}
              originalAudio={media.original_audio}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Multimedia;
