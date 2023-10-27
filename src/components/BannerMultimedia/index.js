import React from 'react';
import Grid from "@mui/material/Grid";
import triangleIcon from "../../assets/images/triangle-icon.svg";
import styles from './index.module.css';

const BannerMultimedia = (props) => {
    const {src, alt} = props;

    return (
        <Grid container>
            <Grid item xs={12} className={styles.imgWrapper}>
                <img src={src} alt={alt} className={styles.img}/>
                <img src={triangleIcon} alt="triangle" className={styles.triangle} width="73" height="70"/>
            </Grid>
        </Grid>
    )
};
export default BannerMultimedia;