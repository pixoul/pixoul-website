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
        <div class="contact_section_form_container">
          <form class="contact_section_form">
            <div class="group">
              <input
                type="text"
                id="contact_form_first_name"
                required="required"
              />
              <label for="contact_form_first_name">
                First Name <span class="asterix">*</span>
              </label>
            </div>
            <div class="group">
              <input
                type="text"
                id="contact_form_last_name"
                required="required"
              />
              <label for="contact_form_last_name">
                Last Name <span class="asterix">*</span>
              </label>
            </div>
            <div class="group">
              <input type="text" id="contact_form_email" required="required" />
              <label for="contact_form_email">
                Email <span class="asterix">*</span>
              </label>
            </div>
            <div class="group">
              <input type="text" id="contact_form_phone" required="required" />
              <label for="contact_form_phone">
                Phone <span class="asterix">*</span>
              </label>
            </div>
            <div class="group group_last_child">
              <input
                type="text"
                id="contact_form_interest"
                required="required"
              />
              <label for="contact_form_interest">
                I'm Interested In...<span class="asterix">*</span>
              </label>
            </div>
            <div class="contact_form_submit_btn_container">
              <button class="contact_form_submit_btn" value="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const contactFormImages = {
  envelope: require("../images/contactFormEnvelope.png")
};

export default PixoulContactForm;
