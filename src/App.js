import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Lander from './components/Lander/Lander';
import About from './components/About/About';
import MERN from './components/MERN/MERN';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Lander />
        <About />
        <MERN />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
