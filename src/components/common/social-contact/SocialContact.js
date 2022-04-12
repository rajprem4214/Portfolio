import React from "react";
import "./SocialContact.css";
const SocialContact = () => {
  return (
    <div>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/p.r.6.m"
            target="_blank"
            className="a"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/prem-raj-b948701ba"
            target="_blank"
            className="b"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rajprem4214"
            target="_blank"
            className="c"
          >
            <i class="uil uil-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.snapchat.com/add/prem.rajj"
            target="_blank"
            className="d"
          >
            <i class="uil uil-snapchat-ghost"></i>
          </a>
        </li>
        <li>
          <a href="https://wa.link/eeaq9n" target="_blank" className="e">
            <i class="uil uil-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialContact;
