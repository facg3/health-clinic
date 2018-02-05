import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Slider from './slider/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default App;
