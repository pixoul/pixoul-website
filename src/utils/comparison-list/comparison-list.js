import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'
/* Icons */
import CheckIcon from "utils/icons/check"
import TimesIcon from "utils/icons/times"

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
    marginTop: 25
  },
  icon: {
    margin: {
      right: 18
    }
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
  type,
  classes
}) => {

  return (
    <div className={classes.list}>
      <div className={classes.title}>{title}</div>
      <div className={classes.items}>
        {items.map((item, i) => (
          <div key={i} className={classes.item}>
            <span className={classes.icon}>{type === "times" ? <TimesIcon color="#ff0000" /> : <CheckIcon color="#0a68fb" />}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className={classes.action}>{action}</div>
    </div>
  )
}


export default injectSheet(styles)(ComparisonList)
