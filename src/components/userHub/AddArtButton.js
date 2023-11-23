import React from "react";
import styles from "./AddArtButton.module.css";
import { Box } from "@mui/material";

const AddArtButton = () => {
    return (
        <Box className={styles.box}>
            <a href="#">
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
