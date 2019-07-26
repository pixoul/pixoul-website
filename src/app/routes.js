import React, { useContext } from "react"
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
      transform: 'scale3d(0.5,0.5,0.5)'
    },
    from: {
      opacity: 0,
      transform: 'scale3d(0.5,0.5,0.5)'
    },
    enter: {
      opacity: 1,
      transform: 'scale3d(1,1,1)'
    },
    leave: {
      opacity: 0,
      transform: 'scale3d(0.5,0.5,0.5)'
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
   ))
}

export default withRouter(Routes)
