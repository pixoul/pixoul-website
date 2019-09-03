import React from "react"
import "./contact.scss"
/* Third-Party */
import { Route, withRouter } from "react-router-dom"
/* Utils */
import TrustedCompanies from "utils/trusted-companies/trusted-companies"
/* Routes */
const JoinTeam = React.lazy(() => import("./join-team"))
const PartnershipProgram = React.lazy(() => import("./partnership-program"))
const ProfessionalHire = React.lazy(() => import("./professional-hire"))

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
