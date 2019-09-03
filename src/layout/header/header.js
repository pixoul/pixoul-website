import React, { useState, useEffect } from 'react';
/* Third-Party */
import { NavLink, Link } from "react-router-dom";
import Headroom from "react-headroom"
import injectSheet from 'react-jss'
/* Utils */
import Typography from "utils/typography/typography"
import Button from "utils/button/button"
/* Images */
import logo from "./logo.svg"

const styles = theme => ({
  headroom: {
    "& .headroom": {
      zIndex: '100 !important',
      transition: 'transform 600ms ease-in-out !important'
    }
  },
  header: {
    position: 'relative',
    height: 100,
    backgroundColor: theme.color.white,
    padding: {
      top: 0,
      right: 150,
      bottom: 0,
      left: 150
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 4px -4px rgba(0, 0, 0, 0.8)'
  },
  links: {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    "& a": {
      textDecoration: 'none',
      marginRight: 40
    }
  },
  activeLink: {
    fontWeight: 'bold'
  },
  "@media (max-width: 768px)": {
    header: {
      justifyContent: 'center',
      padding: {
        top: 0,
        right: 30,
        bottom: 0,
        left: 30
      }
    },
    links: {
      "& a": {
        marginRight: 20
      }
    }
  }
})

const Header = ({
  classes
}) => (
    <Headroom className={classes.headroom}>
      <div className={classes.header}>
        <div className={classes.links}>
          <NavLink to="/home" activeClassName={classes.activeLink}>
            <img src={logo} alt={logo} draggable="false" />
          </NavLink>
          <Typography variant="body2" color="primary" component={NavLink} to={'/about'} activeClassName={classes.activeLink}>
              About
          </Typography>
          <Typography variant="body2" color="primary" component={NavLink}to={'/talent' } activeClassName={classes.activeLink}>
              Talent
          </Typography>
          <Typography variant="body2" color="primary" component={NavLink} to={'/process'} activeClassName={classes.activeLink}>
              Process
          </Typography>
          <Typography variant="body2" color="primary" component={NavLink} to={'/faq'} activeClassName={classes.activeLink}>
              FAQ
          </Typography>
        </div>

      </div>
  </Headroom>
)

// This goes beneath the header links once its ready to be enabled
// <div className="header-action">
//   <Button component={Link} to="/contact" outline theme="secondary">Log In</Button>
// </div>

export default injectSheet(styles)(Header)
