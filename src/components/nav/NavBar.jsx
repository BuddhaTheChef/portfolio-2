import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <div className="main-div-nav">
      <div className="sub-div-nav">
      <Link to='/' className="links">Home</Link>
      <Link to='/portfolio' header>Portfolio</Link>
      <Link to='/about' name="about">About</Link>
      </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
