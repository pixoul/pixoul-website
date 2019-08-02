import React from "react"
import "./detail.scss"

import { Carousel, Slide } from "utils/carousel"

const ClientDetail = ({
  title,
  subtitle,
  industry,
  background,
  logo,
  images = [],
  ask,
  services = [],
  tools = []
}) => {

  const headerBackground = {
    background: 'linear-gradient(to right, rgba(55, 64, 80, 0.76), rgba(55, 64, 80, 0.76)), url('+background+')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return(
    <div className="client-detail">
      <div className="client-header" style={headerBackground}>
        <div className="client-industry">{ industry }</div>
        <img src={logo} alt={logo} draggable="false" className="client-logo" />
      </div>

      <div className="client-content">
        <div className="client-copy">
          <div className="client-title">{title}</div>
          <div className="client-subtitle">{subtitle}</div>
        </div>

        <div className="client-sidebar">
            <ul className="sidebar-list">
              <li>The Ask</li>
              <li>{ask}</li>
            </ul>

            <ul className="sidebar-list">
              <li>Services</li>
              {services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <ul className="sidebar-list">
              <li>Tools</li>
              {tools.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
        </div>
      </div>

      <Carousel maxSlides={1} center>
        {images.map((item, i) => (
          <Slide>
              <img src={item.media} alt={item.media} draggable="false" className="client-screen" />
          </Slide>
        ))}
      </Carousel>

    </div>
  )
}


export default ClientDetail
