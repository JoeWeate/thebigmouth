import {Box, CardMedia} from "@mui/material";
import React from 'react';
import ImageOverlay from "../../components/ImageOverlay";
import VideoDecor from "../../components/userHub/VideoDecor";
import VideoPlayBtn from "../../components/VideoPlayBtn";

const EpisodeCardMedia = ({episodeId, imageUrl}) => {
    const [hover, setHover] = React.useState(false);

    return (
        <Box
            id='epsodeCardMedia'
            sx={{
                position: "relative",
                height: {
                    xs: 179,
                    md: 304,
                },
            }}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
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
            <ImageOverlay hover={hover}/>
            <VideoDecor hover={hover}/>
            <VideoPlayBtn sx={{pointerEvents: 'none', zIndex: '3' }} hover={hover}/>
        </Box>

    )
};
export default EpisodeCardMedia;