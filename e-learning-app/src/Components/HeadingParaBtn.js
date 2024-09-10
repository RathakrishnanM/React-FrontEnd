import React, { useState, useEffect } from "react";
import "../Styles/headingParaBtn.css";

export default function HeadingParaBtn({ heading, para, btn }) {
  const [fontSize, setFontSize] = useState(window.innerWidth > 780 ? 48 : 24);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setFontSize(window.innerWidth > 780 ? 48 : 24);
    });
  }, []);

  return (
    <div className="hpb-box">
      <h1 className="hpb-h" style={{ fontSize: `${fontSize}px` }}>
        {heading}
      </h1>
      <p className="hpb-p">{para}</p>
      <button className="hpb-btn">{btn}</button>
    </div>
  );
}
