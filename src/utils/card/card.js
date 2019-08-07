import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

const Card = ({
  className,
  innerRef,
  tag: Tag,
  ...attrs
}) => {

  const classes = cn(
    className,
    "card"
  )

  return <Tag {...attrs} className={classes} ref={innerRef} />
}

Card.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

Card.defaultProps = {
  tag: "div"
};

export default Card
