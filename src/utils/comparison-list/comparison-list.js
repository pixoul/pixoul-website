import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'
/* Images */
import check from "./check.svg"
import times from "./times.svg"

const styles = theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '376px',
    height: '480px',
    margin: {
      top: 0,
      right: 29,
      bottom: 0,
      left: 29
    },
    padding : {
      top: 48,
      right: 20,
      bottom: 48,
      left: 27
    },
    backgroundColor: props => props.active ? 'rgba(10, 104, 251, 0.1)' : 'inherit'
  },
  item : {
    fontSize: '1.375em',
    color: '#656b6f',
    whiteSpace: 'nowrap',
    "&:before": {
      content: props => `url(${props.type === "times" ? times : check})`,
      margin: {
        right: 18
      }
    }
  },
  title : {
    textTransform: 'uppercase',
    fontSize: 13.2,
    fontWeight: 'bold',
    letterSpacing: 2.4,
    textAlign: 'center',
    color: '#3c3d41',
    alignSelf: 'center'
  },
  action: {
    textTransform: 'uppercase',
    textAlign: 'center',
    alignSelf: 'center'
  }

})

const ComparisonList = ({
  title,
  action,
  items = [],
  classes
}) => {

  return (
    <div className={classes.list}>
      <div className={classes.title}>{title}</div>
      {items.map((item, i) => (
        <div key={i} className={classes.item}>{item}</div>
      ))}
      <div className={classes.action}>{action}</div>
    </div>
  )
}


export default injectSheet(styles)(ComparisonList)
