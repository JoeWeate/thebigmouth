import {ACTION_NAME, VIDEO_STATE} from "../../utils/constants";
import { Box } from "@mui/material";
import {useState} from "react";
import UpdateVideoStateButton from "../UpdateVideoStateButton";
import DialogWindow from "./DialogWindow";

const VideoActionsUser = ({ page, video, getUpdatedUsersVideos }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const dialogTextDescription = "If you would like to make changes to the details of the video you've shared, please fill in the form."

    const handleClose = () => {
        setOpenEdit(false);
    };

    const handleEditOpen = () => {
        setOpenEdit(true)
    }

    return (
        <Box >
            {page === VIDEO_STATE.DRAFT && (
                <Box>
                    <UpdateVideoStateButton action="OPEN_EDIT_FORM" videoData={video} getUpdatedVideos={getUpdatedUsersVideos} onClick={handleEditOpen}/>
                    {openEdit && <DialogWindow videoInfo={video} openEdit={openEdit} setOpenEdit={setOpenEdit} handleClose={handleClose} titleDialog="Edit the video details" dialogTextDescription={dialogTextDescription} getUpdatedVideos={getUpdatedUsersVideos}/>}
                    <UpdateVideoStateButton action={ACTION_NAME.SEND_FOR_REVIEW} videoData={video} getUpdatedVideos={getUpdatedUsersVideos}/>
                    <UpdateVideoStateButton action={ACTION_NAME.DELETE} videoData={video} getUpdatedVideos={getUpdatedUsersVideos}/>
                </Box>
            )}
            {page === VIDEO_STATE.IN_REVIEW && (
                <Box>
                    <UpdateVideoStateButton action={ACTION_NAME.MOVE_TO_DRAFT} videoData={video} getUpdatedVideos={getUpdatedUsersVideos}/>
                </Box>
            )}
            {page === VIDEO_STATE.APPROVED && (
                <Box>
                    <UpdateVideoStateButton action={ACTION_NAME.MOVE_TO_DRAFT} videoData={video} getUpdatedVideos={getUpdatedUsersVideos}/>
                </Box>
            )}
        </Box>
    )
}

export default VideoActionsUser;