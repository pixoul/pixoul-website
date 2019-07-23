import React from "react";
import { Container, Row, Col, Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import "./Contact.scss"

export default function Contact() {
  return(
    <Container className="contact">
      <Row>
        <Col>
          <h3>Contact Us</h3>
          <p>See how we help ambitious brands use design thinking to dominate digital.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="list-collection">
            <li className="list-title">Phone</li>
            <li className="list-item"><a >(616) 914-9356</a></li>
          </ul>

          <ul className="list-collection">
            <li className="list-title">Email</li>
            <li className="list-item"><a >hello@pixoulinc.com</a></li>
          </ul>
        </Col>
        <Col>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <label htmlFor="#full-name">Full Name</label>
                  <FormInput id="#full-name" placeholder="Full Name" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label htmlFor="#email">Email</label>
                  <FormInput type="email" id="#email" placeholder="Email" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="12"><FormTextarea /></Col>
              <Col sm="12"><Button block>Send Message</Button></Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
