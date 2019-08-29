import React from "react"

export default ({
  title = 'Thumbs Up Icon',
  color = 'inherit'
}) => (
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} d="M8.1 9.9H0V8.1h8.1V0h1.8v8.1H18v1.8H9.9V18H8.1v-.9z"/>
  </svg>
)
