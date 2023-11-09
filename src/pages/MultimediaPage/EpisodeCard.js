import { CardContent,  Paper, Typography} from "@mui/material";
import React from "react";
import EpisodeCardMedia from "./EpisodeCardMedia";


const EpisodeCard = ({episode}) => {

    return (
        <Paper
            square={true}
            elevation={0}
            sx={{
                flex: "1 1 317px",
                width: {xs: "317px", md: "540px"},
                backgroundColor: "inherit",
                color: "white",
                position: "relative"
            }}>
            <EpisodeCardMedia episodeId={episode.episode_id} imageUrl={episode.image}/>
            <CardContent
                sx={{
                    padding: {
                        xs: "42px 0",
                        md: "47px 0"
                    }
                }}>
                <Typography
                    gutterBottom
                    component="h5"
                    sx={{
                        fontWeight: "normal",
                        fontSize: {
                            xs: 18,
                            md: 22
                        },
                    }}>
                    {`EPISODE ${episode.episode_id}`}
                </Typography>
                <Typography
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontSize: {
                            xs: 26,
                            md: 30
                        }}}
                    component="h6">
                    {episode.title}
                </Typography>
                <Typography
                    sx={{
                    fontWeight: "normal",
                    fontSize: {
                        xs: 20,
                        md: 24
                    }}}
                    component="p">
                    {episode.description}
                </Typography>
            </CardContent>
        </Paper>
    );
};

export default EpisodeCard;
