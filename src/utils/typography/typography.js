import React from "react"
/* Third-Party */
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = theme => ({
  typography: props => ({
    fontSize:  props.fontSize,
    fontWeight: props.weight,
    color: theme.text[props.color],
    textAlign: props.align,
    textTransform: props.transform,
    textDecoration: 'none',
    opacity: props.opacity,
    '-webkit-font-smoothing': 'antialiased'
  }),
  body1: {
    fontSize: theme.font.base,
    color: theme.text.secondary,
    lineHeight: '31.5px',
    margin: {
      top: 16,
      bottom: 16
    }
  },
  body2: {
    fontSize: `${(16 / theme.font.base)}em`,
    color: theme.text.secondary,
    margin: {
      top: 6,
      bottom: 6
    }
  },
  button: {
    fontSize: `${(12 / theme.font.base)}em`,
    letterSpacing: 2.4
  },
  caption: {
    fontSize: `${(16 / theme.font.base)}em`,
    lineHeight: 1.05
  },
  overline: {
    fontSize: `${(14 / theme.font.base)}em`,
  },
  quote: {
    fontSize: `${(39 / theme.font.base)}em`,
    letterSpacing: -0.61,
    color: theme.text.primary,
    margin: {
      top: 29,
      bottom: 10
    }
  },
  subtitle1: {
    fontSize: `${(24 / theme.font.base)}em`,
    lineHeight: 1.3,
    color: theme.text.secondary,
    margin: {
      top: 16,
      bottom: 16
    }
  },
  subtitle2: {
    fontSize: `${(13 / theme.font.base)}em`,
    fontWeight: "bold",
    letterSpacing: 2.36,
    textTransform: "uppercase",
    color: theme.text.primary,
    margin: {
      top: 12,
      bottom: 7
    }
  },
  header1: {
    fontSize: `${(62 / theme.font.base)}em`,
    fontWeight: "bold",
    lineHeight: '66px',
    letterSpacing: -2.38,
    color: theme.text.primary,
    margin: {
      top: 20,
      bottom: 10
    }
  }
})

const Typography = ({
  variant,
  classes,
  children,
  component: Component,
  ...rest
}) => {

  return(
    <Component className={classes.typography + ' ' + classes[variant]} {...rest}>{children}</Component>
  )
}

Typography.defaultProps = {
  component: 'div',
  variant: 'body1',
  color: 'initial',
  opacity: 1
}

export default injectSheet(styles)(Typography)
