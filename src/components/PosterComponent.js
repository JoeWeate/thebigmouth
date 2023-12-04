import { Box, Grid, Avatar, Typography } from "@mui/material";

const PosterComponent = ({ XRayMocks, currentTime }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        bottom: 40,
        left: 0,
        width: "100%",
        height: "250px",
        backgroundColor: "rgba(59, 59, 59, 0.7)",
      }}
    >
      <Grid container direction="row" lg={11} >
        {XRayMocks.map(
          (actor) =>
            currentTime >= actor.start &&
            currentTime <= actor.end && (
              <Grid container direction="row" lg={12}>
                <Grid item sx={{ marginBottom: "8rem" }}>
                  <Avatar
                    src={actor.actorImgSRC}
                    sx={{
                      width: 125,
                      height: 154,
                      borderRadius: 1,
                      border: "solid #E60077 1px",
                    }}
                  ></Avatar>
                </Grid>
                <Grid item sx={{ ml: "1rem", marginTop: "3rem", width: "20rem" }}>
                  <Typography variant="h6">{actor.name}</Typography>
                  <Typography sx={{ fontSize: "10pt" }}>
                    {actor.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default PosterComponent;
