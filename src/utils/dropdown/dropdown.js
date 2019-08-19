import React, { useState, useRef, useEffect } from "react"
import "./dropdown.scss"

const Dropdown = ({
  placeholder = "Select",
  value,
  options = [],
  onChange
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
    <div ref={node} className="dropdown">
      <button className="dropdown-toggler" onClick={handleOpen}>
        {value || placeholder}
        {open ? <span className="up-arrow"/> : <span className="down-arrow"/>}
      </button>
      { open &&
        <ul className="dropdown-menu">
          {options.map((opt) => (
           <li className="dropdown-menu-item" key={opt} onClick={() => handleChange(opt)}>{opt}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Dropdown
