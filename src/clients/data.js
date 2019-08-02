/* Bootstraps the client data together for import */

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

export default clients
