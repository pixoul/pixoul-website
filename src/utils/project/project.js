import React, { useState } from "react"
import "./project.scss"
/* Third-Party */
import cn from "classnames"
/* Utils */
import Button from "utils/button/button"
import Modal from "utils/modal/modal"

const ProjectDetail = ({
  media,
  name,
  tagline,
  description,
  services = ['N/A'],
  tools = ['N/A']
}) => (
  <div className="project-detail">
    <div className="detail-media">
      <img src={media} alt={media} className="detail-image" />
    </div>
    <div className="detail-content">
      <span className="detail-name">{name}</span>
      <span className="detail-tagline">{tagline}</span>
      <span className="detail-description">{description}</span>
      <div className="detail-list">
        <span className="list-title">Services: </span>
        {services.map((service, i) => (
          <span className="list-item" key={i}>{service}</span>
        ))}
      </div>
      <div className="detail-list">
        <span className="list-title">Tools: </span>
        {tools.map((tool, i) => (
          <span className="list-item" key={i}>{tool}</span>
        ))}
      </div>
    </div>
  </div>
)


const Project = ({
  media,
  name,
  tagline,
  description,
  services = ['N/A'],
  tools = ['N/A']
}) => {

  const [hover, setHover] = useState(false)
  const [show, toggleModal] = useState(false)

  const classes = cn('project-overlay', {
    'hover' : hover
  })

  return (
    <div className="project" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={media} alt={media} className="project-image"/>

      <div className={classes}>
        <span className="project-name">{name}</span>
        <Button onClick={() => toggleModal(true)}>View Project</Button>
      </div>

      <Modal show={show} onClose={() => toggleModal(false)}>
        <ProjectDetail
          name={name}
          media={media}
          tagline={tagline}
          description={description}
          services={services}
          tools={tools}
        />
      </Modal>
    </div>
  )
}

export default Project
