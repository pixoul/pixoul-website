import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useTransition, animated } from 'react-spring'

import MenuContainer from "./menu-container"
import MenuItems from "./menu-items"
import MenuFooter from "./menu-footer"

const Menu = ({ history, toggleMenu, open, links = [] }) => {

  const transitions = useTransition(open, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0%, 0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)'
    }
  })


  useEffect(() => {
    history.listen((location, action) => {
      toggleMenu(false)
    });
  })

  return transitions.map(({ item, key, props }) => item && (
    <animated.div key={key} style={props} className="menu">
      <MenuContainer>
        <MenuItems items={links} />
        <MenuFooter />
      </MenuContainer>
    </animated.div>
  ))

}

export default withRouter(Menu)
