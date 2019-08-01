import React from "react"
import "./social-icons.scss"


import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import linkedin from "./images/linkedin.svg"

const SocialIcons = () => {

  return(
    <div className="social-icons">
      <img src={facebook} alt={facebook} className="social-icon" />
      <img src={instagram} alt={instagram} className="social-icon" />
      <img src={linkedin} alt={linkedin} className="social-icon" />
    </div>
  )
}

export default SocialIcons
