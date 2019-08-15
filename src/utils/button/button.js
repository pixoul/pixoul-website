import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import "./button.scss"

const Button = ({
  className,
  children,
  tag: Tag,
  theme = 'primary',
  outline = false,
  block = false,
  ...attrs
}) => {

  const classes = cn(
    className,
    'button',
    {
      'button-primary': theme === 'primary',
      'button-secondary': theme === 'secondary',
      'button-light': theme === 'light',
      'button-outline': outline,
      'button-block': block
    })

  return(
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired
}

Button.defaultProps = {
  tag: "button"
}

export default Button
