import React from "react";
import { useState } from "react";
import "./About.css"; // Create a CSS file for your component styles

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const text =
    "Introductory text about the Project/series. Mauris fringilla gravidapurus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in  feugiat libero volutpat at. Aenean tempus purus et lectus facilisisplacerat. Aenean ipsum purus, read article in pretium accumsan, eleifend et nullaplacerat. Aenean ipsum purus, read article in pretium accumsan,eleifend et nullafacilisisplacerat. Aenean ipsum purus, read article in pretium accumsan, eleifend et nullaplacerat. Aenean ipsum purus, read article in pretium accumsan.";
  return (
    <div className="about-container">
      <h3 className="header">ABOUT</h3>
      <p>{showMore ? text : `${text.substring(0, 350)}`}</p>
      <div className="more-btn" onClick={() => setShowMore(!showMore)}>
        <p>more</p>
        <i class="fa fa-angle-down icon-for-more-btn" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default About;
