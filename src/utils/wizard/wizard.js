import React, { useState } from "react"
import "./wizard.scss"
/* Third-Party */
import cn from "classnames"
/* Utils */


const WizardNavigation = ({
  onClick,
  icon,
  title,
  currentStep,
  stepIndex
}) => {

  const [hover, setHover] = useState(false)

  const classes = cn('wizard-navigation', {
    'hover': hover === true,
    'active': currentStep === stepIndex
  })

  return(
    <div className={classes} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={icon} alt={icon} className="navigation-icon" />
      <span className="navigation-dot" />
      <span className="navigation-title">{title}</span>
    </div>
  )
}


const WizardStep = ({
  stepIndex = 0,
  currentStep,
  children
}) => {

  if(currentStep === stepIndex) {
    return(
      <div className="step">
        {children}
      </div>
    )
  }

  return null
}


const Wizard = ({
  steps = []
}) => {

  const [currentStep, setStep] = useState(0)

  return (
    <div className="wizard">
      <div className="wizard-header">
        {steps.map(({
          title,
          icon
        }, i) => (
          <WizardNavigation currentStep={currentStep} stepIndex={i} title={title} icon={icon} onClick={() => setStep(i)} key={i} />
        ))}
      </div>
      <div className="wizard-body">
        {steps.map(({
          component : Component
        }, i) => (
          <WizardStep stepIndex={i} currentStep={currentStep} key={i}>
            <Component />
          </WizardStep>
        ))}
      </div>
    </div>
  )
}

export { Wizard, WizardStep }
