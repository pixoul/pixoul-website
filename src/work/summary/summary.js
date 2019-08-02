import React from "react"
import { Link } from "react-router-dom"
import "./summary.scss"
import arrow from "./blue-arrow.svg"

const WorkSummary = ({
  logo,
  tagline,
  route,
  media
}) => {
  return(
    <div className="client-summary">
      <div className="client-info">
        <img src={logo} alt={logo} draggable="false" className="client-logo" />
        <p className="client-tagline">{tagline}</p>
        <Link to={route} className="client-action">Learn More <img src={arrow} alt={arrow} draggable="false" /></Link>
      </div>
      <div className="client-media">
        <img src={media} alt={media} draggable="false" className="summary-media" />
      </div>
    </div>
  )
}

export default WorkSummary
