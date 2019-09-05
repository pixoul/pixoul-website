import React from "react"
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

const styles = theme => ({
  button: {
    cursor: 'pointer',
    display: props => props.block ? 'block' : 'inline-block',
    whiteSpace: 'nowrap',
    borderRadius: 48,
    padding: props => {
      const sizes = {
        'xs': "0.5454em 1.3636em",
        'sm': "0.6818em 1.5909em",
        'md': "0.8636em 2.045em",
        'lg': "1em 2.2727em"
      }
      return sizes[props.size]
    },
    textAlign: 'center',
    textDecoration: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: props => theme.color[props.theme],
    "&:hover" : {
      opacity: 0.8,
      transition: 'opacity .6s ease-in-out'
    },
    width: props => props.block ? '100%' : 'auto',
    backgroundColor: props => props.outline ? 'transparent' : theme.color[props.theme],
    color: props => props.outline ? theme.color[props.theme] : '#FFFFFF',
    margin: props => {
      const sizes = {
        'xs': "0px 0px",
        'sm': "0px 0px",
        'md': "22.5px 0px",
        'lg': "27.5px 0px"
      }
      return sizes[props.size]
    },
    "&:not(:first-child)": {
      margin: {
        left: 22.5
      }
    }
  }
})

const Button = ({
  className,
  children,
  component: Component,
  theme = 'primary',
  outline = false,
  block = false,
  classes,
  ...attrs
}) => {

  return(
    <Component className={classes.button} {...attrs}>
      <Typography variant="button">{children}</Typography>
    </Component>
  )
}

Button.defaultProps = {
  component: "button",
  theme: "primary",
  size: "md"
}

export default injectSheet(styles)(Button)
