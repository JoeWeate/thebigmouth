import React from "react";
import {Box, useTheme} from "@mui/material";

const VideoDecor = ({containerStyles, hover}) => {
const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            cursor: "pointer",
            ...containerStyles}}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "15px",
                    left: "25px",
                    bottom: "25px",
                    right: "15px",
                    background: "transparent",
                    border: `1px solid ${theme.palette.yellow.main}`,
                    transition: `${theme.transitions.create(['transform'], {
                        duration: theme.transitions.duration.standard,
                    })}`,
                    width: "calc(100% - 40px)",
                    height: "calc(100% - 40px)",
                    zIndex: '2',
                    pointerEvents: 'none',
                    transform: hover ? "translate(11px, -11px)" : "translate(0, 0)",
                }}/>
            <Box
                sx={{
                    position: "absolute",
                    top: "25px",
                    right: "25px",
                    bottom: "15px",
                    left: "15px",
                    background: "transparent",
                    border: `1px solid ${theme.palette.pink.main}`,
                    transition: `${theme.transitions.create(['transform'], {
                        duration: theme.transitions.duration.standard,
                    })}`,
                    width: "calc(100% - 40px)",
                    height: "calc(100% - 40px)",
                    zIndex: '2',
                    pointerEvents: 'none',
                    transform: hover ? "translate(-11px, 11px)" : "translate(0, 0)",
            }}/>
        </Box>
    );
}

export default VideoDecor;