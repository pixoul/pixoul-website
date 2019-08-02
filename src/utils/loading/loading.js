import React, { useEffect, useState } from "react"
import "./loading.scss"
import { useTransition, useSpring, animated } from 'react-spring'
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-light-svg-icons'

const Loading = ({
  history
}) => {

  const [loading, toggleLoading] = useState(false)

  const transitions = useTransition(loading, null, {
    from: {
      backgroundColor: '#3180fb',
      transform: 'translate3d(0, -100%, 0)',
      life: '0%'
    },
    enter: item => [{
      transform: 'translate3d(0, 0%, 0)',
      life: '100%'
    }],
    leave: item => async (next, cancel) => {
      await next({life: '0%'})
      await next({transform: 'translate3d(0, 100%, 0)'})
    }
  })

  useEffect(() => {
    history.listen((location, action) => {
      console.log(location)
      toggleLoading(true)
      setTimeout(() => toggleLoading(false), 2000)
    });
  })

  return transitions.map(({ item, key, props }) => item && (
    <animated.div key={key} style={props} className="loading">
      <FontAwesomeIcon icon={faSpinner} spin className="loading-icon"/>
    </animated.div>
  ))
}

export default withRouter(Loading)
