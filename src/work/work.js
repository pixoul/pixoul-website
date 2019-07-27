import React from "react"
import { withRouter, Route } from "react-router-dom"
import Header from "layout/header/header"
import Footer from "layout/footer/footer"

import Iuzeit from "work/iuzeit"
import GeorgiaPacific from "work/georgia-pacific"
import Sofs from "work/sofs"
import Fusemap from "work/fusemap"
import Hcp from "work/hcp"
import Ikarus from "work/ikarus"

import IuzeitDetail from "work/iuzeit/detail"
import GeorgiaPacificDetail from "work/georgia-pacific/detail"
import SofsDetail from "work/sofs/detail"
import FusemapDetail from "work/fusemap/detail"
import HcpDetail from "work/hcp/detail"
import IkarusDetail from "work/ikarus/detail"

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
      <Header fixed />
        <Route exact path={`${match.path}/`} component={Page} />
        <Route path={`${match.path}/detail/iuzeit`} component={IuzeitDetail} />
        <Route path={`${match.path}/detail/georgia-pacific`} component={GeorgiaPacificDetail} />
        <Route path={`${match.path}/detail/sofs`} component={SofsDetail} />
        <Route path={`${match.path}/detail/fusemap`} component={FusemapDetail} />
        <Route path={`${match.path}/detail/hcp`} component={HcpDetail} />
        <Route path={`${match.path}/detail/ikarus`} component={IkarusDetail} />
      <Footer />
    </div>
  )
}

export default withRouter(Work)
