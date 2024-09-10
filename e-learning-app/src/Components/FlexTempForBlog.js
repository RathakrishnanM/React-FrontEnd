import React from "react";
import stars from "../assets/images/stars.jpg";
import "../Styles/flexTempForBlog.css";

export default function FlexTempForBlog({ imgs, heads, scores, paras }) {
  const flexItems = Array.from({ length: imgs.length }).map((_, index) => {
    return (
      <div className="flex-blog-items">
        <div className="flex-blog-img-container">
          <img
            src={imgs[index]}
            className="flex-blog-img"
            alt="Not Available"
          />
        </div>
        <h1>{heads[index]}</h1>
        <div className="flex-score-container">
          <img src={stars} alt="Not Available" />
          <p>({scores[index]})</p>
        </div>
        <p>{paras[index]}</p>
      </div>
    );
  });

  return <div className="flex-blog-container">{flexItems}</div>;
}
