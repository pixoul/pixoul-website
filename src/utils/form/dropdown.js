import React, { useState, useRef, useEffect } from "react"
/* Third-Party */
import injectSheet from 'react-jss'

const styles = theme => ({
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    margin: 18,
    width: props => props.fullWidth ? '100%' : theme.input.width ? theme.input.width : 320
  },
  toggler: {
    width: '100%',
    backgroundColor: 'rgba(60, 61, 65, 0.5)',
    padding: {
      top: 17,
      right: 0,
      bottom: 15,
      left: 18
    },
    color: 'white',
    outline: 'none',
    fontSize: '1em',
    cursor: 'pointer',
    textAlign: 'left',
    border: '2px solid rgb(238, 238, 238)',
    borderStyle: 'inset',
    borderRadius: 4.8,
    "&:active": {
      opacity: 0.5
    }
  },
  upArrow: {
    "&:after": {
      content: '"\\25b2"',
      float: 'right',
      marginRight: 27
    }
  },
  downArrow: {
    "&:after": {
      content: '"\\25bc"',
      float: 'right',
      marginRight: 27
    }
  },
  menu: {
    zIndex: 10,
    listStyle: 'none',
    paddingLeft: 0,
    position: 'absolute',
    top: '100%',
    left: 0,
    margin: 0,
    width: '100%'
  },
  item: {
    backgroundColor: 'rgba(60, 61, 65, 0.5)',
    padding: {
      top: 17,
      right: 0,
      bottom: 15,
      left: 18
    },
    color: 'white',
    outline: 'none',
    fontSize: '1em',
    cursor: 'pointer',
    "&:active, &:hover": {
      opacity: 0.8
    }
  },
  '@media (max-width: 768px)': {
    dropdown: {
      margin: '18px 0px',
      width: '100% !important'
    }
  }
})

const Dropdown = ({
  placeholder = "Select",
  value,
  options = [],
  onChange,
  classes
}) => {

  const [open, setOpen] = useState(false)
  const node = useRef()

  const handleClick = e => {
    if(node.current.contains(e.target)) return
    setOpen(false)
  }

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  }

  const handleOpen = e => {
    e.preventDefault()
    setOpen(!open)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [])

  return(
    <div ref={node} className={classes.dropdown}>
      <button className={classes.toggler} onClick={handleOpen}>
        {value || placeholder}
        {open ? <span className={classes.upArrow}/> : <span className={classes.downArrow}/>}
      </button>
      { open &&
        <ul className={classes.menu}>
          {options.map((opt) => (
           <li className={classes.item} key={opt} onClick={() => handleChange(opt)}>{opt}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default injectSheet(styles)(Dropdown)
