import React from "react";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import "./products.css";

const cn = require('classnames');
class SideBar extends React.Component {
  
  render() {
    const titleTimeout = {
      appear: 900,
      enter: 1950,
      exit: 50,
    };

    const textTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };
    
    return (
      <div className="sidebar">
        <div className="sidebar-item">
          <h4>The Ask</h4>
          <p>
            Create and brand a business marketpalce, including a full-service
          </p>
        </div>
        <div className="sidebar-item">
          <h4>Services</h4>
          <p>
            UX Research & Analysis
            <br/>
            High-Fidelity UI Design
            <br/>
            User Testing
            <br/>
            Front-End Development
          </p>
        </div>
        <div className="sidebar-item">
          <h4>Tools</h4>
          <p>
            Balsamiq
            <br/>
            Sketch
            <br/>
            InVision
            <br/>
            Atom
          </p>
        </div>
      </div>
    );
  }
}

export default SideBar;
