import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { isEmpty } from "lodash";
import { getMultimedia, getOneMultimedia } from "../../api/multimedia";
import BannerMultimedia from "./BannerMultimedia";
import AboutInfo from "../../components/AboutInfo";
import EmptyState from "./EmptyState";
import EpisodesAccordion from "./EpisodesAccordion";
import Information from "../../components/Information";
import Loader from "./Loader";
import SectionContent from "../../components/SectionContent";
import MediaCard from "../../components/MediaCardList";

const MultimediaPage = () => {
    const params = useParams();
    const targetRef= useRef(null);
    const {ID} = params;
    const [media, setMedia] = useState(null);
    const [mediaList, setMediaList] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const [seasons, setSeasons] = useState([]);

    const getSeasonNumbersSetFromEpisodes = (episodesList) => {
        const seasonsSet = new Set();
        episodesList.forEach((episode) => {
            seasonsSet.add(episode.SeasonNumber);
        });
        return [...seasonsSet];
    }

    const getEpisodesBySeasonNumber = (episodesList, seasonSet) => {
        const episodesObj = {};
        seasonSet.forEach(s => {
            episodesObj[s] = episodesList.filter(e => e.SeasonNumber === s);
        });
        return episodesObj;
    }


    useEffect(() => {
        try {
            getOneMultimedia(ID).then(data => {
                setMedia(data.multimedia);
                if(data.episodes) {
                    const seasonsSet = getSeasonNumbersSetFromEpisodes(data.episodes);
                    const episodesObj = getEpisodesBySeasonNumber(data.episodes, seasonsSet);
                    setSeasons(seasonsSet);
                    setEpisodes(episodesObj);
                }
            });
        } catch (error) {
            console.log({error});
        }
    }, [ID])

    useEffect(() => {
        try {
            getMultimedia().then(data => {
                setMediaList(data.multimedia)
            });
        } catch (error) {
            console.log({error});
        }
    }, [ID]);

    if (media === null) {
        return (
            <SectionContent>
                <Grid item xs={12} sx={{ padding: "2rem" }}>
                    <Loader />
                </Grid>
            </SectionContent>
        )
    }

    if (isEmpty(media)) {
        return (
            <SectionContent >
                <Grid item xs={12} sx={{ padding: "2rem" }}>
                    <EmptyState>Try another ID! There is no media with ID {ID}</EmptyState>
                </Grid>
            </SectionContent>
        )
    }

    if (!isEmpty(media)) {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <BannerMultimedia src={media.Images} alt={media.Name} targetRef={targetRef}/>
                </Grid>

                 <AboutInfo episode={media.Description} targetRef={targetRef}/>

                {episodes && !isEmpty(episodes) && seasons && !isEmpty(seasons) && (
                    <Grid item xs={12}>
                        <EpisodesAccordion episodes={episodes} seasons={seasons}/>
                    </Grid>
                )}
                {episodes && !isEmpty(episodes) && seasons && !isEmpty(seasons) && (
                    seasons.map((s, index) => (
                        <Grid item xs={12} key={s}>
                            <EpisodesAccordion episodes={episodes[s]} seasonNumber={s} expanded={index === 0}/>
                        </Grid>
                    ))
                )}
                <Grid item lg={11.5} xs={12} justifySelf="center">
                    <Information
                        released={media.Released}
                        rated={media.Rated}
                        regionOfOrigin={media.RegionOfOrigin}
                        originalAudio={media.OriginalAudio}
                    />
                </Grid>
                {mediaList === null && (
                    <Grid item xs={12}>
                        <Loader />
                    </Grid>
                )}

                {!isEmpty(mediaList) && (
                    <SectionContent sx={{marginTop: "2rem"}}>
                        <MediaCard sectionTitle="Related" multimediaData={mediaList} />
                    </SectionContent>
                )
                }
            </Grid >
        )
    }
};

export default MultimediaPage;
