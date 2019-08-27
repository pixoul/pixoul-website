import React from "react"
/* Third-Party */
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'


const styles = theme => ({
  typography: props => ({
    fontSize: props.fontSize,
    fontWeight: props.weight,
    color: theme.text[props.color],
    textAlign: props.align,
    textTransform: props.transform
  })
})

const Typography = ({
  classes,
  children,
  variant: Variant
}) => {

  return(
    <Variant className={classes.typography}>{children}</Variant>
  )
}

Typography.defaultProps = {
  variant: 'div',
  color: 'initial',
  align: 'inherit',
  weight: 'normal',
  transform: 'inherit'
}

export default injectSheet(styles)(Typography)
