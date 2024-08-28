import React, { useContext } from "react";
import { InputContext } from "../App";

export default function InputField() {
  const handleCityName = useContext(InputContext);

  const flexStyle = {
    width: "470px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const inputStyle = {
    width: "400px",
    height: "30px",
    margin: "0",
    outline: "none",
    paddingLeft: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid lightgrey",
  };

  const btnStyle = {
    width: "50px",
    height: "30px",
    fontSize: "14px",
    color: "white",
    letterSpacing: "1px",
    backgroundImage:
      "linear-gradient( 109.6deg,  rgba(61,131,97,1) 11.2%, rgba(28,103,88,1) 91.1% )",
    border: "none",
    borderRadius: "3px",
  };

  const handleInput = () => {
    const input = document.querySelector(".cityName");
    const inputVal = input.value;
    handleCityName(inputVal);
  };

  return (
    <div style={flexStyle}>
      <input
        type="text"
        style={inputStyle}
        placeholder="City Name"
        className="cityName"
      ></input>
      <button type="button" onClick={handleInput} style={btnStyle}>
        Find
      </button>
    </div>
  );
}
