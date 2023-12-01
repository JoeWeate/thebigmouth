import { Box, Grid, Avatar, Typography } from '@mui/material';

const PosterComponent = ({ isFullScreen, XRayMocks, currentTime }) => {
    return (
        <Box
            sx={{
                display: "flex",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                bottom: 0,
                left: 0,
                maxWidth: isFullScreen ? "100%" : "640px",
                height: "150px",
                backgroundColor: "rgba(59, 59, 59, 0.7)"
            }}
        >
            {XRayMocks.map((actor) => (
                currentTime >= actor.start && currentTime <= actor.end && (
                    <Grid container direction="row" lg={10} gap={4}>
                        <Grid item lg={2} sx={{ marginBottom: "5rem" }}>
                            <Avatar src={actor.actorImgSRC} sx={{ width: 85, height: 104, borderRadius: 1, border: "solid #E60077 1px" }}></Avatar>
                        </Grid>
                        <Grid item lg={9} sx={{ marginTop: "1.5rem" }}>
                            <Typography variant="h6">{actor.name}</Typography>
                            <Typography sx={{ fontSize: "10pt" }}>
                                {actor.description}
                            </Typography>
                        </Grid>
                    </Grid>
                )
            ))}
        </Box>
    );
};

export default PosterComponent

