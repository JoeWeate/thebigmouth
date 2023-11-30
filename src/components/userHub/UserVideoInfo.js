import { Box, Typography, useTheme } from "@mui/material";
import React from 'react';


const InfoRow = ({ label, text, sx }) => {
    const theme = useTheme();
    return (
        <Box sx={{ mb: 1 }} >
            <Typography variant="p" component="span" sx={{ display: 'inline-block', mr: 1, fontWeight: "normal" }} >{label}:</Typography>
            <Typography variant="p" component="span" color={theme.palette.text.secondary} sx={{ ...sx }}>{text}</Typography>
        </Box>
    )
}

const UserVideoInfo = ({ videoInfo }) => {
    const theme = useTheme();
    const { author, Title, Description, Timestamp } = videoInfo;
    const date = new Date(Timestamp);
    const formattedDate = date.toLocaleString();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
            <InfoRow label="Author" sx={{ textTransform: "uppercase" }} text={author} />
            <InfoRow label="Title" text={Title} />
            <InfoRow label="Description" text={Description} />
            <Box sx={{ mb: 1 }} >
                <Typography variant="p" component="span" sx={{ display: 'inline-block', mr: 1, fontWeight: "normal" }} >Date:</Typography>
                <Typography variant="p" component="time" color={theme.palette.text.secondary} datetime={formattedDate}>{formattedDate}</Typography>
            </Box>
        </Box>

    )
}

export default UserVideoInfo;