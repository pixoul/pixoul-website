import React, { useState } from 'react'
/* Third-Party */
import injectSheet from 'react-jss'
/* Utils */
import Button from "utils/button/button"
import { Animate } from "utils/animate/animate"

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: {
      left: 45,
      right: 45
    },
    maxWidth: 1080,
    margin: '0 auto'
  },
  fields: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto'
  },
  message: {
    textAlign: 'center',
    color: theme.text.primary,
    padding: {
      top: 130,
      right: 0,
      bottom: 130,
      left: 0
    }
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: {
      top: 18,
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

  const SubmittedMessage = () => <div className={classes.message}>Thank you and we will be in touch soon!</div>

  if(submitted){
    return <SubmittedMessage />
  }

  return(
    <form className={classes.form}>
      <div className={classes.fields}>{children}</div>
      <div className={classes.action}>
        <Animate delay={300} once>
          <Button component="div" onClick={performSubmit}>{label}</Button>
        </Animate>
      </div>
    </form>
  )
}

export default injectSheet(styles)(Form)
