import React from "react"
import { withRouter, Route } from "react-router-dom"

import ClientSummary from "work/summary/summary"
import clients from "clients/data"

import Summary from "./summary"
import Detail from "./detail"

function Page(){
  return(
    <div>
      {Object.keys(clients).map((client) => (
        <ClientSummary
          logo={clients[client].logo.color}
          tagline={clients[client].tagline}
          route={clients[client].route}
          media={clients[client].background}
        />
      ))}
    </div>
  )
}


function Work({ match }){
  return(
    <div>
        <Route exact path={`${match.path}/`} component={Page} />
        <Route path={`${match.path}/summary/:client`} component={Summary} />
        <Route path={`${match.path}/detail/:client`} component={Detail} />
    </div>
  )
}

export default withRouter(Work)
