import React from "react";
import linkedIn from "../../assets/linkedIn-copy.svg";
import github from "../../assets/github-copy.svg";
import mail from "../../assets/mail-copy.svg";
import twitter from "../../assets/twitter-copy.svg";
import website from "../../assets/website-copy.svg";

const Footer = () => (
  <footer id="footer" className="footer-div">
    <div style={{ display: "-webkit-inline-box" }}>
      <div style={{ width: "fit-content", maxWidth: "333px" }}>
        <h2 className="footer-title">Contact Me</h2>
        <div className="footer-content-div">
          <p style={{ fontSize: "17px", color: '#663399' }}>Phone Number:(123)456-7890</p>
          <p style={{ fontSize: "17xpx", color: '#663399' }}>Email: abc@def.com </p>
          <p style={{ fontSize: "17px", color: '#663399' }}>LinkedIn: cool@linkedin.com </p>
        </div>
      </div>
      <div style={{ width: "fit-content", maxWidth: "180px" }}>
        <h2 className="footer-title" style={{ marginLeft: "22px" }}>
          Location
        </h2>
        <div className="footer-content-div">
          <p style={{ fontSize: "17px", marginTop: "15px", color: '#663399' }}>
            Seattle, WA 12345 Place 92201
          </p>
        </div>
      </div>
      <div style={{ width: "fit-content", maxWidth: "290px" }}>
        <h2 className="footer-title">
          Other
        </h2>
        <div className="footer-content-div">
          <p style={{ fontSize: "17px", marginTop: "15px", color: '#663399' }}>
            This is where you put any other intresting info about yourself or
            you end with something intresting
          </p>
        </div>
      </div>
    </div>

    <div className="icon-finder-main-div">
      <a href={"https://www.linkedin.com/in/ajwietechaii/"}>
        <img className="icon-finder" src={linkedIn} alt="linkedIn" />
      </a>
      <a href={"https://github.com/BuddhaTheChef"}>
        <img className="icon-finder" src={github} alt="github" />
      </a>
      <a href={"https://www.gmail.com"}>
        <img className="icon-finder" src={mail} alt="mail" />
      </a>
      <a href={"https://www.google.com"}>
        <img className="icon-finder" src={twitter} alt="twitter" />
      </a>
      <a href={"http://www.ajwietecha.com/"}>
        <img className="icon-finder" src={website} alt="website" />
      </a>
    </div>
  </footer>
);

export default Footer;
