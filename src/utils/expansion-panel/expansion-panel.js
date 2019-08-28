import React, { useState } from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import { useSpring, animated } from 'react-spring'
import { useMeasure } from "./measure"
/* Icons */
import plus from "./plus.svg"
import minus from "./minus.svg"

const styles = theme => ({
  panel : {
    backgroundColor: '#fff',
    borderTop: '1px solid #dddddd'
  },
  header : {
    minHeight: '100px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#fff'
  },
  body: {
    "&:before": {
      content: '""',
      display: 'block',
      margin: '0 auto',
      marginLeft: '67px',
      width: '5%',
      paddingTop: '20px',
      borderBottom: '1px solid #dddddd'
    }
  }
})

const ExpansionPanel = ({
  header,
  children,
  classes
}) => {

  const [open, togglePannel] = useState(false)

  const [bind, {height}] = useMeasure()
  const props = useSpring({
    from: {
      height: open ? height : 0,
      opacity: 0,
      transform: `translate3d(0,${open ? '0%' : '100%'},0)`
    },
    to: {
      height: open ? height : 0,
      opacity: open ? 1 : 0,
      transform: `translate3d(0,${open ? '0%' : '100%'},0)`
    }
  })

  return(
    <div className={classes.panel}>
      <div className={classes.header} onClick={() => togglePannel(!open)}>
        {header}
        <img src={open ? minus : plus} alt={open ? minus : plus} />
      </div>
      <animated.div className={classes.body} style={props}>
        <div {...bind}>{children}</div>
      </animated.div>
    </div>
  )
}

export default injectSheet(styles)(ExpansionPanel)
