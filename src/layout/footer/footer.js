import React from "react"
import "./footer.scss"
/* Third-Party */
import { Link } from "react-router-dom";
/* Utils */
import Typography from "utils/typography/typography"
import SocialIcons from "utils/social-icons/social-icons"
/* Images */
import logo from "./logo.svg"

const Footer = () => {

  return(
    <footer className="footer">
      <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt={logo} className="brand-logo"/>
            <Typography variant="body2" color="white" opacity={0.5}>
              We match industry leaders with top-tier designers, developers, and project managers on demand.
            </Typography>
          </div>

          <div className="footer-sitemap">
            <div className="sitemap-list">
              <Typography variant="caption" weight="bold">Pixoul, Inc.</Typography>
              <Typography variant="caption" component={Link} to={'/home'}>Home</Typography>
              <Typography variant="caption" component={Link} to={'/about'}>About</Typography>
              <Typography variant="caption" component={Link} to={'/faq'}>FAQ</Typography>
            </div>

            <div className="sitemap-list">
              <Typography variant="caption" weight="bold">Solution</Typography>
              <Typography variant="caption"component={Link} to={'/talent'}>Talent</Typography>
              <Typography variant="caption" component={Link} to={'/process'}>Process</Typography>
            </div>

            <div className="sitemap-list">
              <Typography variant="caption" weight="bold">Resources</Typography>
              <Typography variant="caption" component={Link} to={'/blog'}>Blog</Typography>
              <Typography variant="caption" component={Link} to={'/contact/partnership-program'}>Referrals</Typography>
            </div>
          </div>

          <div className="footer-social">
            <Typography variant="caption" opacity={0.5}>Follow Us:</Typography>
            <div className="social-item"><SocialIcons /></div>
          </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <Typography variant="overline" opacity={0.5} component={Link} to={'/terms'}>Terms and Conditions</Typography>
          <Typography variant="overline" opacity={0.5} component={Link} to={'/privacy-policy'}>Privacy Policy</Typography>
        </div>
        <Typography variant="overline" opacity={0.5}>
          &#169; 2019 Pixoul, Inc.  All rights reserved.
        </Typography>
      </div>

    </footer>
  )
}

export default Footer
