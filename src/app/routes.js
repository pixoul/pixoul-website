import React, { useContext, useRef } from "react"
import { Route, Redirect, Switch, withRouter, __RouterContext } from "react-router-dom"
import { useTransition, animated } from 'react-spring'

/* Page Components */
import Home from "home/home"
import About from "about/about"
import Capabilities from "capabilities/capabilities"
import Work from "work/work"
import Contact from "contact/contact"

function Routes(props){

  const options = {
    initial: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    },
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)'
    }
  }

  const { location } = useContext(__RouterContext)

  const transitions = useTransition(location, location => location.pathname, options)

  return transitions.map(({ item, props : style, key }) => (
      <animated.div key={key} style={{...style, position: "absolute", height: "100%", width: "100%"}}>
           <Switch location={item}>
               <Route path="/home" component={Home} />
               <Route path="/work" component={Work} />
               <Route path="/capabilities" component={Capabilities} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />

               <Route exact path='/' render={props => (
                 <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
               )}/>
           </Switch>
       </animated.div>
   )
  )
}

export default withRouter(Routes)
