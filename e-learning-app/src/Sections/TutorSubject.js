import React from "react";
import bulb from "../assets/icons/lightbulb-icon.png";
import bulbF from "../assets/icons/lightbulb-icon-fill.png";
import calculate from "../assets/icons/calculator-icon.png";
import calculateF from "../assets/icons/calculator-icon-fill.png";
import msg from "../assets/icons/msg-icon.png";
import msgF from "../assets/icons/msg-icon-fill.png";
import medal from "../assets/icons/medal-icon.png";
import medalF from "../assets/icons/medal-icon-fill.png";
import "../Styles/tutorSubject.css";
import FlexTemp from "../Components/FlexTemp";

export default function TutorSubject() {
  const icons = [bulb, calculate, msg, medal];
  const filledIcons = [bulbF, calculateF, msgF, medalF];
  const headings = ["Computer Science", "Engineering", "History", "Humanities"];
  const paras = [
    "This theoretical branch of computer science deals with formal models of computation, including automata theory,",
    "This field bridges the gap between computer science and electrical engineering.  Computer engineers desing,",
    "This is the study of how history has been written and interpreted over time.  Historiography examines the changing.",
    "Literature examines written works, including novels, poetry, plays, and essays, to explore themes, styles.",
  ];

  return (
    <section id="elearning" className="tutor-subject-section">
      <div className="heading-para">
        <h2>Our Tutor Subject</h2>
        <p>
          Education is tailored to Students with disabilities. It involves
          individualized teaching and support to meet their unique needs
        </p>
      </div>
      <FlexTemp
        icons={icons}
        filledIcons={filledIcons}
        headings={headings}
        paras={paras}
      />
      <a href="/details" className="see-more-details">
        See All Subjects
      </a>
      <span className="side-round"></span>
      <span className="ball6"></span>
    </section>
  );
}
