import Grid from "@mui/material/Grid";
import React from 'react';
import styles from './index.module.css';

const BannerMultimedia = (props) => {
    const {src, alt} = props;

    return (
        <Grid container>
            <Grid item xs={12}>
                <img src={src} alt={alt} className={styles.img}/>
            </Grid>
        </Grid>
    )
};
export default BannerMultimedia;