import React, { useState } from "react";
import { Grid } from "@mui/material";
import styles from "./SowMore.module.css";

function ShowMore() {
  const [showContent, setShowContent] = useState(false);

  return (
    <Grid container item justifyContent="center" direction="column" alignItems="center" sx={{ height: "10rem", }}
    >
      <Grid container justifyContent="center" direction="column" gap={4} alignItems="center" sx={{ height: "8rem", width: "8rem" }}
        onMouseEnter={() => setShowContent(true)}
        onMouseLeave={() => setShowContent(false)}
      >
        <div className={`${styles["cross-style"]}`}>
          <div className={`${showContent ? styles["vertical-bar-style-hover"] : styles["vertical-bar-style"]}`}></div>
          <div className={`${showContent ? styles["horizontal-bar-style-hover"] : styles["horizontal-bar-style"]}`}></div>
          <div
            className={`${styles["left-line"]} ${showContent ? styles["left-line-animation"] : ""}`}
          ></div>
          <div className={`${styles["right-line"]} ${showContent ? styles["right-line-animation"] : ""}`}></div>

        </div>
        <div style={showContent ? { color: "rgb(10, 210, 183)" } : { color: "white" }}>SHOW MORE</div>

      </Grid>
    </Grid >

  );

}

export default ShowMore;