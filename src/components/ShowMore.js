import React, { useState } from "react";

const ShowMore = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "black", // Transparent background
      }}
    >
      <div>
        <button
          onClick={toggleContent}
          style={{
            background: "transparent", // Transparent button background
            border: "none", // Remove button border
          }}
        >
          {showContent ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <line
                fill="none"
                stroke="white" // White plus sign color
                stroke-width="8"
                x1="10"
                y1="50"
                x2="90"
                y2="50"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <line
                fill="none"
                stroke="white"
                stroke-width="8"
                x1="10"
                y1="50"
                x2="90"
                y2="50"
              />
              <line
                fill="none"
                stroke="white"
                stroke-width="8"
                x1="50"
                y1="10"
                x2="50"
                y2="90"
              />
            </svg>
          )}
        </button>
      </div>
      <p style={{ color: "white" }}>
        {showContent
          ? "This is the additional content to show when clicked."
          : "Show More"}
      </p>
    </div>
  );
};

export default ShowMore;
