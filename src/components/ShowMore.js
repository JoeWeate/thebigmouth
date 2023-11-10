import React, { useState } from "react";
import { Grid } from "@mui/material";
import styles from "./ShowMore.module.css";

function ShowMore() {
  const [showContent, setShowContent] = useState(false);

  const crossStyle = {
    width: "45px",
    height: "3px",
    background: "white",
    position: "relative",
  };

  const lineStyle = {
    position: "absolute",
    width: "70%",
    height: "3px",
    background: "white",
  };
  const verticalBarStyle = {
    ...crossStyle,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const horizontalBarStyle = {
    ...crossStyle,
    transform: "rotate(90deg)",
  };


  const rightLine = {
    ...lineStyle,
    bottom: -11,
    right: -4,
    transformOrigin: "bottom rigth",
    transform: "rotate(135deg)",
  };

  return (
    <Grid container justifyContent="center" sx={{ height: "6rem" }}>
      <div style={crossStyle}>
        <div style={verticalBarStyle}></div>
        <div style={horizontalBarStyle}></div>
        <div
          className={`${styles["left-line"]} ${showContent ? styles["left-line-animation"] : ""}`}
          onMouseEnter={() => setShowContent(true)}
          onMouseLeave={() => setShowContent(false)}
        ></div>
        <div style={rightLine}></div>
      </div>
    </Grid>

  );

}

export default ShowMore;