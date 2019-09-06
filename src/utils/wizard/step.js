import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'

const styles = theme => ({
  step: {

  }
})

const WizardStep = ({
  step = 0,
  currentStep,
  children,
  classes
}) => {

  if(currentStep === step) {
    return(
      <div className={classes.step}>
        {children}
      </div>
    )
  }

  return null
}

export default injectSheet(styles)(WizardStep)
