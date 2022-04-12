import React from "react";
import "./Web.css";
const Web = () => {
  return (
    <div className="web">
      <div className="web-option pc">
        <a href="#about me">About</a>
      </div>
      <div className="web-option pc">
        <a href="#projects">Projects</a>
      </div>
      <div className="web-option pc">
        <a href="#activities">Activities</a>
      </div>

      <div className="web-option pc">
        <a href="#contact">Contact</a>
      </div>

      <div className="web-option pc">
        <a href="/PNF">Achievements</a>
      </div>
    </div>
  );
};

export default Web;
