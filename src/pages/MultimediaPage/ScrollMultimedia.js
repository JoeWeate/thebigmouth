import React, { useRef } from "react";
import Card from "./Card";
import { Button, Grid } from "@mui/material";

const ScrollMultimedia = ({ episodes }) => {
  const ref = useRef(null);

  const handleScroll = (direction) => {
    if (ref.current) {
      if (direction === "left") {
        ref.current.scrollLeft -= 200;
      } else if (direction === "right") {
        ref.current.scrollLeft += 200;
      }
    }
  };

  if (!episodes || episodes.length === 0) {
    return <p>No episodes available for this season.</p>;
  }

  return (
    <Grid container className="scroll-multimedia-container">
      <Button
        onClick={() => handleScroll("left")}
        className="btn-scroll"
        id="btn-scroll-left"
        sx={{
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "50%",
          color: "aliceblue",
          fontSize: 20,
          position: "absolute",
          zIndex: 2,
          width: 40,
          left: 6,
          top: "50%",
        }}
      >
        &lt;
      </Button>
      <Button
        onClick={() => handleScroll("right")}
        className="btn-scroll"
        id="btn-scroll-right"
        sx={{
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "50%",
          color: "aliceblue",
          fontSize: 20,
          position: "absolute",
          zIndex: 2,
          width: 40,
          right: 6,
          top: "50%",
        }}
      >
        &gt;
      </Button>
      <div
        ref={ref}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          overflowX: "auto",
          overscrollBehavior: "contain",
          position: "relative",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            left: 0,
          }}
        >
          {episodes.map((episode) => (
            <Card key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </Grid>
  );
};

export default ScrollMultimedia;
