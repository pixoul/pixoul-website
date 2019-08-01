import React from "react";
import { Container, Row, Col } from "shards-react";
import "./contact.scss"

import Opening from "utils/opening/opening"
import SocialIcons from "utils/social-icons/social-icons"
import ContactForm from "contact/contact-form/contact-form"

export default function Contact() {
  return(
    <div className="contact">
        <Container>
          <Opening
            title="Contact Us"
            subtitle="See how we help ambitious brands use design thinking to dominate digital."
          />

          <Row>
            <Col>
              <ul className="contact-info">
                <li className="contact-title">Phone</li>
                <li className="contact-item"><a href="tel:6169149356">(616) 914-9356</a></li>
                <li className="contact-title">Email</li>
                <li className="contact-item"><a href="mailto:hello@pixoulinc.com">hello@pixoulinc.com</a></li>
              </ul>

              <div className="social-media">
                <SocialIcons theme="dark" />
              </div>
            </Col>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Container>
    </div>
  )
}
