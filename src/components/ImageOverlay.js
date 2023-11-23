import { Box } from "@mui/material";
import React from 'react';

const ImageOverlay = ({hover, opacity = 0.3}) => {

    return (
        <Box
            sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            opacity: hover ? opacity  : 0,
            transition: "0.3s ease",
            backgroundColor: "#000",
            zIndex: '1',
            pointerEvents: "none",
        }}>
        </Box>
    )
};
export default ImageOverlay;