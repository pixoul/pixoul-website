import React from "react"
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

const styles = theme => ({
  button: {
    cursor: 'pointer',
    display: props => props.block ? 'block' : 'inline-block',
    whiteSpace: 'nowrap',
    borderRadius: 48,
    padding: '0.8636em 2.045em',
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
    margin: 22.5
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
    <Component {...attrs} className={classes.button}>
      <Typography variant="button">{children}</Typography>
    </Component>
  )
}

Button.defaultProps = {
  component: "button",
  theme: "primary"
}

export default injectSheet(styles)(Button)
