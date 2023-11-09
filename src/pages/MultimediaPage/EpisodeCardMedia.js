import {Box, CardMedia, useTheme} from "@mui/material";
import React from 'react';
import EpisodeCardMediaPlayBtn from "./EpisodeCardMediaPlayBtn";

const EpisodeCardMedia = ({episodeId, imageUrl}) => {
    const theme = useTheme();

    return (
        <Box
            id='epsodeCardMedia'
            sx={[{
                position: "relative",
                height: {
                    xs: 179,
                    md: 304,
                },
                "&:hover .pinkFrame": {
                    transform: "translate(-11px, 11px)",
                },
                "&:hover .yellowFrame": {
                    transform: "translate(11px, -11px)",
                },
                "&:hover #episodeCardPlayButton .pinkCircle circle": {
                    r: "40",
                },
                "&:hover #episodeCardPlayButton .pinkTriangle":  {
                            transform: "translate(-17px, -11px)",
                }
            }]}>
            <CardMedia
                component="img"
                alt={`Episode ${episodeId}`}
                sx={{
                    height: {
                        xs: 179,
                        md: 304,
                    },
                }}
                image={imageUrl}
            />
            {/* decorative overlay with button */}
            <Box
                className="yellowFrame"
                sx={{
                    position: "absolute",
                    top: "15px",
                    left: "25px",
                    bottom: "25px",
                    right: "15px",
                    background: "transparent",
                    border: "1px solid #C4FF00",
                    transition: `${theme.transitions.create(['transform'], {
                        duration: theme.transitions.duration.standard,
                    })}`,
                    width: {
                        xs: 277,
                        md: 500,
                    },
                    height: {
                        xs: 139,
                        md: 264,
                    },
                }}/>
            <Box
                className="pinkFrame"
                sx={{
                    position: "absolute",
                    top: "25px",
                    right: "25px",
                    bottom: "15px",
                    left: "15px",
                    background: "transparent",
                    border: "1px solid #E6007E",
                    transition: `${theme.transitions.create(['transform'], {
                        duration: theme.transitions.duration.standard,
                    })}`,
                    width: {
                        xs: 277,
                        md: 500,
                    },
                    height: {
                        xs: 139,
                        md: 264,
                    },
                }}/>
            <EpisodeCardMediaPlayBtn/>
        </Box>

    )
};
export default EpisodeCardMedia;