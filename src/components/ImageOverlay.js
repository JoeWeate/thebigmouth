import { Box } from "@mui/material";
import React from 'react';

const ImageOverlay = () => {

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
            opacity: 0,
            transition: "0.3s ease",
            backgroundColor: "#000",
            zIndex: '1',
                "&:hover": {
                    opacity: "0.3",
                }
        }}>

        </Box>
    )
};
export default ImageOverlay;