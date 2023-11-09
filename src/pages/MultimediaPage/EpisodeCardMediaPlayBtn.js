import {SvgIcon, useTheme} from "@mui/material";
import React from 'react';

const EpisodeCardMediaPlayBtn = () => {
    const theme = useTheme();

    return (
        <SvgIcon
            id="episodeCardPlayButton"
            sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: {
                xs: 59,
                md: 100,
            },
            width: {
                xs: 59,
                md: 100,
            },
            "& .pinkCircle circle": {
                transition: `${theme.transitions.create(['r'], {
                duration: theme.transitions.duration.standard,
                })}`,
            },
            "& .pinkTriangle": {
                transition: `${theme.transitions.create(['transform'], {
                    duration: theme.transitions.duration.standard,
                })}`,
            }
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" >
                <path d="M43.941,7.324A36.618,36.618,0,1,1,7.324,43.941,36.659,36.659,0,0,1,43.941,7.324Zm0-7.324A43.941,43.941,0,1,0,87.883,43.941,43.943,43.943,0,0,0,43.941,0ZM32.956,62.25V25.632L65.912,44.476Z" transform="translate(6.322 6.322)" fill="#e8fc02"/>
                <path className="pinkTriangle" d="M57.344,81.218V44.6L90.3,63.444Z" transform="translate(-22.286 -18.345)" fill="none" stroke="#e6007e" stroke-width="2"/>
                <g className='pinkCircle' fill="none" stroke="#e6007e" stroke-width="2">
                    <circle cx="50" cy="50" r="50" stroke="none"/>
                    <circle cx="50" cy="50" r="49" fill="none"/>
                </g>
            </svg>
        </SvgIcon>
    )
};
export default EpisodeCardMediaPlayBtn;