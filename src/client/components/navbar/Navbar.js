import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className='navbar' >
        <div className='logo'>
          <img src='/assets/logo.png' className='logo' alt='star' />
          <h1>Gene Med Labs</h1>
        </div>
        <ul className='firstUl'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Doctors</a></li>
          <li><a href='#aboutUs'>About Us</a></li>
          <li><a href='#contactUs'>Coutact</a></li>
        </ul>
        <ul className='secondUl'>
          <li><a href='#'><i className='fab fa-facebook-f'></i></a></li>
          <li><a href='#'><i className='fab fa-twitter'></i></a></li>
          <li><a href='#'><i className='fab fa-google-plus-g'></i></a></li>
        </ul>
        <div className='login'>
          <a href='#'>Login with Facebook</a>
        </div>
      </div>
    );
  }
}
export default Navbar;
