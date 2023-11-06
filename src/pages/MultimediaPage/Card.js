import React from "react";
import "./Card.css";
const Card = ({ episode }) => {
  console.log(episode , 'here with card');
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="main-image"
          src={episode.image}
          alt={`Episode ${episode.episode_id}`}
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

      <h6>EPISODE {episode.episode_id}</h6>
      <h3>{episode.title}</h3>
      <p>{episode.description}</p>
    </div>
  );
};

export default Card;
