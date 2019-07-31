import React from "react"
import "./map.scss"
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const Map = () => {

  const MapboxMap = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiaGVsbG9waXhvdWwiLCJhIjoiY2p5cnE1OWZ5MDRmaTNscXVlemR3NnZociJ9.jFKbvnZWLtnDp6csFnk95A'
  })

  const homeLocation = [-96.8066700, 32.7830600]

  return(
    <div>
      <MapboxMap
        style="mapbox://styles/hellopixoul/cjyrqnr791ntp1cp21b11ppfa"
        containerStyle={{
          height: '563px',
          width: '606px'
        }}
        center={homeLocation}
        zoom={[12]}
      >
        <Marker coordinates={homeLocation} anchor="bottom">
          <span className="map-icon">Pixoul Headquarters</span>
        </Marker>
      </MapboxMap>
    </div>
  )
}

export default Map
