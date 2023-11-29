import React, {useContext, useState} from 'react';
import {apiUpdateVideo} from "../api/videos";
import Snackbar from "../components/Snackbar";
import {ACTION_NAME} from "../utils/constants";
import {validateChangeState} from "../utils/validateChangeState";
import {MyContext} from "../App";
import Button from "../components/Button";
import {BUTTON_TEMPLATE, BUTTON_VARIANT} from "./Button";


export const VIDEO_ACTION_BUTTONS = {
    [ACTION_NAME.MOVE_TO_PENDING]: {
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
        label: "EDIT",
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
const VideoActionButton = (props) => {
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
        if(action === ACTION_NAME.UPLOAD){
            console.log('move to page to upload form')
        } else if(action === ACTION_NAME.EDIT){
            console.log('first need to go somewhere to edit')
        } else if(action === ACTION_NAME.DELETE){
            console.log('add delete confirmation and axios request')
        } else {
            const nextState = validateChangeState({videoData, action, userRole});
            console.log({curState: videoData.State, action, nextState})
            if(nextState) {apiUpdateVideo({...videoData, State: nextState}, handleSnackbar)};
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

export default VideoActionButton;