import React from "react";
import HeadingParaBtn from "../Components/HeadingParaBtn";
import GridTemp from "../Components/GridTemp";
import course from "../assets/icons/course-icon-fill.png";
import headset from "../assets/icons/headset-icon-fill.png";
import announcement from "../assets/icons/announcement-icon-fill.png";
import graduate from "../assets/icons/graduate-icon-fill.png";
import "../Styles/homeSecond.css";

export default function HomeSecond() {
  const icons = [course, headset, announcement, graduate];
  const heads = [
    "Online Courses",
    "24/7 Support",
    "Class Program",
    "Certificate",
  ];
  const paras = [
    "One of the main advantages of online courses is their flexibility.  Learners can access course materials and complete assignments.",
    "Online learners may encounter technical issues, questions about course materials, or other concerns at any time.  Having 24/7 support.",
    "A detailed schedule that outlines the dates and times of classes, lectures, discussions, and any synchronous (real-time) activities.",
    "Many online learning platforms offer certificates upon completion of their courses.  These certificates can be valuable.",
  ];

  const heading = "Benefits of Online learning";
  const para =
    "Online learning allows students to access course materials and lectures at their own pace and on their own schedule. This flexibility is especially benificial for individuals who have other commitments such as work, family, or other responsibilities.";
  const btn = "Learn more";

  return (
    <div className="home-second">
      <GridTemp col={2} row={2} icons={icons} headings={heads} paras={paras} />
      <HeadingParaBtn heading={heading} para={para} btn={btn} />
      <span className="ball3"></span>
      <span className="ball4"></span>
    </div>
  );
}
