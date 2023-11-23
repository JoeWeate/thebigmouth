import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"
const RestrictedMessage = () => {
    const theme = useTheme()
    return (
        <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
            The video was restricted !
        </Box>
    )
}

export default RestrictedMessage