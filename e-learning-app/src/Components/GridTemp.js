import React from "react";
import "../Styles/homeSecond.css";

export default function GridTemp({ col, row, icons, headings, paras }) {
  const size = row + col;
  const boxes = Array.from({ length: size }).map((_, index) => (
    <div key={index} className="grid-item">
      <div className="img-container">
        <img src={icons[index]} alt="Not Available" className="icon" />
      </div>
      <h1>{headings[index]}</h1>
      <p>{paras[index]}</p>
    </div>
  ));

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${col}, 0.5fr)`,
    gridTemplateRows: `repeat(${row}, 0.5fr)`,
    gap: "30px 50px",
  };

  return (
    <div className="grid-container" style={gridStyle}>
      {boxes}
    </div>
  );
}
