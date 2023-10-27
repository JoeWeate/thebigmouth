import {useAuth0} from "@auth0/auth0-react";
import Grid from '@mui/material/Grid';
import {isEmpty} from "lodash";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BannerMultimedia from "../../components/BannerMultimedia";
import AboutInfo from "../../components/Page4/About/AboutInfo";
import Information from "../../components/Page4/Information";
import {getOneMultimedia} from "../../hooks/API/multimedia";

import styles from './index.module.css';


const Multimedia = () => {
  const params = useParams();
  const {ID} = params;
  const [media, setMedia] = useState({});
  const [episodes, setEpisodes] = useState({});
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const { user, isLoading } = useAuth0();

    useEffect(()=>{
        if(!isLoading && user) {
            setIsLoadingMedia(true);
            getOneMultimedia(ID).then((data) => {
                const {multimedia, episodes} = data || {};
                setMedia(multimedia)
                setEpisodes(episodes)
            }).then(() => setIsLoadingMedia(false));
        }
    },[isLoading, user, ID])

  return (
      <Grid container className={styles.container}>
          <Grid item xs={12}>
              {!isLoading &&  !isLoadingMedia && isEmpty(media) && <p>Try another ID! There is no media with ID {ID}</p>}
              {!isLoadingMedia && !isEmpty(media) && <BannerMultimedia src={media.images?.S} alt={media.Name?.S} />}
          </Grid>
          <Grid item xs={12}>
              {!isLoading && !isEmpty(media) && <AboutInfo />}
          </Grid>
          <Grid item xs={12}>
              {!isLoading && !isEmpty(media) && <Information />}
          </Grid>
      </Grid>

  );
};

export default Multimedia;