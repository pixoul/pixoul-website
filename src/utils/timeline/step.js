import React from "react"
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"

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
        left: -11
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
    width:'30%',
    margin: {
      top: 12
    }
  },
  content: {
    width: '70%',
  },
  '@media (max-width: 768px)': {
    step: {
      flexDirection: 'column'
    },
    header: {
      width: '100%',
      margin: {
        top: -39,
        left: 30
      }
    },
    content: {
      width: '100%',
      margin: {
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
    <div className={classes.header}>
      <Typography variant="caption" color="white" opacity={0.5}>{header}</Typography>
    </div>
    <div className={classes.content}>
      <Typography variant="subtitle2" color="white">{title}</Typography>
      <Typography variant="body1" color="white" className={classes.description}>{description}</Typography>
    </div>
  </div>
)

Step.defaultProps = {
  color: 'white'
}

export default injectSheet(styles)(Step)
