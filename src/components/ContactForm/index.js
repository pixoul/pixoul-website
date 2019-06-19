import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./contact-form.css";

class PixoulContactForm extends Component {
  render() {
    const { heading, isAnimated } = this.props;

    return (
      <div className="contact_section_container">
        <div className="contact-background" />
        <CSSTransition
          in={isAnimated}
          timeout={{
            appear: 900,
            enter: 1250,
            exit: 300,
          }}
          classNames="contact-title-animation"
          onEnter={() => {}}
          onExited={() => {}}
        >
          <span className="contact_section_heading">{heading}</span>
        </CSSTransition>

        <CSSTransition
          in={isAnimated}
          timeout={{
            appear: 900,
            enter: 1500,
            exit: 50,
          }}
          classNames="form-animation"
          onEnter={() => {}}
          onExited={() => {}}
        >
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
                <input
                  type="email"
                  id="contact_form_email"
                  required="required"
                  autoComplete="email"
                />
                <label htmlFor="contact_form_email">
                  Email <span className="asterix">*</span>
                </label>
              </div>
              <div className="group">
                <input
                  type="tel"
                  id="contact_form_phone"
                  required="required"
                  autoComplete="tel"
                />
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
 
        </CSSTransition>
      </div>
    );
  }
}

export default PixoulContactForm;
