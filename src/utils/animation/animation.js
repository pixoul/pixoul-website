import React, { Component } from "react"
import { useTransition, animated } from 'react-spring'


function withAnimation(WrappedComponent){
  return class extends Component {
    render(){
      console.log(this.props)

      const transitions = useTransition(this.props.children, child => child.id, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
      })

      return transitions.map(({ item, props, key }) => (
         <animated.div key={key} style={props}>
             <WrappedComponent {...this.props} />
         </animated.div>
      ))
    }
  }
}


function Animation(props){
  console.log(props)
  const transitions = useTransition(props.children, child => child.key, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  })

  return transitions.map(({ i, p, k }) => (
     <animated.div key={k} style={p}>
         {props.children}
     </animated.div>
  ))
}

export {
  withAnimation,
  Animation
}
