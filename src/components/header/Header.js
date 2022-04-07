import React, { useState } from "react";
import "./header.css";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header sticky">
      <div className=" mx-10 text-xl pc big-logo neon">
        <a href="/" className="y flux">
          <i class="uil uil-bolt-alt"> </i>
        </a>
        P R E M
      </div>

      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <a href="#">
              <i class="uil uil-bars text-2xl "></i>
            </a>
          </div>
        </div>

        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Header;
