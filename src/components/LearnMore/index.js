import React from "react";
import moreImg from "../../images/moreImg.png";
import "./learnmore.css";

const LearnMore = props => {
  return (
    <button
      className="learn-more pixoul_button"
      style={props.style}
      onClick={props.onClick}
    >
      <img className="more-img" src={moreImg} alt="more" />
      <div>
        <span>Learn More</span>
        <div className="separator" />
      </div>
    </button>
  );
};

export { LearnMore };
