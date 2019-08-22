import React from "react"
import "./footer.scss"
/* Third-Party */
import { Link } from "react-router-dom";
/* Utils */
import SocialIcons from "utils/social-icons/social-icons"
/* Images */
import logo from "./logo.svg"

const Footer = () => {

  return(
    <footer className="footer">
      <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt={logo} className="brand-logo"/>
            <p className="brand-text">We match industry leaders with top-tier, designers, developers, and project managers on demand.</p>
          </div>

          <div className="footer-sitemap">
            <ul className="sitemap-list">
              <li className="sitemap-title">Pixoul, Inc.</li>
              <li className="sitemap-item"><Link to={'/home'}>Home</Link></li>
              <li className="sitemap-item"><Link to={'/about'}>About</Link></li>
              <li className="sitemap-item"><Link to={'/faq'}>FAQ</Link></li>
            </ul>

            <ul className="sitemap-list">
              <li className="sitemap-title">Solution</li>
              <li className="sitemap-item"><Link to={'/talent'}>Talent</Link></li>
              <li className="sitemap-item"><Link to={'/process'}>Process</Link></li>
            </ul>

            <ul className="sitemap-list">
              <li className="sitemap-title">Resources</li>
              <li className="sitemap-item"><Link to={'/blog'}>Blog</Link></li>
              <li className="sitemap-item"><Link to={'/contact/partnership-program'}>Referrals</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <ul className="social-list">
              <li className="social-title">Follow Us:</li>
              <li className="social-item"><SocialIcons /></li>
            </ul>
          </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <Link to="/terms" className="footer-link">Terms and Conditions</Link> /  <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
        <div className="footer-copy">
          &#169; 2019 Pixoul, Inc.  All rights reserved.
        </div>
      </div>

    </footer>
  )
}

export default Footer
