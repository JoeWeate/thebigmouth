import AboutInfo from "../../components/AboutInfo";
import VideoBanner from "./PlaceholderVideo";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import queryString from "query-string";
import { Grid, } from "@mui/material";
import configureAxios from "../../api/configureAxios";

function EpisodePage() {
  const params = useParams();
  const { id } = params;
  const [episode, setEpisode] = useState({});
  const { search } = useLocation();
  const { user, isLoading } = useAuth0();
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(true);
  const [status, setStatus] = useState(true);
  const parsedQuery = queryString.parse(search, {
    decodeURIComponent: (str) => str,
  });
  const episodeID = parsedQuery.episode_id;
  const [media, setMedia] = useState({});
  const [loadingMedia, setLoadingMedia] = useState(true);

  useEffect(() => {
    const axios = configureAxios();
    axios
      .get(`/episodes/${id}`, { params: { episode_id: episodeID } })
      .then((data) => {
        const newEpisode = data.data.episode;
        setEpisode(newEpisode);
        setIsLoadingEpisode(false)
      })
      .catch((error) => {
        console.log("Error fetching Episode:", error);
      })
      .finally(() => setLoadingMedia(false));
  }, [id, episodeID]);

  return (
    <Grid container sx={{ minHeight: "100vh", width: "100vw", color: "white" }}>
      <Grid item xs={12}>
        {!isLoading && !isLoadingEpisode && isEmpty(episode) && (
          <p>
            Try another ID! There is no Episode with ID {id} or {episodeID}
          </p>
        )}
        {!isLoadingEpisode && !isEmpty(episode) && (
          <VideoBanner episode={episode} />
        )}
        </Grid>
        <Grid item xs={12}>
        {!isLoading && !isEmpty(episode) && (
          <div>
            <AboutInfo episode={episode.description} />
          </div>
        )}
        </Grid>
    </Grid>
  );
}

export default EpisodePage;