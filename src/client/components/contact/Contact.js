import React, { Component } from 'react';

import './ContactStyle.css';

class Contact extends Component {
  render () {
    return (
      <div className='contactUs'>
      <section className='contactUs'>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Oppening Hours</h4></li>
    <li><a className="footer-list-anchor">Monday - Friday</a></li>
    <li><a className="footer-list-anchor">9:00 am - 6:00 pm</a></li>
    <li><a className="footer-list-anchor">Saturday</a></li>
    <li><a className="footer-list-anchor">9:00 am - 4:00 pm</a></li>
    <li><a className="footer-list-anchor">Sunday</a></li>
    <li><a className="footer-list-anchor">9:00 am - 2:00 pm</a></li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Contact Us</h4></li>
    <li><a className="footer-list-anchor">Gaza</a></li>
    <li><a className="footer-list-anchor">+972591234567</a></li>
    <li><a className="footer-list-anchor">Hebron</a></li>
    <li><a className="footer-list-anchor">+972591234567</a></li>
    <li><a className="footer-list-anchor">Juresalem</a></li>
    <li><a className="footer-list-anchor">+972591234567</a></li>
  </ul>
</section>
     </div>
    )
  }
}

export default Contact;
