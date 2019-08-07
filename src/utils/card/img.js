import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const CardImg = ({
  className,
  top,
  bottom,
  tag: Tag,
  ...attrs
}) => {

  const classes = cn(className, {
    "card-img-top": top,
    "card-img-bottom": bottom
  });

  return <Tag {...attrs} className={classes} />;
}

CardImg.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

CardImg.defaultProps = {
  tag: "img"
}

export default CardImg
