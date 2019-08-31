import React, { useState } from 'react'
/* Third-Party */
import injectSheet from 'react-jss'
/* Utils */
import Button from "utils/button/button"
import { isValidInput, getRule, applyMask } from './validate'

const styles = theme => ({
  form: {

  },
  fields: {

  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: {
      top: 36,
      bottom: 67
    }
  },
  button: {
    margin: {
      left: 45
    }
  }
})

const Form = ({
  onSubmit,
  label = 'Submit',
  children,
  classes
}) => {

  return(
    <form className={classes.form}>
      <div className={classes.fields}>{children}</div>

      <div className={classes.action}>
        <Button className={classes.button} onClick={onSubmit}>{label}</Button>
      </div>
    </form>
  )
}

export default injectSheet(styles)(Form)
