import { Box } from "@mui/material"

const TitleVideoDash = ({ title, fontSizeTitle }) => {
    return (
        <Box sx={{ fontSize: `${fontSizeTitle}`, mt: "-0.5rem" }}>{title}</Box>
    )
}

export default TitleVideoDash