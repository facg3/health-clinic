import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default Home;
