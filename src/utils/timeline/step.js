import React from "react"
import injectSheet from 'react-jss'

const styles = theme => ({
  step: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 67,
    "&:before" : {
      content: '"\\2022"',
      fontSize: '2em',
      fontWeight: 'bold',
      display: 'inline-block',
      width: '1.5em',
      margin: {
        top: -9,
        left: -9
      },
      color: props => {
        const colors = {
          'white': '#ffffff',
          'clear': 'rgba(255,255,255,0.3)',
          'blue': '#276cf2'
        }
        return colors[props.color]
      }
    }
  },
  header: {
    fontSize: '1em',
    color: '#ffffff',
    opacity: 0.5,
    whiteSpace: 'nowrap',
    width: 300
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  title: {
    fontSize: '0.8125em',
    fontWeight: 'bold',
    letterSpacing: 2.36,
    color: '#ffffff',
    paddingBottom: 7,
    textTransform: 'uppercase'
  },
  description: {
    fontSize: '1em',
    color: '#ffffff'
  }
})


const Step = ({
  header,
  title,
  description,
  classes
}) => (
  <div className={classes.step}>
    <div className={classes.header}>{header}</div>
    <div className={classes.content}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </div>
  </div>
)

Step.defaultProps = {
  color: 'white'
}

export default injectSheet(styles)(Step)
