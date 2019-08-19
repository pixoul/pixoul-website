import React from "react"
import "./contact.scss"
/* Third-Party */
import { Route, withRouter } from "react-router-dom"
/* Routes */
import JoinTeam from "./join-team"
import PartnershipProgram from "./partnership-program"
import ProfessionalHire from "./professional-hire"
/* Images */
import disney from "./images/disney.svg"
import airbnb from "./images/airbnb.svg"
import amazon from "./images/amazon.svg"
import gp from "./images/gp.svg"
import kw from "./images/kw.svg"

const Contact = ({
  match
}) => {
  return(
    <div className="contact gutters">
        <Route path={`${match.path}/join-team`} component={JoinTeam} />
        <Route path={`${match.path}/partnership-program`} component={PartnershipProgram} />
        <Route path={`${match.path}/professional-hire`} component={ProfessionalHire} />

        <div className="companies">
          <div className="companies-title">OUR TALENT NETWORK HAS WORKED FOR COMAPNIES LIKE:</div>
          <div className="companies-list">
            <img src={disney} alt={disney} className="companies-image" />
            <img src={airbnb} alt={airbnb} className="companies-image" />
            <img src={amazon} alt={amazon} className="companies-image" />
            <img src={gp} alt={gp} className="companies-image" />
            <img src={kw} alt={kw} className="companies-image" />
          </div>
        </div>
    </div>
  )
}


export default withRouter(Contact)
