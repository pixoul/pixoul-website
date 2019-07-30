import React from "react"
import cn from "classnames"
import "./button.scss"

const Button = ({ children, tag, theme = 'primary' }) => {

  const classes = cn('button', {
    'button-primary': theme === 'primary'
  })

  return(
    <a className={classes}>
      {children}
    </a>
  )
}

export default Button
