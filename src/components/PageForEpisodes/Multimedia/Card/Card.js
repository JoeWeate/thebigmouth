import React from "react";
import "./card.css";
const Card = ({ episode }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="main-image"
          src={episode.image?.S}
          alt={`Episode ${episode.episode_id?.S}`}
        />
        <img
          className="play-image"
          src="https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/y-p.png"
          alt="Play Button"
        />
        <img
          className="circle-image"
          src="https://tbh.flipclip.co.in/p-c.png"
          alt="Play Button"
        />
        <img
          className="triangle-img"
          src="https://tbh.flipclip.co.in/ics.png"
          alt="Play Button"
        />
      </div>

      <h6>EPISODE {episode.episode_id?.S}</h6>
      <h3>{episode.title?.S}</h3>
      <p>{episode.description?.S}</p>
    </div>
  );
};

export default Card;
