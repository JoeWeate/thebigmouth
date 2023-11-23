import Divider from "../Divider"
import { Typography, Grid } from "@mui/material";

const UserVideoInfoDashboard = ({ videoInfo }) => {
    const { author, title, description, date, message } = videoInfo;
    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <div style={{ fontSize: "20pt" }}>{title}</div>
                    <Divider sx={{ mt: "0.5rem" }} />
                    <div style={{ fontSize: "12pt", marginTop: "0.7rem" }}>{description}</div>
                    {message && <div>{message}</div>}
                </Typography>
            </Grid>
            <Grid item sx={{ bottom: 0 }}>
                <Typography>
                    <Grid container direction="row" justifyContent="space-between">
                        <div>{author}</div>
                        <div style={{ color: "#E8FC02" }}>{date}</div>
                    </Grid>
                </Typography>
            </Grid>

        </Grid>
    )
}

export default UserVideoInfoDashboard