import React from "react";
import Scramble from 'react-scramble';
import logo from "../../images/logo.svg";

import "./header.css";

const Header = props => {
  const { isAnimated } = props;
  let link = '#Contact';
  if(!props.isHome) {
    link = '/' + link; 
  }
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logoTitle" />
      <a className="pixoul_button contactus-button" href={link}>
        {
          isAnimated ? <Scramble
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
          /> : (
            <span>Contact Us</span>
          )
        }
      </a>
      <button
        className="pixoul_button hamburger-button"
        onClick={props.onMenuPressed}
      >
        <div>
          <span id="span-1"></span>
          <span id="span-2"></span>
          <span id="span-3"></span>
        </div>
      </button>
    </div>
  );
};

export { Header };
