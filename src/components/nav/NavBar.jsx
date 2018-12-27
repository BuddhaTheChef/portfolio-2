import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <div className="main-div-nav">
        <div className="sub-div-nav">
          <div className="links-div">
            <p style={{ marginTop: '12px' }}>
              <a href="#home" className="links">
                Home
              </a>
            </p>
          </div>
          <div className="links-div">
            <p style={{ marginTop: '12px' }}>
              <a href="#portfolio" className="links">
                Portfolio
              </a>
            </p>
          </div>
          <div className="links-div">
            <p style={{ marginTop: '12px' }}>
              <a href="#about" className="links">
                About
              </a>
            </p>
          </div>
          <div className="links-div">
            <p style={{ marginTop: '12px' }}>
              <a href="#footer" className="links">
                Contact
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
