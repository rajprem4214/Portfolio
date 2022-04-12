import React from "react";
import Separator from "../../common/Separator/Separator";
import "./Mobile.css";
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon text-2xl" onClick={() => setIsOpen(!isOpen)}>
        <i class="uil uil-times"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option pc">
          <a href="#about me">About</a>
          <Separator />
        </div>
        <div className="mobile-option pc">
          <a href="#projects">Projects</a>
          <Separator />
        </div>
        <div className="mobile-option pc">
          <a href="#activities">Activities</a>
          <Separator />
        </div>

        <div className="mobile-option pc">
          <a href="#contact">Contact</a>
          <Separator />
        </div>

        <div className="mobile-option pc">
          <a href="/PNF">Achievements</a>
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
