import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <div className="main-div-nav">
      <div className="sub-div-nav">
      <div className="links-div">
      <p><Link className="links" to='/'>Home</Link></p>
      </div>
      <div className="links-div">
      <p><Link className="links" to='/portfolio'>Portfolio</Link></p>
      </div>
      <div className="links-div">
      <p><Link className="links" to='/about'>About</Link></p>
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
