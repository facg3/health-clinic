import React, { Component } from 'react';

import './AboutStyle.css';

class About extends Component {
  render () {
    return (
      <div className='aboutUs'>
      <h1>About Us</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br/>
       Lorem Ipsum has been the industrys standard dummy text ever since the 1550,<br/>
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br/>
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     </div>
    )
  }
}

export default About;
