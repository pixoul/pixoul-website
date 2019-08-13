import React, { useEffect } from "react"
import "./stat.scss"

const Stat = ({
  value,
  description,
  size = 300,
  stroke = 6,
  progress = 100
}) => {

  const radius = size / 2
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return(
    <div className="stat">
      <svg
        className="progress-ring"
        height={size}
        width={size}
      >
        <circle
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
          fill="none"
          stroke="#eeeeee"
          strokeWidth={ stroke }
        />
        <circle
          stroke="#2e71f0"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
         />
      </svg>

      <div className="stat-content">
        <span className="stat-value">{value}</span>
        <span className="stat-description" style={{ width: size / 2 }}>{description}</span>
      </div>
    </div>
  )
}

export default Stat
