import React from "react";
import { Container, Row, Col } from "shards-react";
import "./contact.scss"

import Header from "layout/header/header"
import Footer from "layout/footer/footer"
import Opening from "utils/opening/opening"
import ContactForm from "contact/contact-form/contact-form"

export default function Contact() {
  return(
    <div>
      <Header />
        <div className="contact">
            <Container>
              <Opening
                title="Contact Us"
                subtitle="See how we help ambitious brands use design thinking to dominate digital."
                theme="light"
              />

              <Row>
                <Col>
                  <ul className="list-collection">
                    <li className="list-title light">Phone</li>
                    <li className="list-item light"><a href="tel:6169149356">(616) 914-9356</a></li>
                    <li className="list-title light">Email</li>
                    <li className="list-item light"><a href="mailto:hello@pixoulinc.com">hello@pixoulinc.com</a></li>
                  </ul>
                </Col>
                <Col>
                  <ContactForm />
                </Col>
              </Row>
            </Container>
        </div>

      <Footer theme="light" />
    </div>
  )
}
