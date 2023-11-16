import {CardContent, Link, Paper, Typography} from "@mui/material";
import { Link as RouterLink} from 'react-router-dom';
import React from "react";
import EpisodeCardMedia from "./EpisodeCardMedia";


const EpisodeCard = ({episode}) => {

    const {EpisodeId, Image, Title, Description, SeriesId} = episode;

    return (
        <Link component={RouterLink} to={`/episode/${SeriesId}/${EpisodeId}`} underline="none" aria-label="To learn more, visit the Episode page which opens in a new window.">
            <Paper
                square={true}
                elevation={0}
                sx={{
                    flex: "1 1 317px",
                    width: {xs: "317px", md: "540px"},
                    backgroundColor: "inherit",
                    color: "white",
                    position: "relative",
                    paddingBottom: 3,
                }}>
                <EpisodeCardMedia episodeId={EpisodeId} imageUrl={Image}/>
                <CardContent
                    sx={{
                        padding: {
                            xs: "42px 0",
                            md: "47px 0"
                        },
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
                        {`EPISODE ${EpisodeId}`}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            fontSize: {
                                xs: 26,
                                md: 30
                            }
                        }}
                        component="h6">
                        {Title}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "normal",
                            fontSize: {
                                xs: 20,
                                md: 24
                            }
                        }}
                        component="p">
                        {Description}
                    </Typography>
                </CardContent>
            </Paper>
        </Link>
    );
};

export default EpisodeCard;
