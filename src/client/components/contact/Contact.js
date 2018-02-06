import React, { Component } from 'react';

import './ContactStyle.css';

class Contact extends Component {
  render () {
    return (
      <div className='contactUs'>
      <footer className='contactUs'>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Oppening Hours</h4></li>
    <li><a className="generic-anchor footer-list-anchor">Monday - Friday</a></li>
    <li><a className="generic-anchor footer-list-anchor">9:00 am - 6:00 pm</a></li>
    <li><a className="generic-anchor footer-list-anchor">Saturday</a></li>
    <li><a className="generic-anchor footer-list-anchor">9:00 am - 4:00 pm</a></li>
    <li><a className="generic-anchor footer-list-anchor">Sunday</a></li>
    <li><a className="generic-anchor footer-list-anchor">9:00 am - 2:00 pm</a></li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">The Gift Selection</h4></li>


    <li><a className="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
    <li><a className="generic-anchor footer-list-anchor">HOME DECOR</a></li>
    <li><a className="generic-anchor footer-list-anchor">MUGS</a></li>
    <li><a className="generic-anchor footer-list-anchor">PET LOVER</a></li>
    <li><a className="generic-anchor footer-list-anchor">HANDBAGS & JEWELRY</a></li>
  </ul>
  
  <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">Connect With Us</span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">
<i className="fa fa-copyright" role="copyright">

</i> 2015 Pavilion in Bergen, NY <span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="footer-bottom-wrapper">
    <a className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>
     </div>
    )
  }
}

export default Contact;
