import React from "react";
import { Grid } from "@mui/material";
import EpisodeCard from "./EpisodeCard";


const EpisodeCardsList = ({episodes}) => {
    return (
            <Grid container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                overflowX: "auto",
                columnGap: {xs: 3, md: 6},
                marginRight:{xs: -4, md: -12},
                paddingRight:{xs: 4, md: 12},
            }}>
                {episodes.map((episode) => (
                    <Grid item key={episode.EpisodeId} sx={{flex: '0 0 auto'}}>
                        <EpisodeCard episode={episode}/>
                    </Grid>
                ))}
            </Grid>
    )
};

export default EpisodeCardsList;
