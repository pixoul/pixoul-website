import React from "react"
import { withRouter } from "react-router-dom"
import Iuzeit from "work/iuzeit"
import GeorgiaPacific from "work/georgia-pacific"
import Sofs from "work/sofs"
import Fusemap from "work/fusemap"
import Hcp from "work/hcp"
import Ikarus from "work/ikarus"

function Work({ match }){
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

export default withRouter(Work)
