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
  const [isLoadingMedia, setIsLoadingMedia] = useState(true);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);

  useEffect(() => {
    const axios = configureAxios();

    setIsLoadingMedia(true);
    axios
      .get(`/multimedia`)
      .then((response) => {
        const { multimedia } = response.data || {};
        console.log("Multimedia Data:", multimedia);
        console.log("Target ID:", ID);

        const selectedMedia = multimedia.find(
          (item) => item.ID.S.toString() === ID.toString()
        );
        setMedia(selectedMedia);
      })
      .catch((error) => {
        console.log("Error fetching multimedia data:", error);
      })
      .finally(() => setIsLoadingMedia(false));
  }, [ID]);

  useEffect(() => {
    const axios = configureAxios();

    if (media?.ID?.S) {
      axios
        .get(`/multimedia/${media.ID.S}`)
        .then((response) => {
          const { episodes } = response.data || {};
          setMedia((prevMedia) => ({
            ...prevMedia,
            episodes,
          }));
        })
        .catch((error) => {
          console.log("Error fetching episodes:", error);
        })
        .finally(() => setLoadingEpisodes(false));
    }
  }, [media.ID?.S]);

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
            <BannerMultimedia src={media.images?.S} alt={media.Name?.S} />
          )}
        </Grid>
        <Grid item xs={12}>
          <AboutInfo episode={media.Description?.S} />
          {/* <p >{media.Description?.S}</p> */}
        </Grid>

        <Grid item xs={12}>
          {!isLoadingMedia && !isEmpty(media) && (
            <ScrollMultimedia episodes={media.episodes} />
          )}
          {/* <Routes>
         <Route path='/hey' element={<EpisodePage />} />
      </Routes> */}
        </Grid>

        <Grid item xs={12}>
          {!isLoadingMedia && !isEmpty(media) && (
            <Information
              released={media.released?.N}
              rated={media.rated?.N}
              regionOfOrigin={media.region_of_origin?.S}
              originalAudio={media.original_audio?.S}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Multimedia;
