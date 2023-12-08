import { Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@emotion/react"
import { isEmpty } from "lodash";

const VideoUserInfo = ({ videoInfo, userRole, children }) => {
    const theme = useTheme();

    const { Title, Description, State, Timestamp, Messages } = videoInfo;
    const date = new Date(parseFloat(Timestamp))

    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <Box sx={{ fontSize: "30pt" }}>{Title}</Box>

                    {State === "pending" && <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
                        The video still waiting for approval from admin
                    </Box>}
                    {State === "draft" && <Box sx={{ fontSize: "12pt", marginTop: "0.7rem" }}>
                        {Description}
                    </Box>}
                    {(Messages && !isEmpty(Messages) && userRole === "User") && <Box sx={{ padding: "1rem", border: "solid 1px", borderColor: theme.palette.pink.main, backgroundColor: "black", mt: "0.5rem", mb: "0.5rem" }}>
                        {Messages}
                    </Box>}
                    {(State === "rejected" && userRole === "User") &&
                        <>
                            <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
                                The video was restricted !
                            </Box>
                            <Box sx={{ padding: "1rem", border: "solid 1px", borderColor: theme.palette.pink.main, backgroundColor: "black", mt: "0.5rem", mb: "0.5rem" }}>
                                {Messages}
                            </Box>
                        </>
                    }
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

export default VideoUserInfo