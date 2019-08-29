import React from "react"

export default ({
  title = 'Next Icon',
  color = 'inherit'
}) => (
  <svg width="86" height="86" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <g>
      <circle stroke={color} stroke-width="1.2" cx="43" cy="43" r="42.4"/>
      <path fill={color} d="M24 42.093h33.161l-10.975-11.38L47.84 29 62 43.684l-1.652 1.713-.118-.123L48.075 58l-1.653-1.713 11.33-11.747H24z"/>
    </g>
  </svg>
)
