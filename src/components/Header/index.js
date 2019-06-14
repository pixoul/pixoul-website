import React from "react";
import Scramble from 'react-scramble'
import logo from "../../images/logo.svg";
import HamburgerMenuImg from "../../images/HamburgerMenu.png";
import "./header.css";

const Header = props => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logoTitle" />
      <button className="pixoul_button contactus-button">
        <Scramble
          text="Contact Us"
          mouseEnterTrigger="restart"
          steps={[
            {
              roll: 3,
              action: '+',
              type: 'all',
            },
            {
              action: '-',
              type: 'forward',
            },
          ]}
        />
      </button>
      <button
        className="pixoul_button hamburger-button"
        onClick={props.onMenuPressed}
      >
        <img src={HamburgerMenuImg} alt="Hamburger" />
      </button>
    </div>
  );
};

export { Header };
