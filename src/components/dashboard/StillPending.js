import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"

const StillPending = () => {
    const theme = useTheme()
    return (
        <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
            The video still waiting for approval from admin
        </Box>
    )
}

export default StillPending