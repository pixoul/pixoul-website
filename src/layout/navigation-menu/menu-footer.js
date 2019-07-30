import React from "react"
import { Link } from "react-router-dom"
import { useSpring, animated } from 'react-spring'
import Button from "utils/button/button"

const MenuFooter = () => {

  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
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
    <div className="menu-footer">
      <animated.div style={props}>
        <ul className="list-collection light">
          <li className="list-title">Phone</li>
          <li className="list-item"><a href="tel:6169149356">(616) 914-9356</a></li>
          <li className="list-title">Email</li>
          <li className="list-item"><a href="mailto:hello@pixoulinc.com">hello@pixoulinc.com</a></li>
        </ul>

        <div className="menu-cta">
          <Button theme="primary" tag={Link} to="/contact">Contact Us</Button>
        </div>

        <ul className="list-unstyled">
          <li className="list-item">&#169; 2019 Pixoul.  All rights reserved.</li>
          <li className="list-item">
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item"><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </li>
        </ul>
      </animated.div>
    </div>
  )
}

export default MenuFooter
