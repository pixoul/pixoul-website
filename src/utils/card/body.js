import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const CardBody = ({
  className,
  tag: Tag,
  children,
  ...attrs
}) => {

  const classes = cn(
    className,
    "card-body"
  );

  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardBody.defaultProps = {
  tag: "div"
};

export default CardBody;
