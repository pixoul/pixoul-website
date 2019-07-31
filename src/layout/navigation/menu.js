import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useTransition, animated } from 'react-spring'

import MenuContainer from "./container"
import MenuItems from "./items"
import MenuFooter from "./footer"

const Menu = ({ history, toggleMenu, open, links = [] }) => {

  const transitions = useTransition(open, null, {
    from: {
      // opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
      life: '0%'
    },
    enter: item => [{
      // opacity: 1,
      transform: 'translate3d(0, 0%, 0)',
      life: '100%'
    }],
    leave: item => async (next, cancel) => {
      await next({life: '0%'})
      await next({transform: 'translate3d(0, -100%, 0)'})
      // await next({opacity: 0})
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
