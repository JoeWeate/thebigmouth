import React, { useRef } from "react";
import Card from "./Card";
import { Button, Grid, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const EpisodesCarousel = ({ episodes }) => {
  const ref = useRef(null);

  const handleScroll = (direction, event) => {
    event.preventDefault();
    event.stopPropagation();
    const scrollAmount = 400;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  if (!episodes || episodes.length === 0) {
    return <p>No episodes available for this season.</p>;
    // Need to confirm what to show if there is no episode.
  }
  return (
    <Grid
      container
      sx={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Button
        onClick={(event) => handleScroll("left", event)}
        sx={{
          position: "absolute",
          zIndex: 2,
          left: -2,

          width: "30px",
          top: "35%",
          transform: "translateY(-50%)",
          color: "white",
          scrollBehavior: "smooth",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "#088F8F",
          },
          borderRadius: 0,
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "3rem" }} />
      </Button>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          flexWrap: "nowrap",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "& > *": {
            pr: 2,
            width: {
              xs: "55%",
              sm: "47%",
              md: "36%",
              lg: "30%",
              xl: "20%",
            },
            flexShrink: 0,
            flexGrow: 0,
          },
          scrollSnapType: "x mandatory",
          position: "relative",
        }}
      >
        {episodes.map((episode, index) => (
          <Card key={index} episode={episode} />
        ))}
      </Box>
      <Button
        onClick={(event) => handleScroll("right", event)}
        sx={{
          position: "absolute",
          zIndex: 2,
          right: { xs: 233, sm: 100, md: 10, lg: 10, xl: 10 },

          top: "35%",
          transform: "translateY(-50%)",
          color: "white",
          scrollBehavior: "smooth",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "#088F8F",
          },
          borderRadius: 0,
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "3rem" }} />
      </Button>
    </Grid>
  );
};

export default EpisodesCarousel;
