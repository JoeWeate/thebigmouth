import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

const Message = ({ message }) => {
    const theme = useTheme();
    return (
        <Box sx={{ padding: "1rem", border: "solid 1px", borderColor: theme.palette.pink.main, backgroundColor: "black", mt: "0.5rem", mb: "0.5rem" }}>
            {message}
        </Box>
    )

}

export default Message