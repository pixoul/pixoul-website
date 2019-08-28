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
    margin: {
      top: 0,
      right: 29,
      bottom: 0,
      left: 29
    },
    padding : {
      top: 48,
      right: 27,
      bottom: 48,
      left: 27
    },
    borderRadius: 10,
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
    },
    marginTop: 25
  },
  items: {
    margin: '0 auto'
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
    alignSelf: 'center',
    marginTop: 50
  },
  '@media (max-width: 768px)': {
    list: {
      margin: {
        right: 12,
        left: 12
      }
    },
    item : {
      fontSize: '1em'
    }
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
      <div className={classes.items}>
        {items.map((item, i) => (
          <div key={i} className={classes.item}>{item}</div>
        ))}
      </div>
      <div className={classes.action}>{action}</div>
    </div>
  )
}


export default injectSheet(styles)(ComparisonList)
