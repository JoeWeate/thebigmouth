import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
const PosterComponent = ({ XRayMocks, currentTime, isPlaying }) => {
  const theme = useTheme();
  const { seasonActors, XrayTime } = XRayMocks;
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
    },
  });
  return (
    <Box>
      {XrayTime.map((actor) => {
        const isWithinRange =
          currentTime >= actor.start && currentTime <= actor.end;

        const moreThanThree = actor.actors.length > 3
        return (
          isWithinRange &&
          <Grid container
            sx={{
              display: "flex",
              position: "absolute",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              margin: "0 auto",
              bottom: 44,
              left: 0,
              width: "100%",
              height: "220px",
              backgroundColor: "rgba(59, 59, 59, 0.5)",
              // zIndex: !isPlaying ? 999 : 0,
            }}>
            {actor.actors.map((index) => (
              <Grid
                container
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{
                  ml: "2rem",
                  mt: !moreThanThree ? "-2rem" : "-5rem",
                  flexWrap: !moreThanThree ? "nowrap" : "wrap",
                  direction: !moreThanThree ? "row" : "column",
                  width: !moreThanThree ? "30%" : "12%",
                }}
              >
                <Grid item sx={{ mr: "1rem", }}>
                  <Avatar
                    src={seasonActors[index].actorImgSRC}
                    sx={{
                      width: 125,
                      height: 164,
                      borderRadius: 1,
                      border: `solid ${theme.palette.pink.main} 1px`,

                    }}
                  ></Avatar>
                </Grid>
                {!moreThanThree ?
                  <Grid item sx={{ mt: "3rem" }}>
                    <CustomWidthTooltip
                      title={seasonActors[index].description}
                      placement="top"
                      arrow
                    >
                      <Typography variant="h5" sx={{ marginBottom: "0.2rem", color: theme.palette.yellow.main }}>
                        {seasonActors[index].name}
                      </Typography>
                    </CustomWidthTooltip>
                    <Typography sx={{ fontSize: "12pt" }}>
                      {seasonActors[index].description}
                    </Typography>
                  </Grid> :
                  <Grid item>
                    <Typography variant="h6" sx={{ marginBottom: "0.2rem", color: theme.palette.yellow.main }}>
                      {seasonActors[index].name}
                    </Typography>
                  </Grid>
                }
              </Grid>

            )
            )
            }
          </Grid>
        );
      })}
    </Box >
  );
};

export default PosterComponent;