import { Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@emotion/react"

const VideoAdminInfo = ({ videoInfo, children }) => {
    const theme = useTheme();

    const { Title, State, Timestamp} = videoInfo;
    const date = new Date(parseFloat(Timestamp))

    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <Box sx={{ fontSize: "30pt" }}>{Title}</Box>

                    {State === "pending" && <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
                        The video still waiting for approval from admin
                    </Box>}
                </Typography>
                {children && children}
            </Grid>
            <Grid item sx={{ bottom: 0 }}>
                <Typography>
                    {State !== "rejected" ? <Box sx={{ color: theme.palette.yellow.main }}>
                        {date.toLocaleString()}
                    </Box> :
                        <Grid container direction="row" justifyContent="space-between">
                            <Box>author</Box>
                            <Box sx={{ color: theme.palette.yellow.main }}>
                                {date.toLocaleString()}
                            </Box>
                        </Grid>
                    }
                </Typography>
            </Grid>

        </Grid>
    )
}

export default VideoAdminInfo;