import React from "react"
import { Link } from "react-router-dom"
import { useSpring, animated } from 'react-spring'
import Button from "utils/button/button"
import SocialIcons from "utils/social-icons/social-icons"

const MenuFooter = () => {

  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)'
    },
    delay: 500,
    config: {
      mass: 1,
      tension: 280,
      friction: 120
    }
  })

  return(
    <animated.ul style={props} className="menu-footer">
        <li className="footer-item">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
            </li>
          </ul>
        </li>
        <li className="footer-item">&#169; 2019 Pixoul.  All rights reserved.</li>
        <li className="footer-item">
          <SocialIcons />
        </li>
    </animated.ul>
  )
}

export default MenuFooter
