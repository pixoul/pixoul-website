import React from "react"
import cn from "classnames"
import { Link } from "react-router-dom";
import Button from "utils/button/button"

import "./footer.scss"

const Footer = () => {

  return(
    <footer className="footer">
      <div className="footer-side sitemap">
        <ul className="list-collection">
          <li className="list-title">Pixoul, Inc.</li>
          <li className="list-item"><Link to={'/about'}>About</Link></li>
          <li className="list-item"><Link to={'/work'}>Work</Link></li>
          <li className="list-item"><Link to={'/capabilities'}>Capabilities</Link></li>
        </ul>

        <ul className="list-collection">
          <li className="list-title">Capabilities</li>
          <li className="list-item"><Link to={'/capabilities/strategy'}>Strategy</Link></li>
          <li className="list-item"><Link to={'/capabilities/design'}>Design</Link></li>
          <li className="list-item"><Link to={'/capabilities/technology'}>Technology</Link></li>
        </ul>
      </div>
      <div className="footer-side">
        <ul className="list-collection">
          <li className="list-subtitle">We average a 211% increase on ROI.</li>
          <li className="list-item">See how we help ambitous brands use design thinking to dominate digital.</li>
          <li className="list-item"><Button theme="primary" tag={Link} to={'/contact'}>Contact Us</Button></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
