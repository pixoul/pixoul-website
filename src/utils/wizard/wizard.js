import React, { useState } from "react"
/* Third-Party */
import injectSheet from 'react-jss'
/* Child Components */
import WizardNavigation from "./navigation"

const styles = theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    "&:before": {
      content: '""',
      position: 'absolute',
      top: 72,
      left: 0,
      borderTop: '1px solid #dddddd',
      width: '100%',
      zIndex: 0
    }
  },
  body: {
    padding: {
      top: 50,
      right: 130,
      left: 130
    }
  },
  '@media (max-width: 768px)': {
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: {
        right: 30,
        left: 30
      },
      padding: {
        bottom: 30
      },
      "&:before": {
        borderTop: 'none',
      },
      borderLeft: '1px solid #dddddd',
      borderImage: 'linear-gradient(to bottom, #ffffff 0%, #dddddd 30%, #dddddd 80%, #ffffff 100%)',
      borderWidth: '0 0 0 1px',
      borderImageSlice: 1
    },
    body: {
      padding: {
        top: 15,
        right: 30,
        left: 30
      },
      "&:before": {
        content: '""',
        display: 'block',
        margin: '0 auto',
        paddingBottom: 30,
        width: '50%',
        borderTop: '1px solid #dddddd',
        borderImage: 'linear-gradient(to right, #ffffff 0%, #dddddd 30%, #dddddd 80%, #ffffff 100%)',
        borderWidth: '1px 0 0 0',
        borderImageSlice: 1
      }
    }
  }
})

const Wizard = ({
  children,
  defaultStep = 1,
  classes
}) => {

  const [currentStep, setStep] = useState(defaultStep)

  /* Loops through the WizardStep children, creating a WizardNavigation for each one, then assigns props to the new navigation */
  const wizardNavigation = React.Children.map(children, ({ type, props }) => {
    if(type && type.displayName === 'Jss(WizardStep)') {
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
    console.log('wizard child', child)
    if(child.type && child.type.displayName === 'Jss(WizardStep)') {
      console.log('inside if for Jss(WizardStep)')
      return React.cloneElement(child, {
        currentStep: currentStep
      });
    }

    return null
  });

  return (
    <div className={classes.wizard}>
      <div className={classes.header}>
        {wizardNavigation}
      </div>
      <div className={classes.body}>
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
      if (child.type.displayName !== 'Jss(WizardStep)') {
        error = new Error(`${componentName} children should be of type 'WizardStep'`);
      }
    })
    return error
  }
}

export default injectSheet(styles)(Wizard)
