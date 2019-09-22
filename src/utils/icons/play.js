import React from "react"

export default ({
  title = 'Play Icon',
  color = 'inherit'
}) => (
  <svg width="182" height="182" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <circle stroke={color} strokeWidth="1.2" opacity=".3" cx="90" cy="90" r="90"/>
      <path fill={color} d="M123.788 88.435L71.945 64.81c-.968-.405-1.383-.81-2.489-.81-1.52 0-3.456.945-3.456 2.7v48.6c0 1.755 1.935 2.7 3.456 2.7 1.106 0 1.521-.405 2.489-.81l51.843-23.625c1.106-.54 2.212-1.08 2.212-2.565 0-1.485-1.106-2.025-2.212-2.565z"/>
    </g>
  </svg>
)
