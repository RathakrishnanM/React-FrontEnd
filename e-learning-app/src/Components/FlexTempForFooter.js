import React from "react";
import "../Styles/flexTempForFooter.css";

function FlexTempForFooter({ head, contents }) {
  return (
    <div className="footer-flex-links">
      <h1>{head}</h1>
      {contents.map((val) => (
        <a href="/footerLink">{val}</a>
      ))}
    </div>
  );
}

export default FlexTempForFooter;
