import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';
import About from '../about/About';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <About />
      </div>
    );
  }
}

export default Home;
