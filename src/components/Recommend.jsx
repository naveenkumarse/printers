
import React from "react";
import recommend1 from "../assets/recommend1.jpg";
import recommend2 from "../assets/recommend2.jpg";
import recommend3 from "../assets/recommend3.jpg";
import recommend4 from "../assets/recommend4.jpg";

function Recommend() {
  const data = [
    {
      image: recommend1,
      text: "Invitation Cards",
      
    },
    {
      image: recommend2,
      text: "Business Cards",
    },
    {
      image: recommend3,
      text: "Papers",
    },
    {
      image: recommend4,
      text: "Label Stickers",
    },
  ];

  return (
    <div className="recommend-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Recommended for You</h2>
        </div>
        <div className="categories">
          {data.map(({ image, text }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{text}</h4>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
}

export default Recommend;

