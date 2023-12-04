import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
const PosterComponent = ({ isFullScreen, XRayMocks, currentTime }) => {
  const { seasonActors, XrayTime } = XRayMocks;
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
    },
  });
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
        maxWidth: isFullScreen ? "100%" : "640px",
        height: "150px",
        backgroundColor: "rgba(59, 59, 59, 0.7)",
        zIndex: 999,
      }}
    >
      {XrayTime.map((actor) => {
        const actorIndex = actor.actors[0];
        const isWithinRange =
          currentTime >= actor.start && currentTime <= actor.end;

        return (
          isWithinRange && (
            <Grid container direction="row" lg={10} gap={4}>
              <Grid item lg={2} sx={{ marginBottom: "5rem" }}>
                <Avatar
                  src={seasonActors[actorIndex].actorImgSRC}
                  sx={{
                    width: 85,
                    height: 104,
                    borderRadius: 1,
                    border: "solid #E60077 1px",
                  }}
                ></Avatar>
              </Grid>
              <Grid item lg={9} sx={{ marginTop: "1.5rem" }}>
                <CustomWidthTooltip
                  title={seasonActors[actorIndex].description}
                >
                  <Typography variant="h6">
                    {seasonActors[actorIndex].name}
                  </Typography>
                </CustomWidthTooltip>
                <Typography sx={{ fontSize: "10pt" }}>
                  {seasonActors[actorIndex].description}
                </Typography>
              </Grid>
            </Grid>
          )
        );
      })}
    </Box>
  );
};

export default PosterComponent;
