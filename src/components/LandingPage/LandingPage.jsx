import React, { Component } from 'react';
import '../App.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="super-div">
      <div className="main-landing-div">
      <div className="foreground">
      <h1 className="landing-page-main-title">Aj's Portfolio</h1>
      <h2 className="landing-page-skills">- React - Redux - Angular - Node - Express - SQL - Firebase -</h2>
      </div>
      </div>
      <div className="main-portfolio-div">
      <h1 className="landing-page-main-title">ALL Portfolio</h1>
      </div>
      <div className="main-about-div">
      <h1 className="landing-page-main-title">About me</h1>
      </div>
      </div>
    );
  }
}

export default LandingPage;
