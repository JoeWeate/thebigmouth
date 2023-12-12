import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { apiDeleteVideo, apiUpdateVideo } from "../api/videos";
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
    const {videoData, action, getUpdatedVideos, onClick, disabled} = props;
    const { userRole, userID } = useContext(MyContext);
    const [snackbar, setSnackbar] = useState({
        open: false,
        type: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const template = VIDEO_ACTION_BUTTONS[action].template;
    const variant = VIDEO_ACTION_BUTTONS[action].variant;
    const label = VIDEO_ACTION_BUTTONS[action].label;

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({
            ...snackbar,
            open: false,
        });
    };

    const handleSnackbarOpen = (type, message) => {
        setSnackbar({
            open: true,
            type: type,
            message: message,
        });
    };

    const onSuccessfulUpdate = async () => {
        await handleSnackbarOpen('success', 'Success!');
        await getUpdatedVideos();
    }

    const onFailedUpdate = async () => {
        await handleSnackbarOpen('error', 'Error!');
    }

    const handleClick = async () => {
        const nextState = await validateChangeState({videoData, action, userRole});
        if (action === ACTION_NAME.DELETE) {
            setLoading(true);
            await apiDeleteVideo(videoData.UserID, videoData.VideoID, onSuccessfulUpdate, onFailedUpdate);
            setLoading(false);
        } else if (nextState) {
            setLoading(true);
            await apiUpdateVideo({...videoData, State: nextState, issuerID: userID}, onSuccessfulUpdate, onFailedUpdate);
            setLoading(false);
        }
    };

    return (
        <>
            <Button template={template} variant={variant} onClick={onClick || handleClick} disabled={disabled} loadingButton loading={loading}>{label}</Button>
            <Snackbar
                open={snackbar.open}
                handleClose={handleSnackbarClose}
                type={snackbar.type}
                message={snackbar.message}/>
        </>
    );
}

export default UpdateVideoStateButton; //UpdateVideoStateButton;