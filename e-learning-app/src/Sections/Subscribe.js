import React from "react";
import "../Styles/subscribe.css";

export default function Subscribe() {
  return (
    <section className="subscribe-section">
      <h1>Subscribe our Newsletter</h1>
      <p>
        Online learning allows students to access course materials and lectures
        at their own pace and on their own schedule. This flexibility is
        especially beneficial.
      </p>
      <div className="subscribe-input-container">
        <input type="text" placeholder="Enter your email" />
        <button>Submit</button>
      </div>
    </section>
  );
}
