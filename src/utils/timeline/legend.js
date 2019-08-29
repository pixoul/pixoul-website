import React from "react"
import injectSheet from 'react-jss'

/* Legend - Displays and controls the structure of the legend */
const Legend = injectSheet({
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
    listStyle: 'none',
    padding: {
      bottom: 29,
      left: 0
    }
  }
})(({
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
))

Legend.defaultProps = {
  title: 'Timeline'
}

/* LegendItem - Displays the item inside of the legend */
const LegendItem = injectSheet({
  item: {
    display: 'inline-block',
    fontSize: '1em',
    color: '#ffffff',
    padding: {
      bottom: 17,
      left: 17
    },
    width: '100%',
    "&:before": {
      content: '"\\2022"',
      fontWeight: 'bold',
      display: 'inline-block',
      width: 17,
      marginLeft: '-1em',
      color: props => {
        const colors = {
          'white': '#ffffff',
          'clear': 'rgba(255,255,255,0.3)',
          'blue': '#276cf2'
        }
        return colors[props.color]
      }
    }
  }
})(({
  color,
  children,
  classes
}) => (<span className={classes.item}>{children}</span>))

LegendItem.defaultProps = {
  color: 'white'
}

export {
  LegendItem,
  Legend
}
