import React, { useState } from "react"
/* Third-Party */
import { Link } from "react-router-dom"
import cn from "classnames"
/* Utils */
import Button from "utils/button/button"

/* Images */
import ikarus from "./images/ikarus.svg"
import iuzeit from "./images/iuzeit.svg"
import stallion from "./images/stallion.svg"
import georgiaPacific from "./images/georgia-pacific.svg"
import fusemap from "./images/fusemap.svg"
import hcp from "./images/hcp.svg"


const ProjectMedia = ({
  media,
  name,
  onClick
}) => {

  const [hover, setHover] = useState(false)

  const classes = cn('project-overlay', {
    'hover' : hover
  })

  return (
    <div className="project-media" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={media} alt={media} className="project-image"/>

      <div className={classes}>
        <span className="project-name">{name}</span>
        <Button onClick={onClick}>View Project</Button>
      </div>
    </div>
  )
}


const ClientWork = () => (
  <div className="client-work gutters">
    <div className="work-row">
      <ProjectMedia media={ikarus} name="ikarus" onClick={() => console.log('clicked')} />
      <ProjectMedia media={iuzeit} name="iuzeit" onClick={() => console.log('clicked')} />
    </div>
    <div className="work-row">
      <ProjectMedia media={stallion} name="stallion" onClick={() => console.log('clicked')} />
      <ProjectMedia media={georgiaPacific} name="Georgia Pacific" onClick={() => console.log('clicked')} />
      <div className="work-column">
        <ProjectMedia media={fusemap} name="Fusemap" onClick={() => console.log('clicked')} />
        <ProjectMedia media={hcp} name="HCP" onClick={() => console.log('clicked')} />
      </div>
    </div>
  </div>
)


export default ClientWork
