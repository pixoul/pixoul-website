import React, { Component } from "react";
import "./contact-form.css";

class PixoulContactForm extends Component {
  render() {
    const { heading } = this.props;

    return (
      <div className="contact_section_container">
        <div className="contact_section_heading_container">
          <span className="contact_section_heading">{heading}</span>
        </div>
        <div className="contact_section_img_container">
          <img
            src={contactFormImages.envelope}
            className="contact_section_img"
            alt="Contact Form Envelope"
          />
        </div>
        <div className="contact_section_form_container">
          <form className="contact_section_form" />
        </div>
      </div>
    );
  }
}

const contactFormImages = {
  envelope: require("../images/contactFormEnvelope.png")
};

export default PixoulContactForm;
