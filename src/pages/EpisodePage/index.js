import { getOneEpisode } from "../../api/episodes";
import { episodeInfoMocks, videoUrlMocks } from "../../api/mocks";
import { getMultimedia } from "../../api/multimedia";
import AboutInfo from "../../components/AboutInfo";
import MediaCardList from "../../components/MediaCardList";
import SectionContent from "../../components/SectionContent";
import EmptyState from "../MultimediaPage/EmptyState";
import Information from "../../components/Information";
import Loader from "../MultimediaPage/Loader";
import VideoBanner from "../../components/VideoBanner";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { Grid, } from "@mui/material";

function EpisodePage() {
    const params = useParams();
    const { SeriesId, EpisodeId } = params;
    const [episode, setEpisode] = useState(null);
    const [mediaList, setMedialist] = useState(null);
    const [error, setError] = useState(null);

    const targetRef = useRef(null);

    useEffect(() => {
        getOneEpisode({ SeriesId, EpisodeId })
            .then(data => {
                setEpisode(data.episode)
            })
            .catch(error => {
                setError(error)
            });

        getMultimedia()
            .then(data => {
                setMedialist(data.multimedia);
            });
    }, []);

    if (!error && episode === null) {
        return (
            <SectionContent>
                <Grid item xs={12} sx={{ padding: "2rem" }}>
                    <Loader />
                </Grid>
            </SectionContent>
        )
    }

    if (error || isEmpty(episode)) {
        return (
            <SectionContent>
                <Grid item xs={12} sx={{ padding: "2rem" }}>
                    <EmptyState>Sorry!There is no any data for this Episode</EmptyState>
                </Grid>
            </SectionContent>
        )
    }

    if (episode && !isEmpty(episode)) {
        const { Released, Rated, RegionOfOrigin, OriginalAudio } = episodeInfoMocks;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <VideoBanner videoUrl={episode.URL} videoImg={episode.Image} targetRef={targetRef}
                        title={episode.Title} />
                </Grid>
                <Grid item xs={12}>
                    <AboutInfo episode={episode.Description} targetRef={targetRef} title={episode.Name} />
                </Grid>
                <Grid item xs={12}>
                    <Information
                        released={Released}
                        rated={Rated}
                        regionOfOrigin={RegionOfOrigin}
                        originalAudio={OriginalAudio}
                    />
                </Grid>

                {mediaList === null && (
                    <Grid item xs={12}>
                        <Loader />
                    </Grid>
                )}
                {!isEmpty(mediaList) && (
                    <SectionContent sx={{ marginTop: "2rem", paddingRight: { xs: 0, md: 0 } }}>
                        <MediaCardList sectionTitle="Related" multimediaData={mediaList} />
                    </SectionContent>
                )
                }
            </Grid>
        )
    }
}

export default EpisodePage;