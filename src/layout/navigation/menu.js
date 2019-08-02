import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useTransition, animated } from 'react-spring'

import MenuItems from "./items"
import MenuFooter from "./footer"
import MenuBrand from "./brand"
import MenuIcon from "./icon"

const Menu = ({
  history,
  toggleMenu,
  open,
  links = []
}) => {

  const transitions = useTransition(open, null, {
    from: {
      transform: 'translate3d(0, -100%, 0)',
      life: '0%'
    },
    enter: item => [{
      transform: 'translate3d(0, 0%, 0)',
      life: '100%'
    }],
    leave: item => async (next, cancel) => {
      await next({life: '0%'})
      await next({transform: 'translate3d(0, -100%, 0)'})
    }
  })


  useEffect(() => {
    history.listen((location, action) => toggleMenu(false));
  })

  const closeMenu = () => toggleMenu(!open)

  return transitions.map(({ item, key, props }) => item && (
    <animated.div key={key} style={props} className="menu lg-device">
      <div className="menu-container background">
        <MenuIcon onClick={closeMenu}/>
        <div className="menu-body">
          <div>
            <MenuItems items={links} />
            <MenuBrand />
          </div>

          <MenuFooter />
        </div>
      </div>
    </animated.div>
  ))

}

export default withRouter(Menu)
