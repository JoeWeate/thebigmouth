import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {apiDeleteVideo, apiUpdateVideo, uploadVideo} from "../api/videos";
import Snackbar from "../components/Snackbar";
import {routes} from "../routes";
import {ACTION_NAME} from "../utils/constants";
import {validateChangeState} from "../utils/validateChangeState";
import {MyContext} from "../App";
import Button from "../components/Button";
import {BUTTON_TEMPLATE, BUTTON_VARIANT} from "./Button";


export const VIDEO_ACTION_BUTTONS = {
    [ACTION_NAME.SEND_FOR_REVIEW]: {
        label: "SEND",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.OUTLINED,
    },
    [ACTION_NAME.MOVE_TO_DRAFT]: {
        label: "SEND TO DRAFT",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.CONTAINED,
    },
    [ACTION_NAME.UPLOAD]: {
        label: "SUBMIT",
        template: BUTTON_TEMPLATE.PINK,
        variant: BUTTON_VARIANT.CONTAINED,
    },
    [ACTION_NAME.EDIT]: {
        label: "SUBMIT",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.OUTLINED,
    },
    [ACTION_NAME.DELETE]: {
        label: "DELETE",
        template: BUTTON_TEMPLATE.PINK,
        variant: BUTTON_VARIANT.CONTAINED,
    },
    [ACTION_NAME.APPROVE]: {
        label: "APPROVE",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.OUTLINED,
    },
    [ACTION_NAME.REJECT]: {
        label: "SUBMIT",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.OUTLINED,
    },
    [ACTION_NAME.BLOCK]: {
        label: "BLOCK",
        template: BUTTON_TEMPLATE.PINK,
        variant: BUTTON_VARIANT.CONTAINED,
    },
    OPEN_EDIT_FORM: {
        label: "UPDATE",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.CONTAINED,
    },
    OPEN_REJECT_FORM: {
        label: "REJECT",
        template: BUTTON_TEMPLATE.PINK,
        variant: BUTTON_VARIANT.CONTAINED,
    }

}
const UpdateVideoStateButton = (props) => {
    const {videoData, action, getUpdatedVideos, onClick, disabled, additionalCbs = {}} = props;
    const { userRole, userID } = useContext(MyContext);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('success');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const template = VIDEO_ACTION_BUTTONS[action].template;
    const variant = VIDEO_ACTION_BUTTONS[action].variant;
    const label = VIDEO_ACTION_BUTTONS[action].label;
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSuccessSnackbarOpen = () => {
        setSnackbarOpen(true);
        setSnackbarSeverity('success');
        setSnackbarMessage('Success!');
    };

    const handleErrorSnackbarOpen = () => {
        setSnackbarOpen(true);
        setSnackbarSeverity('error')
        setSnackbarMessage('Error!');
    };

    const onSuccessfulUpload = async () => {
        handleSuccessSnackbarOpen();
        navigate(routes.videoHub.home.path);
        if(additionalCbs && additionalCbs.success) {
            additionalCbs.success();
        }
    }
    const onFailedUpload = () => {
        handleErrorSnackbarOpen();
        if(additionalCbs && additionalCbs.error) {
            additionalCbs.error();
        }
    }
    const onSuccessfulUpdate = async () => {
        handleSuccessSnackbarOpen();
        await getUpdatedVideos();
        if(additionalCbs && additionalCbs.success) {
            additionalCbs.success();
        }
    }
    const onFailedUpdate = () => {
        handleErrorSnackbarOpen();
        if(additionalCbs && additionalCbs.error) {
            additionalCbs.error();
        }
    }

    const handleClick = async () => {
        console.log(videoData, action, userRole)
        const nextState = await validateChangeState({videoData, action, userRole});
        if(nextState){
            if(action === ACTION_NAME.UPLOAD){
                uploadVideo({...videoData, State:nextState}, onSuccessfulUpload, onFailedUpload);
            }  else {
                apiUpdateVideo({...videoData, State: nextState, issuerID: userID}, onSuccessfulUpdate, onFailedUpdate)
            }
        } else if(action === ACTION_NAME.DELETE){
            apiDeleteVideo(videoData.UserID, videoData.VideoID, onSuccessfulUpdate, onFailedUpdate);
        }
    };

    return (
        <>
            <Button template={template} variant={variant} onClick={onClick || handleClick} disabled={disabled}>{label}</Button>
            <Snackbar
                open={snackbarOpen}
                handleClose={handleClose}
                severity={snackbarSeverity}
                message={snackbarMessage}/>
        </>
    );
}

export default UpdateVideoStateButton; //UpdateVideoStateButton;