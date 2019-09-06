import React, { useEffect, useState } from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import { useTransition, animated } from 'react-spring'
import { withRouter } from "react-router-dom"

const styles = theme => ({
  loading: {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Loading = ({
  history,
  watchRoutes = false,
  classes
}) => {

  const [loading, toggleLoading] = useState(false)

  const transitions = useTransition(loading, null, {
    from: {
      backgroundColor: '#276CF2',
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
      if(watchRoutes === true){
        history.listen((location, action) => {
          toggleLoading(true)

          setTimeout(() => {
            window.scroll(0, 0)
            toggleLoading(false)
          }, 1000)
        });
      }
    })


  return transitions.map(({ item, key, props }) => item && (
    <animated.div key={key} style={props} className={classes.loading} />
  ))
}

export default withRouter(injectSheet(styles)(Loading))
