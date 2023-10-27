import AboutInfo from "../../components/Page4/About/AboutInfo";
import PlaceholderVideo from "../../components/Page4/PlaceholderVideo";
import Information from "../../components/Page4/Information";
import { getSingleEpisode } from "../../hooks/API/singleEpisode";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { isEmpty } from "lodash";


function Episode() {
    const params = useParams();
    const { id, episode_id } = params;
    const [episode, setEpisode] = useState({});
    const location = useLocation();
    const { user, isLoading } = useAuth0();
    const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);
    console.log(id, episode_id, location);



    useEffect(() => {
        if (!isLoading && user) {
            getSingleEpisode(id, episode_id).then((data) => {
                const { SingleEpisode } = data || {};
                setIsLoadingEpisode(true);
                setEpisode(SingleEpisode);
                console.log("data", data)
            }).then(() => setIsLoadingEpisode(false));
        }
    }, [isLoading, user, id, episode_id]);



    return (
        <div>

            {!isLoading && !isLoadingEpisode && isEmpty(episode) && (
                <p>Try another ID! There is no Episode with ID {id} or {episode_id}</p>
            )}
            {!isLoadingEpisode && !isEmpty(episode) && (
                <PlaceholderVideo episode={episode} />
            )}
            {!isLoading && !isEmpty(episode) && <AboutInfo episode={episode} />}
            {!isLoading && !isEmpty(episode) && <Information episode={episode} />}
        </div>
    );
}

export default Episode;
