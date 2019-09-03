import React from "react"
import injectSheet from 'react-jss'
/* Utils */
import Typography from "utils/typography/typography"

const styles = theme => ({
  project: {
    display: 'flex',
  },
  media: {
    maxWidth: 500
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 80
  },
  item: {
    fontStyle: 'italic',
    color: '#3c3d41',
    "&:after" : {
      content: '", "'
    },
    "&:last-child:after" : {
      content: '""'
    }
  },
  '@media (max-width: 768px)': {
    project: {
      flexDirection: 'column',
      padding: 30
    },
    media: {
      maxWidth: '100%'
    },
    content: {
      padding: {
        left: 0
      }
    }
  }
})

const Project = ({
  media,
  name,
  tagline,
  description,
  services = ['N/A'],
  tools = ['N/A'],
  classes
}) => (
  <div className={classes.project}>
    <div>
      <img src={media} alt={media} className={classes.media} />
    </div>
    <div className={classes.content}>
      <Typography variant="header1">{name}</Typography>
      <Typography variant="subtitle2">{tagline}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="body2">
        Services: {services.map((service, i) => (<span className={classes.item} key={i}>{service}</span>))}
      </Typography>
      <Typography variant="body2">
        Tools: {tools.map((tool, i) => (<span className={classes.item} key={i}>{tool}</span>))}
      </Typography>
    </div>
  </div>
)

export default injectSheet(styles)(Project)
