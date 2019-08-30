import React from "react"

export default ({
  title = 'Layout Icon',
  color = 'inherit'
}) => (
  <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} fill-rule="evenodd" d="M36.516 0H1.484C.665 0 0 .666 0 1.487v16.026C0 18.335.665 19 1.484 19h35.032c.819 0 1.484-.665 1.484-1.487V1.487C38 .667 37.335 0 36.516 0zM3 9h32v7H3V9zm0-6h32v3H3V3zm5.512 18A1.5 1.5 0 0 1 10 22.513v13.974A1.5 1.5 0 0 1 8.512 38H1.488A1.5 1.5 0 0 1 0 36.487V22.513A1.5 1.5 0 0 1 1.488 21h7.024zM3 24h4v11H3V24zm33.525-3c.814 0 1.475.677 1.475 1.513v13.974c0 .836-.66 1.513-1.475 1.513h-22.05C13.661 38 13 37.323 13 36.487V22.513c0-.836.66-1.513 1.475-1.513h22.05zM16 24h19v11H16V24z"/>
  </svg>
)
