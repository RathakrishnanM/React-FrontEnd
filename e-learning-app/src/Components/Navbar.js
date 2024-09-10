import React, { useState } from "react";
import Logo from "../assets/logo-without-bg.png";
import "../Styles/navbarStyle.css";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <header className="header">
      <nav className="nav-bar">
        <a href="/iakf">
          <img src={Logo} className="logo" alt="Logo not available" />
        </a>
        <div className="nav-links">
          <a
            className={`nav-link ${active === "home" ? "visited" : ""}`}
            href="#home"
            onClick={() => setActive("home")}
          >
            Home
          </a>
          <a
            className={`nav-link ${active === "about" ? "visited" : ""}`}
            href="#about"
            onClick={() => setActive("about")}
          >
            About
          </a>
          <a
            className={`nav-link ${active === "elearning" ? "visited" : ""}`}
            href="#elearning"
            onClick={() => setActive("elearning")}
          >
            E-learning
          </a>
          <a
            className={`nav-link ${active === "contact" ? "visited" : ""}`}
            href="#footer"
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
        </div>
        <div className="btns">
          <a href="/ad">
            <button className="btn1">Log in</button>
          </a>
          <a href="/ads">
            <button className="btn2">Sign Up</button>
          </a>
        </div>
      </nav>
    </header>
  );
}
