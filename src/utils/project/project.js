import React from "react"
import "./project.scss"
/* Utils */
import Button from "utils/button/button"

const Project = ({
  media,
  name,
  tagline,
  description,
  services = ['N/A'],
  tools = ['N/A']
}) => (
  <div className="project">
    <div className="project-media">
      <img src={media} alt={media} className="project-image" />
    </div>
    <div className="project-content">
      <span className="project-name">{name}</span>
      <span className="project-tagline">{tagline}</span>
      <span className="project-description">{description}</span>
      <div className="project-list">
        <span className="list-title">Services: </span>
        {services.map((service, i) => (
          <span className="list-item" key={i}>{service}</span>
        ))}
      </div>
      <div className="project-list">
        <span className="list-title">Tools: </span>
        {tools.map((tool, i) => (
          <span className="list-item" key={i}>{tool}</span>
        ))}
      </div>
    </div>
  </div>
)

export default Project
