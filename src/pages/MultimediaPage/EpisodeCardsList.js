import React from "react";
import {Grid, Typography} from "@mui/material";
import EpisodeCard from "./EpisodeCard";

const EpisodeCardsList = ({episodes, seriesId}) => {
    return (
        <>
            <Typography
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: {
                        xs: 26,
                        md: 30
                    }
                }}
                component="h6"
                px={{xs: 3, md: 12}}>
                Season {seriesId}
            </Typography>
            <Grid container px={{xs: 3, md: 12}} sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                overflowX: "auto"
            }} columnSpacing={{xs: 3, md: 6}} my={{xs: 3, md: 6}}>
                {episodes.map((episode) => (
                    <Grid item key={episode.EpisodeId} sx={{flex: '0 0 auto'}}>
                        <EpisodeCard episode={episode}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
};

export default EpisodeCardsList;
