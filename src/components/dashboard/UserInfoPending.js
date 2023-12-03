import Divider from "../Divider"
import { Typography, Grid, Box } from "@mui/material";
import MyButton from "../Button";
import { useTheme } from "@emotion/react"
import { useState } from "react";
import DialogWindow from "./DialogWindow";
import { isEmpty } from "lodash";

const UserInfoPending = ({ videoInfo, setUpdateData, userRole }) => {

    const theme = useTheme();
    const [openEdit, setOpenEdit] = useState(false);
    const [openReject, setOpenReject] = useState(false)
    const dialogTextDescription = "If you would like to make changes to the details of the video you've shared, please fill in the form."
    const dialogTextDescriptionReject = "Prease describe the reason why you reject this video."

    const { Title, Description, State, Timestamp, Messages } = videoInfo;
    const date = new Date(parseFloat(Timestamp))

    const handleDelete = () => {
    }

    const handleSend = () => {
    }
    const handleClose = () => {
        setOpenEdit(false);
        setOpenReject(false)
    };

    const handleEditOpen = () => {
        setOpenEdit(true)
    }

    const handleRejectWindowOpen = () => {
        setOpenReject(true)
    }

    const handleApprove = () => {

    }

    const handleBlock = () => {

    }
    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ minHeight: { lg: "230px", md: "160px" } }}>
            <Grid item>
                <Typography>
                    <Box sx={{ fontSize: "30pt" }}>{Title}</Box>
                    <Divider sx={{ mt: "0.5rem" }} />
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
                            <MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" />
                        </>
                    }
                    {(State === "draft" && userRole === "User") && <>
                        <MyButton template="yellow" onClick={handleEditOpen} children="Edit" variant="contained" />
                        {openEdit && <DialogWindow setUpdateData={setUpdateData} videoInfo={videoInfo} openEdit={openEdit} setOpenEdit={setOpenEdit} handleClose={handleClose} titleDialog="Edit the video details" dialogTextDescription={dialogTextDescription} />}
                        <MyButton template="pink" onClick={handleDelete} children="Delete" variant="contained" />
                        <MyButton template="yellow" onClick={handleSend} children="Send" variant="outlined" />

                    </>}
                    {(State === "draft" && userRole === "Admin") && <>
                        <MyButton template="pink" onClick={handleRejectWindowOpen} children="Reject" variant="contained" />
                        {openReject && <DialogWindow setUpdateData={setUpdateData} videoInfo={videoInfo} setOpenReject={setOpenReject} openReject={openReject} handleClose={handleClose} titleDialog="Put reject message" dialogTextDescription={dialogTextDescriptionReject} />}
                        <MyButton template="yellow" onClick={handleApprove} children="Approve" variant="outlined" />
                        <MyButton template="pink" onClick={handleBlock} children="Block" variant="contained" />


                    </>}
                </Typography>
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

export default UserInfoPending