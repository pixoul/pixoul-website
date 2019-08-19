import React, { useState } from "react"
import "./expansion-panel.scss"
/* Third-Party */
import { useSpring, animated } from 'react-spring'
import { useMeasure } from "./measure"
/* Icons */
import plus from "./plus.svg"
import minus from "./minus.svg"

const ExpansionPanel = ({
  header,
  children
}) => {

  const [open, togglePannel] = useState(false)

  const [bind, {height}] = useMeasure()
  const props = useSpring({
    from: {
      height: open ? height : 0,
      opacity: 0,
      transform: `translate3d(0,${open ? '0%' : '100%'},0)`
    },
    to: {
      height: open ? height : 0,
      opacity: open ? 1 : 0,
      transform: `translate3d(0,${open ? '0%' : '100%'},0)`
    }
  })

  return(
    <div className="expansion-panel">
      <div className="panel-header">{header}</div>
      <animated.div className="panel-body" style={props}>
        <div className="panel-content" {...bind}>{children}</div>
      </animated.div>
      <div className="panel-control" onClick={() => togglePannel(!open)}>
        <img src={open ? minus : plus} alt={open ? minus : plus} className="panel-action" />
      </div>
    </div>
  )
}

export default ExpansionPanel
