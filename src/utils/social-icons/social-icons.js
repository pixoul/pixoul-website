import React from "react"
import "./social-icons.scss"

/* Icons */
import FacebookIcon from "utils/icons/facebook"
import TwitterIcon from "utils/icons/twitter"
import InstagramIcon from "utils/icons/instagram"
import LinkedinIcon from "utils/icons/linkedin"

const SocialIcons = ({
  theme = 'light'
}) => (
  <div className="social-icons">
    <a className="social-link" href="https://facebook.com/pixoulinc" target="_blank" rel="noopener noreferrer">
      <FacebookIcon color={theme === 'light' ? '#ffffff' : '#374050'} />
    </a>
    <a className="social-link" href="https://instagram.com/pixoul_inc" target="_blank" rel="noopener noreferrer">
      <InstagramIcon color={theme === 'light' ? '#ffffff' : '#374050'} />
    </a>
    <a className="social-link" href="https://www.linkedin.com/company/pixoul" target="_blank" rel="noopener noreferrer">
      <LinkedinIcon color={theme === 'light' ? '#ffffff' : '#374050'} />
    </a>
    <a className="social-link" href="https://twitter.com/pixoul_inc" target="_blank" rel="noopener noreferrer">
      <TwitterIcon color={theme === 'light' ? '#ffffff' : '#374050'} />
    </a>
  </div>
)

export default SocialIcons
