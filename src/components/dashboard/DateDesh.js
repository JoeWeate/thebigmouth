import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"

const DateDash = ({ date }) => {
    const theme = useTheme();
    return (
        <Box sx={{ color: theme.palette.yellow.main }}>
            {date}
        </Box>)
}

export default DateDash