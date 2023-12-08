import {ACTION_NAME, VIDEO_STATE} from "../../utils/constants";
import { Box } from "@mui/material";
import {useState} from "react";
import UpdateVideoStateButton from "../UpdateVideoStateButton";
import DialogWindow from "./DialogWindow";

const VideoActionsAdmin = ({ page, video, getUpdatedVideos }) => {
    const [openReject, setOpenReject] = useState(false)
    const dialogTextDescriptionReject = "Prease describe the reason why you reject this video."

    const handleClose = () => {
        setOpenReject(false)
    };

    const handleRejectWindowOpen = () => {
        setOpenReject(true)
    }

    return (
        <Box >
            {page === VIDEO_STATE.APPROVED && (
                <Box>
                    <UpdateVideoStateButton action={ACTION_NAME.BLOCK} videoData={video} getUpdatedVideos={getUpdatedVideos}/>
                </Box>
            )}
            {page === VIDEO_STATE.IN_REVIEW && (
                <Box>
                    <UpdateVideoStateButton action='OPEN_REJECT_FORM' videoData={video} getUpdatedVideos={getUpdatedVideos} onClick={handleRejectWindowOpen}/>
                    {openReject && <DialogWindow videoInfo={video} openReject={openReject} setOpenReject={setOpenReject} handleClose={handleClose} titleDialog="Reject message for Video" dialogTextDescription={dialogTextDescriptionReject} getUpdatedVideos={getUpdatedVideos}/>}
                    <UpdateVideoStateButton action={ACTION_NAME.APPROVE} videoData={video} getUpdatedVideos={getUpdatedVideos}/>
                    <UpdateVideoStateButton action={ACTION_NAME.BLOCK} videoData={video} getUpdatedVideos={getUpdatedVideos}/>
                </Box>
            )}
            {/*{page === VIDEO_STATE.BLOCKED && (*/}
            {/*    <Box>*/}
            {/*        <UpdateVideoStateButton action={ACTION_NAME.APPROVE} videoData={video}/>*/}
            {/*    </Box>*/}
            {/*)}*/}
        </Box>
    )
}

export default VideoActionsAdmin;