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
    }, [isLoading, user, id, episodeID]);


    return (

        <Grid container sx={{ minHeight: "100vh", width: "100vw", color: "white" }}>
            <Grid item xs={12}>
                {!isLoading && !isLoadingEpisode && isEmpty(episode) && (
                    <p>Try another ID! There is no Episode with ID {id} or {episodeID}</p>
                )}
                {!isLoadingEpisode && !isEmpty(episode) && (
                    <VideoBanner image={episode.image} />
                )}
            </Grid>
            <Grid item xs={12}>
                {!isLoading && !isEmpty(episode) &&
                    <div>

                        <AboutInfo description={episode.description} />
                        <Information status={status} />
                    </div>
                }
            </Grid>
        </Grid>
    )
}

export default Episode;
