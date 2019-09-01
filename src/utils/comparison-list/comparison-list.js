import React from "react"
/* Third-Party */
import injectSheet from 'react-jss'
/* Utils */
import Typography from "utils/typography/typography"
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
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap'
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
      width: '100%',
      margin: {
        left: 13,
        right: 13
      },
      padding: {
        top: 48,
        right: 0,
        bottom: 48,
        left: 0
      }
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
      <Typography variant="subtitle2" className={classes.title}>{title}</Typography>
      <div className={classes.items}>
        {items.map((item, i) => (
          <div key={i} className={classes.item}>
            <span className={classes.icon}>{type === "times" ? <TimesIcon color="#ff0000" /> : <CheckIcon color="#0a68fb" />}</span>
            <Typography variant="body1">{item}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.action}>{action}</div>
    </div>
  )
}


export default injectSheet(styles)(ComparisonList)
