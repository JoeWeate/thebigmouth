import React, { useState, useRef } from "react";
import EpisodeCard from "./EpisodeCard";
import "./ScrollMultimedia.css";

const ScrollMultimedia = ({ episodes }) => {
  const ref = useRef("");
  console.log(ref);

  const handleScroll = (direction) => {
    console.log(ref);

    console.log("click");
    if (ref.current) {
      if (direction === "left") {
        ref.current.scrollLeft -= 200;
        console.log("click left");
      } else if (direction === "right") {
        ref.current.scrollLeft += 200;
        console.log("click right");
      }
    }
  };
  if (!episodes || episodes.length === 0) {
    return <p>No episodes available for this season.</p>;
  }
  return (
    <div className="scroll-multimedia-container">
      <button
        onClick={() => handleScroll("left")}
        className="btn-scroll"
        id="btn-scroll-left"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="btn-scroll"
        id="btn-scroll-right"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div ref={ref} className="horisontal-scroller">
        <div className="storys-container">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollMultimedia;
