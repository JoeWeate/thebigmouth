import React from "react";
import "./card.css";
const Card = ({ multimedia }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="main-image" src={multimedia.url} alt={multimedia.id} />
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
        {/* <div className="frame pink-frame"></div>
        <div className="frame yellow-frame"></div> */}
      </div>

      <h6>EPISODE {multimedia.episode}</h6>
      <h3>{multimedia.title}</h3>
      <p>{multimedia.description}</p>
    </div>
  );
};

export default Card;
