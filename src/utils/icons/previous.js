import React from "react"

export default ({
  title = 'Previous Icon',
  color = 'inherit'
}) => (
  <svg width="86" height="86" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <g>
      <circle stroke={color} stroke-width="1.2" transform="matrix(-1 0 0 1 86 0)" cx="43" cy="43" r="42.4"/>
      <path fill={color} d="M62 42.093H28.839l10.975-11.38L38.16 29 24 43.684l1.652 1.713.118-.123L37.925 58l1.653-1.713-11.33-11.747H62z"/>
    </g>
  </svg>
)
