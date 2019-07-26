import React from "react"
import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import { useTransition, animated } from 'react-spring'


/* Page Components */
import Home from "home/home"
import About from "about/about"
import Capabilities from "capabilities/capabilities"
import Work from "work/work"
import Contact from "contact/contact"

function Routes(props){
  const options = {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)'
    }
  }

  const transitions = useTransition(props.location, item => item.key, options)

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
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
   ))
}

export default withRouter(Routes)
