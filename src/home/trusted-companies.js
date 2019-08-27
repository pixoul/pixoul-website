import React from "react"
/* Utils */
import Typography from "utils/typography/typography"
/* Images */
import disney from "./images/companies/disney.svg"
import airbnb from "./images/companies/airbnb.svg"
import amazon from "./images/companies/amazon.svg"
import gp from "./images/companies/gp.svg"
import kw from "./images/companies/kw.svg"

const TrustedCompanies = () => {

  return(
    <div className="trusted-companies gutters">
        <Typography variant="h6" color="primary" align="center" weight="bold" transform="uppercase">OUR TALENT NETWORK HAS WORKED FOR COMPANIES LIKE:</Typography>
        <div className="trusted-media">
          <img src={disney} alt={disney} />
          <img src={airbnb} alt={airbnb} />
          <img src={amazon} alt={amazon} />
          <img src={gp} alt={gp} />
          <img src={kw} alt={kw} />
        </div>
    </div>
  )
}


export default TrustedCompanies
