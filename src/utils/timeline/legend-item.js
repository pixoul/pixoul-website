import React from "react"
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: {
      bottom: 17
    },
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
}) => (<div className={classes.item}><Typography variant="caption" color="white">{children}</Typography></div>)

LegendItem.defaultProps = {
  color: 'white'
}

export default injectSheet(styles)(LegendItem)
