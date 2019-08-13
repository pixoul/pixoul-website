import React from "react"

/* Images */
import dribbble from "./images/companies/dribbble.svg"
import ge from "./images/companies/ge.svg"
import nike from "./images/companies/nike.svg"
import tumblr from "./images/companies/tumblr.svg"
import vans from "./images/companies/vans.svg"
import wired from "./images/companies/wired.svg"

const TrustedCompanies = () => {

  return(
    <div className="trusted-companies">
        <h3 className="trusted-title">TRUSTED BY COMPANIES LIKE:</h3>
        <div className="trusted-media">
          <img src={dribbble} alt={dribbble} />
          <img src={ge} alt={ge} />
          <img src={nike} alt={nike} />
          <img src={tumblr} alt={tumblr} />
          <img src={vans} alt={vans} />
          <img src={wired} alt={wired} />
        </div>
    </div>
  )
}


export default TrustedCompanies
