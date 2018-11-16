import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <div>
      <Link to='/' className="">Home</Link>
      <Link to='/portfolio' header>Portfolio</Link>
      <Link to='/about' name="about">About</Link>
      </div>
    );
  }
}

export default withRouter(NavBar);
