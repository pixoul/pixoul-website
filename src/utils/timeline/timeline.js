import React from "react"
import injectSheet from 'react-jss'

const styles = theme => ({
  timeline: {
    borderLeft: '2px solid rgba(255, 255, 255, 0.2)'
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
