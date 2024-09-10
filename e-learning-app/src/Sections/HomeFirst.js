import React from "react";
import HomeFirstImage from "../assets/images/home-first-image.svg";
import "../Styles/homeFirst.css";

export default function HomeFirst() {
  return (
    <div className="home-first">
      <div className="home1-left">
        <h1>Online Learning is now more Easy</h1>
        <p>
          It's important to note that online education also comes with its own
          set of challenges, such as potential feelings of isolation, the need
          for strong self-discipline.
        </p>
        <button>Apply Online</button>
      </div>

      <div className="home1-right">
        <img src={HomeFirstImage} alt="Learning" />
      </div>

      <span className="ball1"></span>
      <span className="ball2"></span>
    </div>
  );
}
