import React from "react";
import InputField from "./InputField";
import logo from "../assets/logo.png";

export default function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#48484A",
    padding: "5px",
  };

  const emptyDivStyle = {
    width: "95px",
    height: "40px",
  };

  const imgStyle = {
    width: "95px",
    height: "40px",
    margin: "0",
  };

  return (
    <>
      <header style={headerStyle}>
        <div>
          <img src={logo} style={imgStyle}></img>
        </div>
        <InputField />
        <div style={emptyDivStyle}></div>
      </header>
    </>
  );
}
