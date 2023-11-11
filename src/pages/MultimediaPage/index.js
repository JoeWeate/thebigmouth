import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {isEmpty} from "lodash";
import {getMultimedia, getOneMultimedia} from "../../api/multimedia";
import BannerMultimedia from "./BannerMultimedia";
import AboutInfo from "../../components/AboutInfo";
import Information from "./Information";
import ScrollMultimedia from "./ScrollMultimedia";
import {Link} from "react-router-dom";
import VideoSection from "../HomePage/VideoSection";

const MultimediaPage = () => {
    const params = useParams();
    const {ID} = params;
    const [media, setMedia] = useState({});
    const [mediaList, setMediaList] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [isLoadingMedia, setIsLoadingMedia] = useState(true);

    useEffect(() => {
        setIsLoadingMedia(true);
        try {
            getOneMultimedia(ID).then(data => {
                setMedia(data.multimedia);
                setEpisodes(data.episodes);
            });
        } catch (error) {
            console.log({error});
        } finally {
            setIsLoadingMedia(false);
        }
    }, [])

    useEffect(() => {
        setIsLoadingMedia(true);
        try {
            getMultimedia().then(data => {
                setMediaList(data.multimedia)
            });
        } catch (error) {
            console.log({error});
        } finally {
            setIsLoadingMedia(false);
        }
    }, [])


    return (
        <Grid
            container
            sx={{backgroundColor: "#2B2B2B",}}
        >
            {isLoadingMedia && isEmpty(media) && (
                <Grid item xs={12} sx={{padding: "2rem"}}>
                    <Typography sx={{color: "white"}} variant="h5" component='p'>Data is loading...</Typography>
                </Grid>
            )}
            {!isLoadingMedia && isEmpty(media) && (
                <Grid item xs={12} sx={{padding: "2rem"}}>
                    <Typography sx={{color: "white"}} variant="h5" component='p'>Try another ID! There is no media with ID {ID}</Typography>
                </Grid>
            )}
            {!isLoadingMedia && !isEmpty(media) && (
                <>
                    <Grid item xs={12}>
                        <BannerMultimedia src={media.Images} alt={media.Name}/>
                    </Grid>
                    <Grid item xs={12}>
                        <AboutInfo episode={media.Description}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={`/episode/${media.ID}?episode_id=S01E01`}>
                            <ScrollMultimedia episodes={episodes} seriesId={media.ID}/>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Information
                            released={media.Released}
                            rated={media.Rated}
                            regionOfOrigin={media.RegionOfOrigin}
                            originalAudio={media.OriginalAudio}
                        />
                    </Grid>
                    {!isEmpty(mediaList) && (
                        <Grid item xs={12}>
                            <VideoSection sectionTitle="Related" multimediaData={mediaList}/>
                        </Grid>
                    )}
                </>
            )}
        </Grid>
    );
};

export default MultimediaPage;
