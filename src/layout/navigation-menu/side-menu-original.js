import React, { useEffect } from "react"
import cn from "classnames"
import { withRouter } from "react-router-dom";
import { scaleRotate as Menu } from 'react-burger-menu'
import { Button } from "shards-react";

import MenuItems from "layout/side-menu/menu-items"
import MenuFooter from "layout/side-menu/menu-footer"

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

        <MenuItems items={links} />

        <Button theme="light" className={classes} onClick={() => toggleMenu(false)}>
         <span>X</span>
        </Button>

        <MenuFooter />

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
