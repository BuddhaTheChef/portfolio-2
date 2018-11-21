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
        <div className="icon-finder-main-div">
        <img className="icon-finder" src={linkedIn} alt="linkedIn"/>
        <img className="icon-finder" src={github} alt="github"/>
        <img className="icon-finder" src={mail} alt="mail"/>
        <img className="icon-finder" src={twitter} alt="twitter"/>
        <img className="icon-finder" src={website} alt="website"/>
        </div>
      </footer>
      </div>
    );
  }
}

export default LandingPage;
