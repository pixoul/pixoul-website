import React from "react"
import injectSheet from 'react-jss'

const styles = {
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
          'gray': '#99999C',
          'blue': '#276cf2'
        }
        return colors[props.color]
      }
    }
  }
}

const LegendItem = ({
  color,
  children,
  classes
}) => (<span className={classes.item}>{children}</span>)

LegendItem.defaultProps = {
  color: 'white'
}

export default injectSheet(styles)(LegendItem)
