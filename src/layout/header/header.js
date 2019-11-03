import React from 'react';
/* Third-Party */
import { NavLink, Link } from "react-router-dom"
import * as typeformEmbed from '@typeform/embed'
import injectSheet from 'react-jss'
/* Utils */
import Typography from "utils/typography/typography"
import Button from "utils/button/button"
/* Images */
import logo from "./logo.svg"

const styles = theme => ({
  header: {
    position: 'fixed',
    zIndex: 100,
    height: 65,
    top: 0,
    right: 0,
    left: 0,
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
      height: 120,
      justifyContent: 'center',
      flexDirection: 'column',
      padding: {
        top: 30,
        right: 30,
        bottom: 0,
        left: 30
      }
    },
    links: {
      borderBottom: '1px solid #dddddd',
      "& a": {
        marginRight: 20
      }
    }
  }
})

const Header = ({
  classes
}) => {
  const openHireForm = () => {
    typeformEmbed.makePopup('https://pixoulinc.typeform.com/to/sMpWk0', {
        mode: 'popup',
        autoOpen: true,
        hideScrollbars: true
    })
  }

  return(
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

      <Button component="a" theme="primary" size="xs" onClick={openHireForm}>Hire the perfect Match</Button>

    </div>
  )
}


export default injectSheet(styles)(Header)
