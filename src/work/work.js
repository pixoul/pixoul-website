import React from "react"
import { withRouter, Route } from "react-router-dom"


import Summary from "client/summary"
import Detail from "client/detail"

function Page(){
  return(
    <div>
        
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
