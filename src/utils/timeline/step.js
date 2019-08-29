import React from "react"
import injectSheet from 'react-jss'

const styles = theme => ({
  step: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 67,
    borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
    "&:last-child": {
      borderLeftWidth: 2,
      borderLeftStyle: 'solid',
      borderImage: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15)) 1 100%'
    },
    "&:before" : {
      content: '"\\2022"',
      fontSize: '2em',
      fontWeight: 'bold',
      display: 'inline-block',
      width: '1.5em',
      margin: {
        left: -9.5
      },
      color: props => {
        const colors = {
          'white': '#ffffff',
          'gray': '#99999C',
          'blue': '#276cf2'
        }
        return colors[props.color]
      }
    }
  },
  header: {
    fontSize: '1em',
    color: '#99999C',
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
  },
  '@media (max-width: 768px)': {
    step: {
      flexDirection: 'column'
    },
    header: {
      width: '100%',
      padding: {
        left: 30
      },
      margin: {
        top: -25
      }
    },
    content: {
      padding: {
        left: 30
      }
    },
    description: {
      padding: {
        right: 30
      }
    }
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
