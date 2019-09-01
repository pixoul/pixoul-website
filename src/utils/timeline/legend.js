import React from "react"
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

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
  },
  items: {
    width: '100%',
    margin:{
      left: 20
    }
  }
}

const Legend = ({
  title,
  classes,
  children
}) => (
  <div className={classes.legend}>
    <Typography variant="subtitle2" color="white">{title}</Typography>
    <div className={classes.items}>
      {children}
    </div>
  </div>
)

Legend.defaultProps = {
  title: 'Timeline'
}

export default injectSheet(styles)(Legend)
