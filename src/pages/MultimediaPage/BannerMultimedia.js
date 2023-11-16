import React from 'react';
import Grid from "@mui/material/Grid";
import ScrollDownBtn from "../../components/ScrollDownBtn";
import styles from './BannerMultimedia.module.css';

const BannerMultimedia = (props) => {
    const {src, alt} = props;

    return (
        <Grid container>
            <Grid item xs={12} className={styles.imgWrapper}>
                <img src={src} alt={alt} className={styles.img}/>
                <ScrollDownBtn targetRef={props.targetRef}/>
            </Grid>
        </Grid>
    )
};
export default BannerMultimedia;