import React, { Component } from 'react';
import '../App.css';
import linkedIn from '../../assets/linkedIn-copy.svg'
import github from '../../assets/github-copy.svg'
import mail from '../../assets/mail-copy.svg'
import twitter from '../../assets/twitter-copy.svg'
import website from '../../assets/website-copy.svg'

class LandingPage extends Component {
  render() {
    return (
      <div className="super-div">
      <div id="home" className="main-landing-div">
      <div className="foreground">
      <h1 className="landing-page-main-title">Aj's Portfolio</h1>
      <h2 className="landing-page-skills">- React - Redux - Angular - Node - Express - SQL - Firebase -</h2>
      </div>
      </div>
      <div id="portfolio" className="main-portfolio-div">
      <h1 className="landing-page-main-title">ALL Portfolio</h1>
     
      <div id='wrapper'>
       <div id='image'>
       <div>
         <h1>proj 1</h1>
         <p>some deeets here</p>
       </div>
       <div>
       <h1>proj 2</h1>
         <p>some deeets here</p>
       </div>
       </div>
     </div>
     </div>

      <div id="about" className="main-about-div">
      <h1 className="landing-page-main-title">About me</h1>
      </div>
      <footer className="footer-div">
        <h2 className="footer-title">Contact Me</h2>
        <h2 className="footer-title">Location</h2>
        <h2 className="footer-title">Other</h2>
        <div className="icon-finder-main-div">
        <a href={"https://www.linkedin.com/in/ajwietechaii/"}><img className="icon-finder" src={linkedIn} alt="linkedIn"/></a>
        <a href={"https://github.com/BuddhaTheChef"}><img className="icon-finder" src={github} alt="github"/></a>
        <a href={"https://www.gmail.com"}><img className="icon-finder" src={mail} alt="mail"/></a>
        <a href={"https://www.google.com"}><img className="icon-finder" src={twitter} alt="twitter"/></a>
        <a href={"http://www.ajwietecha.com/"}><img className="icon-finder" src={website} alt="website"/></a>
        </div>
      </footer>
      </div>
    );
  }
}

export default LandingPage;
