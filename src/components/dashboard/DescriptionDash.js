import { Box } from "@mui/material"

const DescriptionDash = ({ fontSizeDescription, description }) => {

    return (
        <Box sx={{ fontSize: `${fontSizeDescription}`, marginTop: "0.7rem" }}>
            {description}
        </Box>
    )
}

export default DescriptionDash 