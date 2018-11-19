import React, { Component } from 'react';
import '../App.css';

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
      </div>
    );
  }
}

export default LandingPage;
