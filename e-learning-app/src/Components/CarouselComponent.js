import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quoteBlue from "../assets/icons/quote-blue.png";
import "../Styles/carousel.css"; // Custom styles (optional)

export default function CarouselComponent({
  heads,
  paras,
  names,
  images,
  countries,
}) {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per swipe or click
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time in milliseconds before sliding to the next slide
  };

  const elements = Array.from({ length: heads.length }).map((_, index) => {
    return (
      <div key={index} className="carousel-item">
        <div className="carousel-item-box">
          <div className="carousel-item-header">
            <h1>{heads[index]}</h1>
            <img src={quoteBlue} alt="Icon" />
            <p>{paras[index]}</p>
          </div>
          <span className="divider"></span>
          <div className="carousel-item-footer">
            <img src={images[index]} alt="Course Icon" />
            <div className="last-part">
              <h2>{names[index]}</h2>
              <p>{countries[index]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{elements}</Slider>;
}
