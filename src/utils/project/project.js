import React from "react"
import injectSheet from 'react-jss'
/* Utils */
import Button from "utils/button/button"

const styles = theme => ({
  project: {
    display: 'flex',
    padding: 45
  },
  media: {
    maxWidth: 500
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 110
  },
  name: {
    fontSize: '2.4375em',
    fontWeight: 'bold',
    color: '#3c3d41',
    paddingBottom: 1
  },
  tagline: {
    fontSize: '0.8125em',
    fontWeight: 'bold',
    color: '#656b6f',
    textTransform: 'uppercase',
    paddingBottom: 25
  },
  description: {
    fontSize: '1.375em',
    color: '#656b6f',
    paddingBottom: 23
  },
  list: {
    padding: {
      bottom: 22
    }
  },
  item: {
    fontSize: '1.375em',
    fontStyle: 'italic',
    color: '#3c3d41',
    "&:after" : {
      content: '", "'
    },
    "&:last-child:after" : {
      content: '""'
    }
  },
  title: {
    fontSize: '1.375em',
    color: '#656b6f'
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
    },
    name: {
      fontSize: '2.1875em',
      padding: {
        top: 45
      }
    },
    tagline: {
      fontSize: '0.75em',
      padding: {
        top: 3,
        bottom: 30
      }
    },
    description: {
      fontSize: '1em'
    },
    item: {
      fontSize: '1em'
    },
    title: {
      fontSize: '1em'
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
      <span className={classes.name}>{name}</span>
      <span className={classes.tagline}>{tagline}</span>
      <span className={classes.description}>{description}</span>
      <div className={classes.list}>
        <span className={classes.title}>Services: </span>
        {services.map((service, i) => (
          <span className={classes.item} key={i}>{service}</span>
        ))}
      </div>
      <div className={classes.list}>
        <span className={classes.title}>Tools: </span>
        {tools.map((tool, i) => (
          <span className={classes.item} key={i}>{tool}</span>
        ))}
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Project)
