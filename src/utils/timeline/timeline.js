import React from "react"
import "./timeline.scss"
/* Third-Party */
import cn from "classnames"

const Legend = ({
  items = []
}) => (
  <div className="legend">
    <span className="legend-title">Timeline</span>
    <span className="legend-item clear">Week 1</span>
    <span className="legend-item white">Week 2-3</span>
    <span className="legend-item blue">Week 4+</span>
  </div>
)

const Step = ({
  header,
  title,
  description,
  color = 'white'
}) => {

  const classes = cn('step', {
    'clear': color === 'clear',
    'white': color === 'white',
    'blue': color === 'blue'
  })

  return (
    <div className={classes}>
      <div className="step-header">{header}</div>
      <div className="step-content">
        <div className="step-title">{title}</div>
        <div className="step-description">{description}</div>
      </div>
    </div>
  )
}

const Timeline = ({
  children
}) => (
  <div className="timeline">
    {children}
  </div>
)


export {
  Legend,
  Timeline,
  Step
}
