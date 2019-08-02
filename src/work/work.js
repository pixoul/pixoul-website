import React from "react"
import { withRouter, Route } from "react-router-dom"

import Iuzeit from "work/iuzeit"
import GeorgiaPacific from "work/georgia-pacific"
import Sofs from "work/sofs"
import Fusemap from "work/fusemap"
import Hcp from "work/hcp"
import Ikarus from "work/ikarus"

import Summary from "client/summary"
import Detail from "client/detail"

function Page(){
  return(
    <div>
        <Iuzeit />
        <GeorgiaPacific />
        <Sofs />
        <Fusemap />
        <Hcp />
        <Ikarus />
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
