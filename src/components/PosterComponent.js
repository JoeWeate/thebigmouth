import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Tooltip,
  tooltipClasses,
  Hidden,
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
              pb: { lg: 0, sm: "4rem", xs: "4rem" },
              pr: { sm: "1rem", xs: "1rem" },
              pt: { sm: "1rem", xs: "1rem" },
              margin: "0 auto",
              bottom: 44,
              left: 0,
              width: "100%",
              height: { lg: "220px", sm: "auto" },
              backgroundColor: "rgba(59, 59, 59, 0.6)",
            }}>
            {actor.actors.map((index) => (
              <Grid
                container
                alignItems="flex-start"

                sx={{
                  ml: "2rem",
                  justifyContent: !moreThanThree ? { lg: "space-between", sm: "flex-start" } : "flex-start",
                  mt: !moreThanThree ? { lg: "-2rem", sm: 0 } : { lg: "-3rem", sm: 0 },
                  flexWrap: "nowrap",
                  direction: !moreThanThree ? "row" : "column",
                  width: !moreThanThree ? { lg: "30%", md: "30%", sm: "90%" } : { lg: "17%", md: "90%" },
                  mb: { sm: "1rem", xs: "1rem" }

                }}
              >
                <Grid item sx={{ mr: "1rem", }}>
                  <Avatar
                    src={seasonActors[index].actorImgSRC}
                    sx={{
                      width: { lg: 125, xs: 90 },
                      height: { lg: 164, xs: 110 },
                      borderRadius: 1,
                      border: `solid ${theme.palette.pink.main} 2px`,

                    }}
                  ></Avatar>
                </Grid>
                {!moreThanThree ?
                  <Grid item sx={{ mt: { lg: "2rem", md: 0, sm: 0 } }}>
                    <CustomWidthTooltip
                      title={seasonActors[index].description}
                      placement="top"
                      arrow
                    >
                      <Typography variant="h5" sx={{ marginBottom: "0.2rem", color: theme.palette.yellow.main, }}>
                        {seasonActors[index].name}
                      </Typography>
                    </CustomWidthTooltip>
                    <Typography sx={{ fontSize: "10pt" }}>
                      {seasonActors[index].description}
                    </Typography>
                  </Grid> :
                  <Grid item>
                    <Typography variant="h6" sx={{ marginTop: { lg: "3rem", sm: 0 }, color: theme.palette.yellow.main }}>
                      {seasonActors[index].name}
                    </Typography>
                    <Hidden mdUp>
                      <Typography sx={{ fontSize: "10pt" }}>
                        {seasonActors[index].description}
                      </Typography>
                    </Hidden>
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