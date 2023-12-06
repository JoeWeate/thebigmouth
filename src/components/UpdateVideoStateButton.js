import React, {useContext, useState} from 'react';
import {apiUpdateVideo, uploadVideo} from "../api/videos";
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
        label: "UPDATE",
        template: BUTTON_TEMPLATE.YELLOW,
        variant: BUTTON_VARIANT.CONTAINED,
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
}
const UpdateVideoStateButton = (props) => {
    const {videoData, action} = props;
    const { userRole } = useContext(MyContext);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState('success');
    const template = VIDEO_ACTION_BUTTONS[action].template;
    const variant = VIDEO_ACTION_BUTTONS[action].variant;
    const label = VIDEO_ACTION_BUTTONS[action].label;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSnackbar = (type) => {
        setSnackbarType(type);
        setSnackbarOpen(true);
    };

    const handleClick = () => {
        const nextState = validateChangeState({videoData, action, userRole});
        if(nextState){
            if(action === ACTION_NAME.UPLOAD){
                uploadVideo({...videoData, State:nextState}, handleSnackbar).then(() => {
                    console.log('video uploaded')
                    //navigate to somewhere
                });
            } else if(action === ACTION_NAME.DELETE){
                console.log('add delete confirmation and axios request')
                //send axios request to delete video
            } else {
                apiUpdateVideo({...videoData, State: nextState}, handleSnackbar);
            }
        }
    };

    return (
        <>
            <Button template={template} variant={variant} onClick={handleClick}>{label}</Button>
            <Snackbar
                open={snackbarOpen}
                handleClose={handleClose}
                severity={snackbarType === 'success' ? "success" : 'error'}
                message={snackbarType === 'success' ? "Success!" : 'Error!'}/>
        </>
    );
}

export default UpdateVideoStateButton;