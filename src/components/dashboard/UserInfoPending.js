import Divider from "../Divider"
import { Typography, Grid } from "@mui/material";
import TitleVideoDash from "./TitleVideoDash";
import DescriptionDash from "./DescriptionDash";
import Message from "./Message";
import DateDash from "./DateDash";
import AuthorDash from "./AuthorDash";
import StillPending from "./StillPending";
import MyButton from "../Button";
import RestrictedMessage from "./RestrctedMessage";

const UserInfoPending = ({ videoInfo, state }) => {
    const { author, title, description, date, message } = videoInfo;
    const handleDelete = () => {
    }

    const handleSend = () => {
    }
    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <TitleVideoDash title={title} fontSizeTitle="30pt" />
                    <Divider sx={{ mt: "0.5rem" }} />
                    {state === "pending" && <StillPending />}
                    {state === "draft" && <DescriptionDash fontSizeDescription="12pt" description={description} />}
                    {state === "restricted" &&
                        <>
                            <RestrictedMessage />
                            <Message message={message} />
                        </>
                    }
                    {state !== "restricted" &&
                        <span>
                            <MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" />
                        </span>}
                    {state === "draft" && <MyButton template="yellow" onClick={handleSend} children="Send" variant="outlined" />}
                </Typography>
            </Grid>
            <Grid item sx={{ bottom: 0 }}>
                <Typography>
                    {state !== "restricted" ? <DateDash date={date} /> :
                        <Grid container direction="row" justifyContent="space-between">
                            <AuthorDash author={author} />
                            <DateDash date={date} />
                        </Grid>
                    }
                </Typography>
            </Grid>

        </Grid>
    )
}

export default UserInfoPending