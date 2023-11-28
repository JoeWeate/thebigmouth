import Divider from "../Divider"
import { Typography, Grid, Box } from "@mui/material";
import MyButton from "../Button";
import { useTheme } from "@emotion/react"

const UserInfoPending = ({ videoInfo, state }) => {
    const theme = useTheme();

    const { author, title, description, date, message } = videoInfo;
    const handleDelete = () => {
    }

    const handleSend = () => {
    }
    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <Box sx={{ fontSize: "30pt" }}>{title}</Box>
                    <Divider sx={{ mt: "0.5rem" }} />
                    {state === "pending" && <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
                        The video still waiting for approval from admin
                    </Box>}
                    {state === "draft" && <Box sx={{ fontSize: "12pt", marginTop: "0.7rem" }}>
                        {description}
                    </Box>}
                    {state === "rejected" &&
                        <>
                            <Box sx={{ color: theme.palette.pink.main, fontSize: "16pt", mt: "0.5rem" }}>
                                The video was restricted !
                            </Box>
                            <Box sx={{ padding: "1rem", border: "solid 1px", borderColor: theme.palette.pink.main, backgroundColor: "black", mt: "0.5rem", mb: "0.5rem" }}>
                                {message}
                            </Box>
                        </>
                    }
                    {state &&
                        <span>
                            <MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" />
                        </span>}
                    {state === "draft" && <MyButton template="yellow" onClick={handleSend} children="Send" variant="outlined" />}
                </Typography>
            </Grid>
            <Grid item sx={{ bottom: 0 }}>
                <Typography>
                    {state !== "rejected" ? <Box sx={{ color: theme.palette.yellow.main }}>
                        {date}
                    </Box> :
                        <Grid container direction="row" justifyContent="space-between">
                            <Box>{author}</Box>
                            <Box sx={{ color: theme.palette.yellow.main }}>
                                {date}
                            </Box>
                        </Grid>
                    }
                </Typography>
            </Grid>

        </Grid>
    )
}

export default UserInfoPending