import React, { Component } from "react";
import "./contact-form.css";

const contactFormImages = {
  envelope: require("../../images/contactFormEnvelope.png")
};

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
          <form className="contact_section_form">
            <div className="group">
              <input
                type="text"
                id="contact_form_first_name"
                required="required"
              />
              <label htmlFor="contact_form_first_name">
                First Name <span className="asterix">*</span>
              </label>
            </div>
            <div className="group">
              <input
                type="text"
                id="contact_form_last_name"
                required="required"
              />
              <label htmlFor="contact_form_last_name">
                Last Name <span className="asterix">*</span>
              </label>
            </div>
            <div className="group">
              <input type="text" id="contact_form_email" required="required" />
              <label htmlFor="contact_form_email">
                Email <span className="asterix">*</span>
              </label>
            </div>
            <div className="group">
              <input type="text" id="contact_form_phone" required="required" />
              <label htmlFor="contact_form_phone">
                Phone <span className="asterix">*</span>
              </label>
            </div>
            <div className="group group_last_child">
              <input
                type="text"
                id="contact_form_interest"
                required="required"
              />
              <label htmlFor="contact_form_interest">
                I'm Interested In...<span className="asterix">*</span>
              </label>
            </div>
            <div className="contact_form_submit_btn_container">
              <button className="contact_form_submit_btn" value="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PixoulContactForm;
