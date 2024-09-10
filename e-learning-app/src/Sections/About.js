import React from "react";
import HeadingParaBtn from "../Components/HeadingParaBtn";
import about from "../assets/images/about-us-image.png";
import "../Styles/about.css";

export default function About() {
  const heading = "About us";
  const para =
    "Educational programs offered over the internet.  These courses cover a wide range of subjects and are designed to provide flexible and convenient learning options for individuals of all ages and backgrounds.  Online courses can be offered by educational institutions, universitites, colleges.";
  const btn = "Learn more";

  return (
    <section id="about" className="about-section">
      <HeadingParaBtn heading={heading} para={para} btn={btn} />
      <div className="about-section-right">
        <img src={about} alt="Not Available" />
      </div>
      <span className="ball5"></span>
    </section>
  );
}
