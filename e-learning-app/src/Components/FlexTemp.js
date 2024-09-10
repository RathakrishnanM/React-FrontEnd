import React, { useState, useEffect, useRef } from "react";
import "../Styles/flexTemp.css";

export default function FlexTemp({ icons, filledIcons, headings, paras }) {
  const boxesRef = useRef([]);

  const [iconsState, setIconsState] = useState(icons);

  const handleHover = (index) => {
    const newIcons = [...iconsState];
    newIcons[index] = filledIcons[index];
    setIconsState(newIcons);
  };

  const handleHoverOut = (index) => {
    const newIcons = [...iconsState];
    newIcons[index] = icons[index];
    setIconsState(newIcons);
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("add-animation");
        }
      });
    };

    const option = {
      root: null,
    };

    const observer = new IntersectionObserver(
      (entries) => handleObserver(entries),
      option
    );

    boxesRef.current.forEach((target) => observer.observe(target));
  }, []);

  const flexItems = Array.from({ length: icons.length }).map((_, index) => {
    return (
      <div
        ref={(element) => {
          boxesRef.current[index] = element;
        }}
        className="flex-item"
        style={{ animationDelay: `${index * 0.1}s` }}
        onMouseOver={() => handleHover(index)}
        onMouseOut={() => handleHoverOut(index)}
      >
        <div className="flex-img-container">
          <img
            src={iconsState[index]}
            alt="Not Available"
            className="flex-img"
          />
        </div>
        <h1>{headings[index]}</h1>
        <p>{paras[index]}</p>
      </div>
    );
  });

  return <div className="flex-container">{flexItems}</div>;
}
