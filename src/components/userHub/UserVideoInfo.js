import {Box, Typography, useTheme} from "@mui/material";
import React from 'react';


const InfoRow = ({label, text, sx }) => {
    const theme = useTheme();
    return (
        <Box sx={{mb: 1}} >
            <Typography variant="p" component="span" sx={{display: 'inline-block', mr: 1, fontWeight: "normal"}} >{label}:</Typography>
            <Typography variant="p" component="span" color={theme.palette.text.secondary} sx={{...sx}}>{text}</Typography>
        </Box>
    )
}

const UserVideoInfo = ({videoInfo}) => {
const theme = useTheme();

const { author, title, description, date} = videoInfo;
    return (
        <Box sx={{display: "flex", flexDirection: "column", p: 2}}>
            <InfoRow label="Author" sx={{textTransform: "uppercase"}} text={author}/>
            <InfoRow label="Title"  text={title}/>
            <InfoRow label="Description" text={description}/>
            <Box sx={{mb: 1}} >
                <Typography variant="p" component="span" sx={{display: 'inline-block', mr: 1, fontWeight: "normal"}} >Date:</Typography>
                <Typography variant="p" component="time" color={theme.palette.text.secondary} datetime={date}>{date}</Typography>
            </Box>
        </Box>

    )
}

export default UserVideoInfo;