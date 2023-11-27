import Divider from "../Divider"
import { Typography, Grid, Box } from "@mui/material";
import MyButton from "../Button";
import { useTheme } from "@emotion/react"
import { useState } from "react";
import DialogWindow from "./DialogWindow";

const UserInfoPending = ({ videoInfo, state }) => {
    const theme = useTheme();
    const [openEdit, setOpenEdit] = useState(false);
    const dialogTextDescription = "If you would like to make changes to the details of the video you've shared, please fill in the form."

    const { author, title, description, date, message } = videoInfo;
    const handleDelete = () => {
    }

    const handleSend = () => {
    }
    const handleClose = () => {
        setOpenEdit(false);
    };

    const handleEditOpen = () => {
        setOpenEdit(true)
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
                            <MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" />
                        </>
                    }

                    {state === "draft" && <>
                        <MyButton template="yellow" onClick={handleEditOpen} children="Edit" variant="contained" />
                        {openEdit && <DialogWindow openEdit={openEdit} handleClose={handleClose} titleDialog="Edit the video details" dialogTextDescription={dialogTextDescription} />}
                        <MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" />
                        <MyButton template="yellow" onClick={handleSend} children="Send" variant="outlined" />

                    </>}
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