import AboutInfo from "../../components/Page4/About/AboutInfo";
import VideoBanner from "../../components/Page4/PlaceholderVideo";
import Information from "../../components/Page4/Information";
import { getSingleEpisode } from "../../hooks/API/singleEpisode";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import queryString from "query-string";
import { Grid } from "@mui/material";
import configureAxios from "../../hooks/configureAxios"




function Episode() {


    const params = useParams();
    const { id, episode_id } = params;
    const [episode, setEpisode] = useState({});
    const { search } = useLocation();
    const { user, isLoading } = useAuth0();
    const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);
    const [status, setStatus] = useState(true)
    const parsedQuery = queryString.parse(search, { decodeURIComponent: (str) => str });
    const episodeID = parsedQuery.episode_id;
    const [media, setMedia] = useState({});
    const [loadingMedia, setLoadingMedia] = useState(true);
    console.log(id, episodeID);

    useEffect(() => {
        if (!isLoading && user) {
            setIsLoadingEpisode(true);
            getSingleEpisode(id, episodeID).then((data) => {
                const { episode } = data || {};
                console.log("data", data);
                setEpisode(episode);
                if (!episode.rating) {
                    setStatus(false)
                }
            }).then(() => setIsLoadingEpisode(false));
        }
    }, [isLoading]);


    useEffect(() => {
        const axios = configureAxios();
        axios.get(`/multimedia/${id}`)
            .then((response) => {
                const { multimedia } = response.data || {};
                setMedia((prevMedia) => ({
                    ...prevMedia,
                    ...multimedia,
                }));
            })
            .catch((error) => {
                console.log('Error fetching media:', error);
            })
            .finally(() => setLoadingMedia(false));
    }, []);


    return (

        <Grid container sx={{ minHeight: "100vh", width: "100vw", color: "white" }}>
            <Grid item xs={12}>
                {!isLoading && !isLoadingEpisode && isEmpty(episode) && (
                    <p>Try another ID! There is no Episode with ID {id} or {episodeID}</p>
                )}
                {!isLoadingEpisode && !isEmpty(episode) && (
                    <VideoBanner episode={episode} />
                )}
            </Grid>
            <Grid item xs={12}>
                {!isLoading && !isEmpty(episode) &&
                    <div>
                        <AboutInfo episode={episode.description} />
                        {/* <Information status={status} /> */}
                        {!loadingMedia && <Information
                            released={media.released?.N}
                            rated={media.rated?.N}
                            regionOfOrigin={media.region_of_origin?.S}
                            originalAudio={media.original_audio?.S}
                        />}
                    </div>
                }
            </Grid>
        </Grid>
    )
}

export default Episode;
