import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';
import Doctors from '../doctors/Doctors';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <Doctors />
      </div>
    );
  }
}

export default Home;
