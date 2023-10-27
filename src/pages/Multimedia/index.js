import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { isEmpty } from 'lodash';
import BannerMultimedia from '../../components/BannerMultimedia';
import AboutInfo from '../../components/Page4/About/AboutInfo';
import Information from '../../components/Page4/Information';
import { getOneMultimedia } from '../../hooks/API/multimedia';
import styles from './index.module.css';

const Multimedia = () => {
  const params = useParams();
  const { ID } = params;
  const [media, setMedia] = useState({});
  const [episodes, setEpisodes] = useState({});
  const [isLoadingMedia, setIsLoadingMedia] = useState(true);

  useEffect(() => {
    setIsLoadingMedia(true);
    getOneMultimedia(ID)
      .then((data) => {
        const { multimedia, episodes } = data || {};
        setMedia(multimedia);
        setEpisodes(episodes);
      })
      .finally(() => setIsLoadingMedia(false));
  }, []);
  
console.log(media.Description?.S);

  return (
    <Grid container className={styles.container}>
      <Grid item xs={12}>
        {!isLoadingMedia && isEmpty(media) && <p>Try another ID! There is no media with ID {ID}</p>}
        {!isLoadingMedia && !isEmpty(media) && <BannerMultimedia src={media.images?.S} alt={media.Name?.S} />}
      </Grid>
      <Grid item xs={12}>
        <AboutInfo description={media.Description?.S} />
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
  );
};

export default Multimedia;
