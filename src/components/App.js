import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import './App.css';
import NavBar from './nav/NavBar'
import LandingPage from '../components/LandingPage/LandingPage';
// import Portfolio from '../components/portfolio/Portfolio';
// import About from '../components/about/About';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      {/* <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} /> */}
      </div>
      </Router>
    );
  }
}

export default App;
