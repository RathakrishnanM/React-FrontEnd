import React, { useState } from "react";
import facebookFill from "../assets/icons/facebook-fill.png";
import facebook from "../assets/icons/facebook.png";
import twitterFill from "../assets/icons/twitter-fill.png";
import twitter from "../assets/icons/twitter.png";
import linkedinFill from "../assets/icons/linkedin-fill.png";
import linkedin from "../assets/icons/linkedin.png";
import instagramFill from "../assets/icons/instagram-fill.png";
import instagram from "../assets/icons/instagram.png";
import "../Styles/footer.css";
import FlexTempForFooter from "../Components/FlexTempForFooter";

function Footer() {
  const icons = [facebook, twitter, linkedin, instagram];
  const filledIcons = [facebookFill, twitterFill, linkedinFill, instagramFill];

  const [imgIcons, setImgIcons] = useState(filledIcons);
  const handleOver = (index) => {
    const newIcons = [...imgIcons];
    newIcons[index] = icons[index];
    setImgIcons(newIcons);
  };

  const handleOut = (index) => {
    const newIcons = [...imgIcons];
    newIcons[index] = filledIcons[index];
    setImgIcons(newIcons);
  };

  const heads = ["Information", "Programme", "Pricing"];
  const contents = [
    ["About", "Customers", "Community Forum", "Careers", "Contact Us"],
    ["Blog", "Watch a Demo", "Academy", "Webinars", "What's New"],
    [
      "Pricing",
      "Use Cases",
      "Conversational Marketing",
      "Conversational Engagement",
      "Conversational Support",
    ],
  ];

  return (
    <>
      <footer id="footer" className="footer-section">
        <div className="footer-flex">
          <h1 style={{ fontSize: "24px" }}>Potential</h1>
          <p>
            Education is tailored to students with disabilites. It involves
            individualized teaching.
          </p>
          <div className="social-media-container">
            {imgIcons.map((val, index) => (
              <img
                src={val}
                alt="Not Available"
                onMouseOver={() => handleOver(index)}
                onMouseOut={() => handleOut(index)}
              />
            ))}
          </div>
        </div>
        {heads.map((val, index) => (
          <FlexTempForFooter head={val} contents={contents[index]} />
        ))}
        <span className="ball11"></span>
        <span className="ball12"></span>
      </footer>

      <div className="copy-right-container">
        <p className="copy-right">
          Copyright 2024 Potential, inc. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
