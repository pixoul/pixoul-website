import React from "react"

export default ({
  title = 'Times Icon',
  color = 'inherit'
}) => (
  <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} d="M17 1.712L15.288 0 8.5 6.788 1.712 0 0 1.712 6.788 8.5 0 15.288 1.712 17 8.5 10.212 15.288 17 17 15.288 10.212 8.5z"/>
  </svg>
)
