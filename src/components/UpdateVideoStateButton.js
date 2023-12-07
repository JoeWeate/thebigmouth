import React, {useContext, useState} from 'react';
import {apiDeleteVideo, apiUpdateVideo, uploadVideo} from "../api/videos";
import Snackbar from "../components/Snackbar";
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
        label: "REJECT",
        template: BUTTON_TEMPLATE.PINK,
        variant: BUTTON_VARIANT.CONTAINED,
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
    }
}
const UpdateVideoStateButton = (props) => {
    const {videoData, action, getUpdatedVideos, onClick} = props;
    const { userRole } = useContext(MyContext);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');
    const template = VIDEO_ACTION_BUTTONS[action].template;
    const variant = VIDEO_ACTION_BUTTONS[action].variant;
    const label = VIDEO_ACTION_BUTTONS[action].label;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSuccessSnackbarOpen = () => {
        setSnackbarOpen(true);
        setSnackbarMessage('Success!');
        setSnackbarSeverity('success')
    };

    const handleErrorSnackbarOpen = () => {
        setSnackbarOpen(true);
        setSnackbarSeverity('error')
        setSnackbarMessage('Error');
    };

    const onSuccessfulUpdate = () => {
        handleSuccessSnackbarOpen();
        getUpdatedVideos();
    }
    const onFailedUpdate = () => {
        handleErrorSnackbarOpen();
    }

    const handleClick = async () => {
        console.log('handleClick button')
        const nextState = await validateChangeState({videoData, action, userRole});
        if(nextState){
            if(action === ACTION_NAME.UPLOAD){
                uploadVideo({...videoData, State:nextState}, onSuccessfulUpdate, onFailedUpdate);
            }  else {
                console.log({nextState, onSuccessfulUpdate, onFailedUpdate})
                apiUpdateVideo({...videoData, State: nextState}, onSuccessfulUpdate, onFailedUpdate)
            }
        } else if(action === ACTION_NAME.DELETE){
            apiDeleteVideo(videoData.UserID, videoData.VideoID, onSuccessfulUpdate, onFailedUpdate);
        }
    };

    return (
        <>
            <Button template={template} variant={variant} onClick={onClick || handleClick}>{label}</Button>
            <Snackbar
                open={snackbarOpen}
                handleClose={handleClose}
                severity={snackbarSeverity}
                message={snackbarMessage}/>
        </>
    );
}

export default UpdateVideoStateButton; //UpdateVideoStateButton;