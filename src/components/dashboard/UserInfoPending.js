import Divider from "../Divider"
import { Typography, Grid } from "@mui/material";
import TitleVideoDash from "./TitleVideoDesh";
import DescriptionDash from "./DescriptionDash";
import Message from "./Message";
import DateDash from "./DateDesh";
import AuthorDash from "./AuthorDash";
import StillPending from "./StillPending";

const UserInfoPending = ({ videoInfo, state }) => {
    const { author, title, description, date, message } = videoInfo;
    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <TitleVideoDash title={title} fontSizeTitle="30pt" />
                    <Divider sx={{ mt: "0.5rem" }} />
                    {state === "pending" && <StillPending />}
                    {state == "draft" && <DescriptionDash fontSizeDescription="12pt" description={description} />}

                    {message && <Message message={message} />}
                </Typography>
            </Grid>
            <Grid item sx={{ bottom: 0 }}>
                <Typography>
                    <Grid container direction="row" justifyContent="space-between">
                        <AuthorDash author={author} />
                        <DateDash date={date} />
                    </Grid>
                </Typography>
            </Grid>

        </Grid>
    )
}

export default UserInfoPending