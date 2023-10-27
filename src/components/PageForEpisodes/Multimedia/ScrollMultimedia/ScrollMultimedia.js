import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import "./scrollMultimedia.css";

const ScrollMultimedia = () => {
  const test = [
    {
      id: 0,
      episode: 1,
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcbLjcZKWWHRRpf5gdOSCI78jLz3gpNgL67AcTD3zFE-zU_GTG",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
    {
      id: 1,
      episode: 1,
      url: "https://media.istockphoto.com/id/930082108/photo/solitary-lime-tree-in-fields-of-rapeseed-and-wheat-under-blue-sky.jpg?s=612x612&w=0&k=20&c=ALuNL8rkWjxYu8aCytJAoW13AdYC2Hc2DIgFbNQ6KcU=",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
    {
      id: 2,
      episode: 1,
      url: "https://thebigmouth-media.s3.eu-west-2.amazonaws.com/public/banner.png",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
    {
      id: 3,
      episode: 1,
      url: "https://media.istockphoto.com/id/930082108/photo/solitary-lime-tree-in-fields-of-rapeseed-and-wheat-under-blue-sky.jpg?s=612x612&w=0&k=20&c=ALuNL8rkWjxYu8aCytJAoW13AdYC2Hc2DIgFbNQ6KcU=",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
    {
      id: 4,
      episode: 1,
      url: "https://media.istockphoto.com/id/930082108/photo/solitary-lime-tree-in-fields-of-rapeseed-and-wheat-under-blue-sky.jpg?s=612x612&w=0&k=20&c=ALuNL8rkWjxYu8aCytJAoW13AdYC2Hc2DIgFbNQ6KcU=",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
    {
      id: 5,
      episode: 1,
      url: "https://media.istockphoto.com/id/930082108/photo/solitary-lime-tree-in-fields-of-rapeseed-and-wheat-under-blue-sky.jpg?s=612x612&w=0&k=20&c=ALuNL8rkWjxYu8aCytJAoW13AdYC2Hc2DIgFbNQ6KcU=",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
    {
      id: 6,
      episode: 1,
      url: "https://media.istockphoto.com/id/930082108/photo/solitary-lime-tree-in-fields-of-rapeseed-and-wheat-under-blue-sky.jpg?s=612x612&w=0&k=20&c=ALuNL8rkWjxYu8aCytJAoW13AdYC2Hc2DIgFbNQ6KcU=",
      title: "test title",
      description:
        "Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus purus et lectus facilisis placerat. Aenean ipsum purus, maximus in pretium accumsan, eleifend etnulla",
    },
  ];
  const ref = useRef("");
  console.log(ref);

  const handleScroll = (direction) => {
    console.log(ref);

    console.log("click");
    if (ref.current) {
      if (direction === "left") {
        ref.current.scrollLeft -= 200;
        console.log("click left");
        // ref.current.scrollIntoView({
        //   behavior: "smooth",
        //   block: "nearest",
        //   inline: "start",
        // });
      } else if (direction === "right") {
        ref.current.scrollLeft += 200;
        console.log("click right");
        // ref.current.scrollIntoView({
        //   behavior: "smooth",
        //   block: "nearest",
        //   inline: "start",
        // });
      }
    }
  };

  return (
    <div className="container">
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
          {test.map((multimedia) => (
            <Card key={multimedia.id} multimedia={multimedia} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollMultimedia;
