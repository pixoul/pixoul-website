import React from "react"
import { Route, withRouter } from "react-router-dom"
import Iuzeit from "work/iuzeit"

function Work({ match }){
  return(
    <div>

      <Iuzeit />
      <Route path={`${match.path}/detail/iuzeit`} component={Iuzeit} />
    </div>
  )
}

export default withRouter(Work)
