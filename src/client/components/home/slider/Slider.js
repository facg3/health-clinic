import React, { Component } from 'react';
import './slider.css';
import { Slide } from 'react-slideshow-image';

const images = [
  './assets/1.jpg',
  './assets/2.jpg',
  './assets/3.jpg',
  './assets/4.jpg'
];
class Slider extends Component {
  render() {
    return (
      <div>
        <Slide
          images={images}
          duration='5000'
          transitionDuration='1000'
        />
        <div className='button'><a href='#doctors'> BOOK APPOINTMENT </a></div>
      </div>
    );
  }

}

export default Slider;
