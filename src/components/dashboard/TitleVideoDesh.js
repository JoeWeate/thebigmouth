import { Box } from "@mui/material"

const TitleVideoDash = ({ title, fontSizeTitle }) => {
    return (
        <Box sx={{ fontSize: `${fontSizeTitle}` }}>{title}</Box>
    )
}

export default TitleVideoDash