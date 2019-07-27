import React, { useEffect } from "react"
import cn from "classnames"
import { Link, withRouter } from "react-router-dom";
import { scaleRotate as Menu } from 'react-burger-menu'
import { Button } from "shards-react";

import { connect } from 'react-redux'
import { toggleMenu } from "layout/side-menu/actions"

import "./side-menu.scss"

function SideMenu({ history, open, toggleMenu, children, links = []}){

  const classes = cn('menu-close', {
    'visible': open
  })

  useEffect(() => {
    history.listen((location, action) => {
      toggleMenu(false)
    });
  })

  return(
    <div id="outer-container" className="app-container">
      <Menu
        isOpen={open}
        right
        scaleDown
        onStateChange={(state) => toggleMenu(state.isOpen)}
        disableAutoFocus
        noOverlay
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        width={380}
        className={ "side-menu" }
      >

        <Button theme="light" className={classes} onClick={() => toggleMenu(false)}>
         <span>X</span>
        </Button>


        {links.map((item, i) => (
          <Link key={i} className="menu-item" to={item.route}>{item.label}</Link>
        ))}

        <div className="menu-footer">
          <div className="menu-cta">
            <Button squared theme="light" tag={Link} to="/contact">Contact Us</Button>
          </div>

          <ul className="list-unstyled">
            <li>&#169; 2019 Pixoul.  All rights reserved.</li>
            <li>
              <ul className="list-inline">
                <li className="list-inline-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><Link to="/terms-of-service">Terms of Service</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </Menu>

      <main id="page-wrap">
        {children}
      </main>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.menu.open,
    links: state.menu.links
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMenu: (open) => {
      dispatch(toggleMenu(open))
    }
  }
}

const ToggleSideMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideMenu))

export default ToggleSideMenu
