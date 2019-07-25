import React from "react";
import { Container, Row, Col, Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import "./contact.scss"

import Opening from "utils/opening/opening"
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
            <ul className="list-collection">
              <li className="list-title light">Phone</li>
              <li className="list-item light"><a >(616) 914-9356</a></li>
              <li className="list-title light">Email</li>
              <li className="list-item light"><a >hello@pixoulinc.com</a></li>
            </ul>
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
