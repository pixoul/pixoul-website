import React, { Component } from "react";
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import "./contact-form.css";

class PixoulContactForm extends Component {
  static propTypes = {
    delay: PropTypes.number,
  }

  static defaultProps = {
    delay: 0,
  }

  state = {
    loaded: false,
  }

  onExited = () => {
    const { delay } = this.props;
    if(delay === 0) {
      this.setState({ loaded: true });
      this.props.onExited();
    }
  }

  render() {
    const { loaded } = this.state;
    const { heading, isAnimated, delay } = this.props;
    let timeout = {
      appear: 0 + delay,
      enter: 1000 + delay,
      exit: 600,
    };

    let subtitleTimeout = {
      appear: 500 + delay,
      enter: 1000 + delay,
      exit: 600,
    };

    let formTimeout = {
      appear: 600 + delay,
      enter: 1000 + delay,
      exit: 600,
    };

    const titleClass = delay > 0 ? 'contact-title-animation' : 'contact-title-animation-nodelay';
    const subtitleClass = delay > 0 ? 'contact-subtitle-animation' : 'contact-subtitle-animation-nodelay';
    const formClass = delay > 0 ? 'form-slide-animation' : 'form-slide-animation-nodelay';

    return (
      <div className="contact_section_container">
        <div className="contact-background" />
        <CSSTransition
          in={isAnimated && !loaded}
          timeout={timeout}
          classNames={titleClass}
          onEnter={() => {}}
          onExited={() => {}}
        >
          <span className="contact_section_heading">{heading}</span>
        </CSSTransition>
        <div className="contact-section">
          <div className="contact_section_form_container">
            <CSSTransition
              in={isAnimated && !loaded}
              timeout={subtitleTimeout}
              classNames={subtitleClass}
            >
              <h2>See how we help ambitious brands&nbsp;<br/> dominate digital.</h2>
            </CSSTransition>
            <CSSTransition
              in={isAnimated && !loaded}
              timeout={subtitleTimeout}
              classNames={subtitleClass}
            >
              <h3>Let's talk about your design and strategy needs.</h3>
              </CSSTransition>
          </div>
          <div className="contact_section_form_container">
            <CSSTransition
              in={isAnimated && !loaded}
              timeout={formTimeout}
              classNames={formClass}
              onExited={this.onExited}
            >
              <div className="form-animation-container">
              <form className="contact_section_form" autoComplete="on">
                <div className="group">
                  <input
                    type="text"
                    id="given-name"
                    required="required"
                    name="given-name"
                  />
                  <label htmlFor="contact_form_first_name">
                    First Name <span className="asterix">*</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    type="text"
                    id="family-name"
                    required="required"
                    name="family-name"
                  />
                  <label htmlFor="contact_form_last_name">
                    Last Name <span className="asterix">*</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                    name="tel"
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
        </div>
      </div>
    );
  }
}

export default PixoulContactForm;
