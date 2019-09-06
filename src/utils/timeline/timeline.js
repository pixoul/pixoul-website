import React from "react"
import injectSheet from 'react-jss'

const styles = theme => ({
  timeline: {
    width: '100%'
  }
})

const Timeline = ({
  children,
  classes
}) => (
  <div className={classes.timeline}>
    {children}
  </div>
)


export default injectSheet(styles)(Timeline)
