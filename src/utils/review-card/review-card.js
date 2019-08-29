import React from "react"
import injectSheet from 'react-jss'

const styles = theme => ({
  review : {
    padding: {
      left: 135,
      right: 135
    }
  },
  content: {
    textAlign: 'center',
    color: '#374050'
  },
  text: {
    fontSize: '2.4375em',
    fontWeight: 300,
    lineHeight: 'normal',
    color: '#3c3d41',
    padding: {
      top: 24,
      bottom: 48
    },
    "&:after" : {
      content: '""',
      display: 'block',
      margin: '0 auto',
      width: 120,
      paddingTop: 40,
      borderBottom: '1px solid #eeeeee'
    }
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2.36,
    color: '#3c3d41',
    paddingTop: 24
  },
  designation: {
    fontSize: 16,
    fontWeight: 300,
    color: '#656b6f',
    paddingTop: 7
  },
  avatar: {
    width: 60,
    height: 60,
    margin: '0 auto'
  },
  '@media (max-width: 768px)': {
    review: {
      padding: {
        right: 30,
        left: 30
      }
    },
    text: {
      fontSize: '1.25em',
      padding: {
        bottom: 30
      },
      "&:after" : {
        paddingTop: 30
      }
    },
    name: {
      fontSize: '0.8125em'
    },
    designation: {
      fontSize: '1em'
    }
  }
})

const ReviewCard = ({
  review,
  avatar,
  reviewer,
  designation,
  classes
}) => {
  return(
    <div className={classes.review}>
      <div className={classes.content}>
        <div className={classes.text}>{review}</div>
        <img src={avatar} alt={avatar} draggable="false" className={classes.avatar}/>
        <div className={classes.name}>{reviewer}</div>
        <div className={classes.designation}>{designation}</div>
      </div>
    </div>
  )
}


export default injectSheet(styles)(ReviewCard)
