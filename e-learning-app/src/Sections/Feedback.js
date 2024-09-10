import React from "react";
import "../Styles/feedback.css";
import CarouselComponent from "../Components/CarouselComponent";
import profile1 from "../assets/images/profile1.jpeg";
import profile2 from "../assets/images/profile2.jpeg";
import profile3 from "../assets/images/profile3.jpeg";

export default function Feedback() {
  const heads = ["Fantastic platform", "Wonderful platform", "Great platform"];
  const paras = [
    "Online education has shattered barriers that once hindered access to learning.  It has brought education to the remotest conrners of the world and enabled individuals of all ages to pursue their passions and career aspirations.",
    "In the realm of online education, innovation is the driving force.  Form interactive video lectures to immersive simulations, educations have harnessed technology to create engaging and effective learning expereiences.",
    "Online education has shattered barriers that once hindered access to learning.  It has brought education to the remotest conrners of the world and enabled individuals of all ages to pursue their passions and career aspirations.",
    "In the realm of online education, innovation is the driving force.  Form interactive video lectures to immersive simulations, educations have harnessed technology to create engaging and effective learning expereiences.",
  ];
  const names = [
    "Mark williams",
    "Robbert key",
    "Rebecca philips",
    "Haroid Taybes",
  ];
  const countries = ["London, UK", "Singapore", "Germony", "England"];

  const images = [profile1, profile2, profile3];

  return (
    <section className="feedback-section">
      <div className="head-para-feedback">
        <h1>What our Students are Saying about us</h1>
        <p>
          Special education is tailored to students with disabilites. It
          involves individualized teaching and support to meet their unique
          needs.
        </p>
      </div>
      <CarouselComponent
        heads={heads}
        paras={paras}
        names={names}
        images={images}
        countries={countries}
      />
    </section>
  );
}
