import React from "react"
import cn from "classnames"
import "./button.scss"

const Button = ({ children, tag, theme = 'primary', ...rest }) => {

  const classes = cn('button', {
    'button-primary': theme === 'primary'
  })

  if(tag){
    const Tag = tag;
    return(
      <Tag {...rest} className={classes}>
        {children}
      </Tag>
    )
  }

  return(
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
