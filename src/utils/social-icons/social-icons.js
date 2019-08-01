import React from "react"
import "./social-icons.scss"


import facebookDark from "./images/facebook-dark.svg"
import instagramDark from "./images/instagram-dark.svg"
import linkedinDark from "./images/linkedin-dark.svg"

import facebookLight from "./images/facebook-light.svg"
import instagramLight from "./images/instagram-light.svg"
import linkedinLight from "./images/linkedin-light.svg"

const SocialIcons = ({
  theme = 'light'
}) => {

  const facebook = theme === 'light' ? facebookLight : facebookDark
  const instagram = theme === 'light' ? instagramLight : instagramDark
  const linkedin = theme === 'light' ? linkedinLight : linkedinDark

  return(
    <div className="social-icons">
      <a className="social-link" href="https://facebook.com/pixoulinc" target="_blank">
        <img src={facebook} alt={facebook} className="social-icon" />
      </a>
      <a className="social-link" href="https://instagram.com/pixoul_inc" target="_blank">
        <img src={instagram} alt={instagram} className="social-icon" />
      </a>
      <a className="social-link" href="https://www.linkedin.com/company/pixoul" target="_blank">
        <img src={linkedin} alt={linkedin} className="social-icon" />
      </a>
    </div>
  )
}

export default SocialIcons
