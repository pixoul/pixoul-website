import React from "react"
import { withRouter } from 'react-router';
import ClientDetail from "client/detail/detail"

import fusemap from "work/fusemap/data"
import georgiaPacific from "work/georgia-pacific/data"
import hcp from "work/hcp/data"
import ikarus from "work/ikarus/data"
import iuzeit from "work/iuzeit/data"
import sofs from "work/sofs/data"


const clients = {
  'fusemap': fusemap,
  'georgia-pacific': georgiaPacific,
  'hcp': hcp,
  'ikarus': ikarus,
  'iuzeit': iuzeit,
  'sofs': sofs
}


const Detail = ({
  match
}) => {

  const client = clients[match.params.client]

  return(
    <ClientDetail
      title={client.title}
      subtitle={client.subtitle}
      industry={client.industry}
      background={client.background}
      logo={client.logo.white}
      images={client.images}
      ask={client.ask}
      services={client.services}
      tools={client.tools}
    />
  )
}

export default withRouter(Detail)
