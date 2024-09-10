import React from "react";
import Navbar from "./Components/Navbar";
import HomeFirst from "./Sections/HomeFirst";
import HomeSecond from "./Sections/HomeSecond";
import About from "./Sections/About";
import TutorSubject from "./Sections/TutorSubject";
import LatestBlog from "./Sections/LatestBlog";
import Feedback from "./Sections/Feedback";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HomeFirst />
      <HomeSecond />
      <About />
      <TutorSubject />
      <LatestBlog />
      <Feedback />
      <Subscribe />
      <Footer />
    </>
  );
}
