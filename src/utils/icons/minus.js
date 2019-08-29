import React from "react"

export default ({
  title = 'Minus Icon',
  color = 'inherit'
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="2">
    <title>{title}</title>
    <path fill={color} d="M.9 2H0V0h18v2h-.9z"/>
  </svg>
)
