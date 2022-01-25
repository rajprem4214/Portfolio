import React from "react";
import "./Activities.css";
const Activities = () => {
  return (
    <div className="activities">
      <label className=" numbered-heading ">
        <p className="number ">03.&nbsp;&nbsp;&nbsp;</p> Activities
      </label>
      <div className="pgrid">
        <div className="pbox">
          <span></span>
          <i className="uil uil-folder icon decoration-white"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/rajprem4214"
            target="_blank"
            className="btns"
          >
            <i class="uil uil-github-alt icon2"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/rajprem4214"
            target="_blank"
            className="btns"
          >
            <i class="uil uil-location-arrow icon2"></i>
          </a>
          <br />
          <br />
          <span className="title ">Mini Hackathon</span> <br /> <br />{" "}
          <span className="des">
            Participated in Mini Hackathon 2021.Made a decentralised Voting System
            <br /> <br />
          </span>
          <span className="linkss"> ▹Ethereum ▹Truffle ▹MetaMask ▹Web3 </span>
        </div>
        <div className="pbox">
          <i className="uil uil-folder icon"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/rajprem4214/Matdaan"
            target="_blank"
            className="btns"
          >
            <i class="uil uil-github-alt icon2"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/rajprem4214/Matdaan"
            target="_blank"
            className="btns"
          >
            <i class="uil uil-location-arrow icon2"></i>
          </a>
          <br />
          <br />
          <span className="title ">Matdaan</span> <br /> <br />{" "}
          <span className="des">
          A Decentralised voting system using Ethereum Blockchain.
            <br /> <br />
          </span>
          <span className="linkss"> ▹Ethereum ▹Blockchain ▹MetaMask ▹Web3 </span>
        </div>
        <div className="pbox">
          <i className="uil uil-folder icon"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/rajprem4214/CRUD-App"
            target="_blank"
            className="btns"
          >
            <i class="uil uil-github-alt icon2"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/rajprem4214/CRUD-App"
            target="_blank"
            className="btns"
          >
            <i class="uil uil-location-arrow icon2"></i>
          </a>
          <br />
          <br />
          <span className="title ">CRUD-App</span> <br /> <br />{" "}
          <span className="des">
          A application made using NodeJS , Express JS and MongoDB to showcase CRUD Operations.
            <br /> <br />
          </span>
          <span className="linkss"> ▹NodeJS ▹Express ▹MongoDB ▹CRUD </span>
        </div>
      </div>
    </div>
  );
};

export default Activities;
