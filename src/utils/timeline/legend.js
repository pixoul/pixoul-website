import React from "react"
import injectSheet from 'react-jss'

const styles = {
  legend: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    display: 'inline-block',
    fontSize: '0.8125em',
    fontWeight: 'bold',
    letterSpacing: 2.36,
    textTransform: 'uppercase',
    color: '#ffffff',
    padding: {
      bottom: 29,
      left: 0
    }
  }
}

const Legend = ({
  title,
  classes,
  children
}) => (
  <div className={classes.legend}>
    <span className={classes.title}>{title}</span>
    <div className={classes.items}>
      {children}
    </div>
  </div>
)

Legend.defaultProps = {
  title: 'Timeline'
}

export default injectSheet(styles)(Legend)
