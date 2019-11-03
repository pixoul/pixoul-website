import React from "react"
import { Route, Redirect, Switch, withRouter } from "react-router-dom"

/* Page Components */
const Home = React.lazy(() => import("home/home"))
const About = React.lazy(() => import("about/about"))
const Talent = React.lazy(() => import("talent/talent"))
const Process = React.lazy(() => import("process/process"))
const FAQ = React.lazy(() => import("faq/faq"))

const Routes = ({
  location
}) => (
  <Switch>
      <Route path="/home" component={Home} />
      <Route path="/talent" component={Talent} />
      <Route path="/process" component={Process} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />

      <Route exact path='/' render={props => (
        <Redirect to={{ pathname: "/home", state: { from: location } }} />
      )}/>
  </Switch>
)

export default withRouter(Routes)
