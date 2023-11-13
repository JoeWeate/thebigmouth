import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {isEmpty} from "lodash";
import {getMultimedia, getOneMultimedia} from "../../api/multimedia";
import BannerMultimedia from "./BannerMultimedia";
import AboutInfo from "../../components/AboutInfo";
import EmptyState from "./EmptyState";
import Information from "./Information";
import Loader from "./Loader";
import PageContainer from "./PageContainer";
import ScrollMultimedia from "./ScrollMultimedia";
import VideoSection from "../HomePage/VideoSection";

const MultimediaPage = () => {
    const params = useParams();
    const {ID} = params;
    const [media, setMedia] = useState({});
    const [mediaList, setMediaList] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [isLoadingMedia, setIsLoadingMedia] = useState(true);
    const [isLoadingMediaList, setIsLoadingMediaList] = useState(true);

    useEffect(() => {
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
        try {
            getMultimedia().then(data => {
                setMediaList(data.multimedia)
            });
        } catch (error) {
            console.log({error});
        } finally {
            setIsLoadingMediaList(false);
        }
    }, []);

    if (isLoadingMedia && isEmpty(media)) {
        return (
            <PageContainer>
                <Grid item xs={12} sx={{padding: "2rem"}}>
                    <Loader/>
                </Grid>
            </PageContainer>
        )
    }

    if (!isLoadingMedia && isEmpty(media)) {
        return (
            <PageContainer>
                <Grid item xs={12} sx={{padding: "2rem"}}>
                    <EmptyState>Try another ID! There is no media with ID {ID}</EmptyState>
                </Grid>
            </PageContainer>
        )
    }

    if (!isLoadingMedia && !isEmpty(media)) {
        return (
            <PageContainer>
                <Grid item xs={12}>
                    <BannerMultimedia src={media.Images} alt={media.Name}/>
                </Grid>
                <Grid item xs={12}>
                    <AboutInfo episode={media.Description}/>
                </Grid>
                <Grid item xs={12}>
                    <ScrollMultimedia episodes={episodes} seriesId={ID}/>
                </Grid>
                <Grid item xs={12}>
                    <Information
                        released={media.Released}
                        rated={media.Rated}
                        regionOfOrigin={media.RegionOfOrigin}
                        originalAudio={media.OriginalAudio}
                    />
                </Grid>
                {isLoadingMediaList && isEmpty(mediaList) && (
                    <Grid item xs={12}>
                        <Loader/>
                    </Grid>
                )}
                {!isLoadingMediaList && !isEmpty(mediaList) && (
                    <Grid item xs={12}>
                        <VideoSection sectionTitle="Related" multimediaData={mediaList}/>
                    </Grid>
                )}
            </PageContainer>
        )
    }
};

export default MultimediaPage;
