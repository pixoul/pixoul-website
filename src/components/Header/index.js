import React from 'react';
import logo from '../../images/logo.png';
import HamburgerMenuImg from '../../images/HamburgerMenu.png';
import './header.css';

const Header = (props) => {
  return <div className="header">
    <img className="logo" src={logo} alt="logoTitle" />
    <button className='contactus-button'>
      Contact Us
    </button>
    <button className="hamburger-button">
      <img src={HamburgerMenuImg} alt="Hamburger" />
    </button>
  </div>;
}

export { Header };