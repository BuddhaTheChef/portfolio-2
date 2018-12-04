import React, { Component } from 'react';
import '../App.css';
import PortfolioPage from '../Portfolio/PortfolioPage';
import About from '../About/About';
import Footer from '../Footer/Footer';

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

        <PortfolioPage />
        <About />
        <Footer />
        
      </div>
    );
  }
}

export default LandingPage;
