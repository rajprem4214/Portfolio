import React from "react";

import "./Skill.css";
const Skill = () => {
  return (
    <div className="project">
      <label className=" numbered-heading ">
        <p className="number ">02.&nbsp;&nbsp;&nbsp;</p> Projects
      </label>
      <div className="pimage">
        <img
          src="https://i.ibb.co/KL6rqyV/workflow.png"
          alt="Picture by Daniel Linc"
        />
      </div>
      <p className="project-overline ">Featured Project</p>
      <h3 className="project-title">MatDaan</h3>
      <div className="project-description">
        <p className="parag">
          A decentralized voting system where a user can walk into a government
          authorized center and cast their vote using the proposed portal.
          <br />
          <p className="p-link">
            <a href="https://github.com/rajprem4214" target="_blank">
              <i class="uil uil-github-alt"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>

            <a href="" target="_blank">
              <i class="uil uil-location-arrow"></i>
            </a>
          </p>
        </p>
      </div>
      <ul className="tech-list">
        <li>Ethereum</li>
        <li>Truffle</li>
        <li>Metamask</li>
        <li>Web3</li>
      </ul>

      <div className="pimage pimage2">
        <img
          src="https://i.ibb.co/6PhXKzh/maxresdefault.jpg"
          alt="Picture by Daniel Linc"
        />
      </div>
      <p className="project-overline project-overline2">Featured Project</p>
      <h3 className="project-title project-title2">Weather App</h3>
      <div className="project-description project-description2">
        <p className="parag parag2">
          React App that tells weather of a city.
          <br />
          It fetches data from a weather API and displays on frontend.
          <br />
          <p className="p-link p-link2">
            <a
              href="https://github.com/rajprem4214/Weather-App"
              target="_blank"
            >
              <i class="uil uil-github-alt"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>

            <a href="" target="_blank">
              <i class="uil uil-location-arrow"></i>
            </a>
          </p>
        </p>
      </div>
      <ul className="tech-list tech-list2">
        <li>VS Code</li>
        <li>ReactJS</li>
        <li>NodeJs</li>
        <li>API</li>
      </ul>

      <div className="pimage pimage3">
        <img
          src="https://i.ibb.co/LQz8R2J/68747470733a2f2f692e6779617a6f2e636f6d2f653766613564303565663738303634313962343839376563633636386130.png"
          alt="Picture by Daniel Linc"
        />
      </div>
      <p className="project-overline project-overline3">Featured Project</p>
      <h3 className="project-title">Decentragram</h3>
      <div className="project-description">
        <p className="parag">
          Instagram On Ethereum Blockchain
          <br />
          Pictures get stored on IPFS and uploader gets a tip of 0.1 ether.
          <br />
          <p className="p-link">
            <a
              href="https://github.com/rajprem4214/Decentragram"
              target="_blank"
            >
              <i class="uil uil-github-alt"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>

            <a href="" target="_blank">
              <i class="uil uil-location-arrow"></i>
            </a>
          </p>
        </p>
      </div>
      <ul className="tech-list">
        <li>Metamask</li>
        <li>ReactJS</li>
        <li>Ethereum</li>
        <li>Truffle</li>
      </ul>

      <button>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <a href="https://github.com/rajprem4214" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>

                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <span>
          <a href="https://github.com/rajprem4214">More</a>
        </span>
      </button>
    </div>
  );
};

export default Skill;
