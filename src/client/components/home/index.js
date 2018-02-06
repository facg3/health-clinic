import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';
import About from '../about/About';
import Doctors from '../doctors/Doctors';
import Contact from '../contact/Contact';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <About />
        <Doctors />
        <Contact />
      </div>
    );
  }
}

export default Home;
