import React, { useState } from 'react'
/* Third-Party */
import injectSheet from 'react-jss'
/* Utils */
import { isValidInput, getRule, applyMask } from './validate'

const styles = theme => ({
  wrapper: {
    width: props => props.fullWidth ? `calc(100% - 78px)` : theme.input.width ? theme.input.width : 320,
    margin: 9
  },
  label: {
    color: theme.text.primary
  },
  input: {
    display: 'block',
    width: '100%',
    height: 'auto',
    padding: {
      top: 17,
      right: 0,
      bottom: 15,
      left: 18
    },
    fontSize: '1em',
    color: '#ffffff',
    backgroundColor: 'rgba(60, 61, 65, 0.5)',
    borderRadius: 4.8,
    boxSizing: 'border-box',
    "&::placeholder": {
      color: '#ffffff'
    },
    "&:focus": {
      outline: 'none'
    }
  },
  validated: {
    textAlign: 'center',
    color: theme.text.primary,
    cursor: 'pointer'
  },
  error: {
    color: theme.text.error,
    pointerEvents: 'none',
    padding: {
      top: 10
    }
  },
  '@media (max-width: 768px)': {
    wrapper: {
      width: '100% !important',
      margin: {
        top: 18,
        right: 0,
        bottom: 18,
        left: 0
      }
    }
  }
});

const Input = ({
  original,
  name,
  label,
  placeholder,
  onChange,
  value,
  type,
  match,
  classes,
  ...rest
}) => {

  const [isValidated, setValidation] = useState(false)
  const [activeMessage, setActiveMessage] = useState('')

  const checkValidation = () => {
    const { message } = getRule(type)

    if(value !== '' && value.length > 1){
      if(original === value){
        setValidation(false)
        setActiveMessage('')
      }

      if(match && value !== match){
        setValidation(false)
        setActiveMessage(`${label} does not match`)
      }

      if(isValidInput(value, type)){
        setValidation(true)
        setActiveMessage('')
      }else{
        setValidation(false)
        setActiveMessage(message)
      }

    }
  }

  return(
    <div className={classes.wrapper}>
        <label className={classes.label} htmlFor={name}>{label}</label>
        <input
          type={type}
          value={applyMask(value, type)}
          name={name}
          onBlur={checkValidation}
          onKeyUp={checkValidation}
          onChange={onChange}
          className={classes.input}
          placeholder={placeholder}
        />

      <div className={isValidated ? classes.validated : classes.error}>{activeMessage}</div>
    </div>
  )
}

export default injectSheet(styles)(Input);
