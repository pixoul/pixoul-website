import React, { useState } from "react"
import "./wizard.scss"
import cn from "classnames"

const WizardNavigation = ({
  onClick,
  icon,
  title,
  currentStep,
  step
}) => {

  const [hover, setHover] = useState(false)

  const classes = cn('wizard-navigation', {
    'hover': hover === true,
    'active': currentStep === step
  })

  return(
    <div className={classes} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="navigation-icon">{icon}</div>
      <span className="navigation-dot" />
      <span className="navigation-title">{title}</span>
    </div>
  )
}

const WizardStep = ({
  step = 0,
  currentStep,
  children
}) => {

  if(currentStep === step) {
    return(
      <div className="step">
        {children}
      </div>
    )
  }

  return null
}


const Wizard = ({
  children,
  defaultStep = 1
}) => {

  const [currentStep, setStep] = useState(defaultStep)

  /* Loops through the WizardStep children, creating a WizardNavigation for each one, then assigns props to the new navigation */
  const wizardNavigation = React.Children.map(children, ({ type, props }) => {
    if(type && type.name === 'WizardStep') {
      return React.createElement(WizardNavigation, {
        onClick: () => setStep(props.step),
        currentStep: currentStep,
        step: props.step,
        title: props.title,
        icon: props.icon
      }, null);
    }

    return null
  });

  /* Loops through the WizardStep children, adding the currentStep to them */
  const wizardChildren = React.Children.map(children, child => {
    if(child.type && child.type.name === 'WizardStep') {
      return React.cloneElement(child, {
        currentStep: currentStep
      });
    }

    return null
  });

  return (
    <div className="wizard">
      <div className="wizard-header">
        {wizardNavigation}
      </div>
      <div className="wizard-body">
        {wizardChildren}
      </div>
    </div>
  )
}

/* Validates that each child to Wizard is a WizardStep */
Wizard.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type !== WizardStep) {
        error = new Error('`' + componentName + '` children should be of type `WizardStep`.');
      }
    })
    return error
  }
}

export { Wizard, WizardStep }
