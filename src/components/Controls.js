import { Slider, styled, CardMedia, Grid, Box, Typography, Button, IconButton } from "@mui/material";
import {
    FastForward,
    FastRewind,
    Pause,
    PlayArrow,
    SkipNext,
    VolumeUp,
    VolumeOff
} from "@mui/icons-material";
import Crop32Icon from '@mui/icons-material/Crop32';

const useStyles = {
    volumeSlider: {
        width: "100px",
        color: "#9556CC",
    },

    bottomIcons: {
        color: "#999",
        padding: "12px 8px",
        "&:hover": {
            color: "#fff",
        },
    },
};

const PrettoSlider = styled(Slider)(({ theme }) => ({
    height: "20px",
    color: "#9556CC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    "& .MuiSlider-thumb": {
        height: 20,
        width: 20,
        backgroundColor: "#9556CC",
        border: `2px solid ${theme.palette.primary.main}`,
        marginTop: -3,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },

    "& .MuiSlider-valueLabel": {
        left: "calc(-50% + 4px)",
    },

    "& .MuiSlider-track": {
        height: 5,
        borderRadius: 4,
        width: "100%",
    },

    "& .MuiSlider-rail": {
        height: 5,
        borderRadius: 4,
        width: "100%",
    },
}));

const Controls = ({ onPlayPause, playing, onRewind, onForward, played, onSeek, onSeekMouseUp, onVolumeChangeHandler, onVolumeSeekUp, volume, mute, onMute, duration, currentTime }) => {
    return (

        <CardMedia alt="CoverControl" sx={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, flexDirection: "column", zIndex: 1, display: "flex", justifyContent: "space-between", height: '100%', width: '100%', objectFit: "cover", alignItems: "center" }} >
            <Box style={{ display: "flex", alignSelf: "flex-start", margin: "5px 20px" }}>
                <Typography variant="h2">Video Player</Typography>
            </Box>
            <Grid container justifyContent="center" alignItems="center" direction="row">
                <Grid item onClick={onRewind}>
                    <FastRewind fontSize="medium" />
                </Grid>
                <Grid item onClick={onPlayPause}>
                    {playing ? (
                        <Pause fontSize="medium" />
                    ) : (
                        <PlayArrow fontSize="medium" />
                    )}{" "}
                </Grid>
                <Grid item onClick={onForward}>
                    <FastForward fontSize="medium" />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{ mb: "2rem", maxHeight: "8rem", border: "solid yellow 1px" }} lg={10} >
                <Grid item lg={10} >
                    <PrettoSlider
                        min={0}
                        max={100}
                        value={played * 100}
                        onChange={onSeekMouseUp}
                        onChangeCommitted={onSeek}
                    />
                </Grid>
                <Grid item lg={10}>
                    <Grid container direction="row" justifyContent="space-between" sx={{ border: "solid red 1px" }} >
                        <Grid item>
                            <Grid container direction="row" alignItems="center" sx={{ border: "solid green 1px", width: "100%" }} justifyContent="flex-start">
                                <div className="icon__btn" style={useStyles.bottomIcons} onClick={onPlayPause}>
                                    {playing ? (
                                        <Pause fontSize="medium" />
                                    ) : (
                                        <PlayArrow fontSize="medium" />
                                    )}{" "}
                                </div>

                                <div className="icon__btn" style={useStyles.bottomIcons}>
                                    <SkipNext fontSize="medium" />
                                </div>
                                <div className="icon__btn" onClick={onMute} style={useStyles.bottomIcons}>
                                    {mute ? (
                                        <VolumeOff fontSize="medium" />
                                    ) : (
                                        <VolumeUp fontSize="medium" />
                                    )}
                                </div>
                                <Slider style={useStyles.volumeSlider}
                                    onChange={onVolumeChangeHandler}
                                    value={volume * 100}
                                    onChangeCommitted={onVolumeSeekUp} />
                            </Grid>
                        </Grid>
                        <Grid item >
                            <IconButton style={useStyles.bottomIcons}>
                                <Crop32Icon />
                            </IconButton>
                            <span style={useStyles.bottomIcons}>{currentTime}/{duration}</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardMedia>
    );
}


export default Controls;
