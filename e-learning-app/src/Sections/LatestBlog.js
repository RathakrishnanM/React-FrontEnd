import React from "react";
import flexImg1 from "../assets/images/flex-img1.jpg";
import flexImg2 from "../assets/images/flex-img2.jpg";
import flexImg3 from "../assets/images/flex-img3.jpg";
import "../Styles/latestBlog.css";
import FlexTempForBlog from "../Components/FlexTempForBlog";

export default function LatestBlog() {
  const flexImgs = [flexImg1, flexImg2, flexImg3];
  const heads = [
    "Teaching Children English online Courses",
    "Teaching Computer Science online Courses",
    "Teaching Children History online Courses",
  ];

  const paras = [
    "Engage children in interactive activites that encourage speaking, listening and participation.  These can include role-playing.",
    "Clearly outline the learning objectives of your course.  What specific computer science concepts, programming languages.",
    "Tailor your history course to the age and grade level of the children you're teaching.  Younger children might focus on simpler.",
  ];

  const scores = ["796", "573", "321"];

  return (
    <section className="latest-blog-section">
      <div className="head-para">
        <h1>Latest Blog Post</h1>
        <p>
          Technology is increasingly integrated into education. You can explore
          how to use educational technology
        </p>
      </div>
      <FlexTempForBlog
        imgs={flexImgs}
        heads={heads}
        scores={scores}
        paras={paras}
      />
      <a href="/details" className="see-more-details">
        See All Subjects
      </a>
      <span className="ball7"></span>
      <span className="ball8"></span>
      <span className="side-round-blog"></span>
    </section>
  );
}
