import React from "react"
import "./modal.scss"
import PropTypes from "prop-types"
import {useTransition, animated} from 'react-spring'

import times from "./times.svg"

const Modal = ({
  children,
  show,
  onClose
}) => {

  const transitions = useTransition(show, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)',
      life: '0%'
    },
    enter: item => [{
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)',
      life: '100%'
    }],
    leave: item => async (next, cancel) => {
      await next({transform: 'translate3d(100%, 0, 0)'})
      await next({opacity: 0})
      await next({life: '0%'})
    }
  })


  return transitions.map(({ item, key, props }) => item && (
    <animated.div key={key} style={props} className="modal">
      <div className="modal-header">
        <button onClick={e => onClose(e)} className="modal-close">
          <img src={times} alt={times}/>
        </button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </animated.div>
  ))

}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default Modal
