import AboutInfo from "../../components/Page4/About/AboutInfo";
import PlaceholderVideo from "../../components/Page4/PlaceholderVideo";
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

    const parsedQuery = queryString.parse(search, { decodeURIComponent: (str) => str });
    const episodeID = parsedQuery.episode_id;

    console.log(id, episodeID);


    useEffect(() => {
        if (!isLoading && user) {
            setIsLoadingEpisode(true);
            getSingleEpisode(id, episodeID).then((data) => {
                const { singleEpisode } = data || {};
                console.log("data", data);
                setEpisode(singleEpisode);
            }).then(() => setIsLoadingEpisode(false));
        }
    }, [isLoading, user, id, episodeID]);

    console.log("episode", episode)
    return (

        <Grid container sx={{ minHeight: "100vh", width: "100vw", color: "white" }}>
            <Grid item xs={12}>
                {!isLoading && !isLoadingEpisode && isEmpty(episode) && (
                    <p>Try another ID! There is no Episode with ID {id} or {episodeID}</p>
                )}
                {!isLoadingEpisode && !isEmpty(episode) && (
                    <PlaceholderVideo episode={episode} />
                )}
            </Grid>
            <Grid item xs={12}>
                {!isLoading && !isEmpty(episode) && <AboutInfo episode={episode} />}
            </Grid>
            <Grid item xs={12}>
                {!isLoading && !isEmpty(episode) && <Information episode={episode} />}
            </Grid>
        </Grid>
    )
}

export default Episode;
