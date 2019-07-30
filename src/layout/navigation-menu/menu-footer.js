import React from "react"
import { Link } from "react-router-dom"
import Button from "utils/button/button"

const MenuFooter = () => {

  return(
    <div className="menu-footer">
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
    </div>
  )
}

export default MenuFooter
