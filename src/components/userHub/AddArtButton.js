import React from "react";
import {routes} from "../../routes";
import styles from "./AddArtButton.module.css";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const AddArtButton = () => {
    const { isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    const handleCheckLogIn = () => {
        isAuthenticated ? navigate(routes.videoHub.videoUpload.path) : loginWithRedirect();
    }

    return (
        <Box className={styles.box}>
            <a href={routes.videoHub.videoUpload.path} onClick={handleCheckLogIn}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Share Your Art
            </a>
        </Box>
    );
};

export default AddArtButton;
