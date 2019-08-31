import React, { useState } from 'react'
/* Third-Party */
import injectSheet from 'react-jss'
/* Utils */
import { isValidInput, getRule, applyMask } from './validate'

const styles = theme => ({
  form: {

  }
})

const Form = ({
  children,
  classes
}) => {

  return(
    <form className={classes.form}>
      {children}
    </form>
  )
}

export default injectSheet(styles)(Form)
