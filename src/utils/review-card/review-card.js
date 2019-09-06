import React from "react"
import injectSheet from 'react-jss'
import Typography from "utils/typography/typography"
const styles = theme => ({
  review : {
    padding: {
      left: 135,
      right: 135
    }
  },
  reviewer: {
    "&:before" : {
      content: '""',
      display: 'block',
      margin: '0 auto',
      width: 120,
      padding: {
        top: 40
      },
      borderBottom: '1px solid #eeeeee'
    }
  },
  avatar: {
    height: 60,
    width: 60,
    margin: {
      top: 48,
      right: 'auto',
      bottom: 24,
      left: 'auto'
    }
  },
  '@media (max-width: 768px)': {
    review: {
      padding: {
        right: 30,
        left: 30
      }
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
      <Typography variant="quote" align="center">{review}</Typography>
      <div className={classes.reviewer}>
        <img src={avatar} alt={avatar} draggable="false" className={classes.avatar}/>
        <Typography variant="subtitle2" align="center">{reviewer}</Typography>
        <Typography variant="body2" align="center">{designation}</Typography>
      </div>
    </div>
  )
}


export default injectSheet(styles)(ReviewCard)
