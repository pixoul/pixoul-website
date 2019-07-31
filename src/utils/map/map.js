import React from "react"
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = () => {

  const MapboxMap = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiaGVsbG9waXhvdWwiLCJhIjoiY2p5cnE1OWZ5MDRmaTNscXVlemR3NnZociJ9.jFKbvnZWLtnDp6csFnk95A'
  })


  return(
    <div>
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </MapboxMap>
    </div>
  )
}

export default Map
