import React from "react"
import { withRouter } from 'react-router';
import ClientDetail from "work/detail/detail"

import fusemap from "clients/fusemap/data"
import georgiaPacific from "clients/georgia-pacific/data"
import hcp from "clients/hcp/data"
import ikarus from "clients/ikarus/data"
import iuzeit from "clients/iuzeit/data"
import sofs from "clients/sofs/data"


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
