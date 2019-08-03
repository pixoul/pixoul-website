import React, { useContext, useRef } from "react"
import { Route, Redirect, Switch, withRouter, __RouterContext } from "react-router-dom"
import { useTransition, animated } from 'react-spring'

/* Page Components */
const Home = React.lazy(() => import("home/home"))
const About = React.lazy(() => import("about/about"))
const Capabilities = React.lazy(() => import("capabilities/capabilities"))
const Work = React.lazy(() => import("work/work"))
const Contact = React.lazy(() => import("contact/contact"))

function Routes(props){

  const { location } = useContext(__RouterContext)

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
      life: '0%'
    },
    enter: item => [{
      opacity: 1,
      life: '100%'
    }],
    leave: item => async (next, cancel) => {
      await next({opacity: 0})
      await next({life: '0%'})
    }
  })

  return transitions.map(({ item, props : style, key }) => (
      <animated.div key={key} style={{...style, height: "100%", width: "100%"}}>
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
