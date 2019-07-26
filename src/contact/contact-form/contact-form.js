import React from "react"
import "./contact-form.scss"
import { Row, Col, Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";

export default function ContactForm(){
  return(
    <div className="contact-form">
      <Form className="form">
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="#name">Name</label>
              <FormInput id="#name" placeholder="Name" />
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
          <Col sm="12"><FormTextarea className="form-message" /></Col>
          <Col sm="12"><Button block className="form-button">Send Message</Button></Col>
        </Row>
      </Form>
    </div>
  )
}
