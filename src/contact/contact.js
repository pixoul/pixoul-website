import React from "react"
import "./contact.scss"
/* Third-Party */
import { Route, withRouter } from "react-router-dom"
/* Utils */
import TrustedCompanies from "utils/trusted-companies/trusted-companies"
/* Routes */
import JoinTeam from "./join-team"
import PartnershipProgram from "./partnership-program"
import ProfessionalHire from "./professional-hire"


const Contact = ({
  match
}) => {
  return(
    <div className="contact gutters">
        <Route path={`${match.path}/join-team`} component={JoinTeam} />
        <Route path={`${match.path}/partnership-program`} component={PartnershipProgram} />
        <Route path={`${match.path}/professional-hire`} component={ProfessionalHire} />

        <TrustedCompanies />
    </div>
  )
}


export default withRouter(Contact)
