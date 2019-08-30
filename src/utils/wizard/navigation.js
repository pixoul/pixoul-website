import React, { useState } from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import cn from "classnames"

const styles = theme => ({
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    "&:hover": {
      "& $icon": {
        filter: 'none',
        opacity: 1
      },
      "& $dot": {
        backgroundColor: '#276cf2'
      },
      "& $title": {
        color: '#3c3d41'
      }
    }
  },
  icon: {
    filter: props => props.isActive(props) ? 'none' : 'grayscale(1)',
    opacity: props => props.isActive(props) ? 1 : 0.2,
    margin: '0 auto',
    transition: 'all 0.5s ease-out',
    "& svg": {
      transform: 'translateZ(0)',
      filter: 'blur(0)'
    }
  },
  dot: {
    backgroundColor: props => props.isActive(props) ? '#276cf2' : '#dddddd',
    display: 'inline-block',
    width: 12,
    height: 12,
    borderRadius: '50%',
    margin: {
      top: 8,
      right: 'auto',
      bottom: 23,
      left: 'auto'
    },
    zIndex: 1,
    transition: 'background-color 0.5s ease-out'
  },
  title: {
    color: props => props.isActive(props) ? '#3c3d41' : '#aaaaaa',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2.36,
    textAlign: 'center',
    transition: 'color 0.5s ease-out',
    textTransform: 'uppercase'
  }
})

const WizardNavigation = ({
  onClick,
  icon,
  title,
  currentStep,
  step,
  classes,
  isActive
}) => {

  return(
    <div className={classes.navigation} onClick={onClick}>
      <div className={classes.icon}>{icon}</div>
      <span className={classes.dot} />
      <span className={classes.title}>{title}</span>
    </div>
  )
}

WizardNavigation.defaultProps = {
  isActive: (props) => props.currentStep === props.step ? true : false
}

export default injectSheet(styles)(WizardNavigation)
