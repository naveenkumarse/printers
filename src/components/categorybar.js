import React from "react";
import "../scss/_categorybar.css";
const CategoryBar = ({ Imgsrc, CategoryName, type, classnum }) => {

  const handleclick = () => {
    const element = document.getElementById(`${classnum}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="CategoryBar" onClick={handleclick} >

      <div className="categoryBar-Img">
        <img src={Imgsrc} alt="CategoryImg" />
      </div>
      <p className="categoryBar-name">{CategoryName}</p>

    </div>
  );
};

export default CategoryBar;