import React, { useState } from 'react'
/* Third-Party */
import injectSheet from 'react-jss'
/* Utils */
import Button from "utils/button/button"
import { isValidInput, getRule, applyMask } from './validate'

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: {
      left: 45,
      right: 45
    }
  },
  fields: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  message: {
    margin: '0 auto',
    color: theme.text.primary
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: {
      top: 36,
      right: 18,
      bottom: 67
    }
  },
  button: {
    margin: {
      left: 45
    }
  },
  '@media (max-width: 768px)': {
    form: {
      padding: {
        left: 0,
        right: 0
      }
    },
    action: {
      justifyContent: 'center',
      padding: {
        right: 0
      }
    },
    button: {
      margin: {
        left: 0
      }
    }
  }
})

const Form = ({
  onSubmit,
  label = 'Submit',
  children,
  classes
}) => {

  const [submitted, setSubmitted] = useState(false)

  const performSubmit = e => {
    setSubmitted(true)
    onSubmit(e)
  }

  return(
    <form className={classes.form}>
      {submitted ?
        <div className={classes.message}>Thank you and we will be in touch soon!</div> :
        <div className={classes.fields}>{children}</div>
      }

      <div className={classes.action}>
        <Button component="div" onClick={performSubmit}>{label}</Button>
      </div>
    </form>
  )
}

export default injectSheet(styles)(Form)
