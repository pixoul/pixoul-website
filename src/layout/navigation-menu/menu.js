import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useSpring, animated, interpolate } from 'react-spring'

import MenuContainer from "./menu-container"
import MenuItems from "./menu-items"
import MenuFooter from "./menu-footer"

const Menu = ({ children, history, toggleMenu, open, links }) => {

  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: {
      opacity: open === true ? 1 : 0,
      transform: 'translate3d(0, 0, 0)'
    }
  })

  useEffect(() => {
    history.listen((location, action) => {
      toggleMenu(false)
    });
  })

  return (
    <div>
     <animated.div
      style={{
        ...props
      }}
     >
        <MenuContainer>
          <MenuItems items={links} />

          <MenuFooter />
        </MenuContainer>
     </animated.div>

     <main className="main-content">
       {children}
     </main>
    </div>
  )

}

export default withRouter(Menu)
