import React from "react"

export default ({
  title = 'Check Icon',
  color = 'inherit'
}) => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} d="M6.674 12.623L1.695 7.648 0 9.33 6.674 16 21 1.682 19.317 0z" />
  </svg>
)
