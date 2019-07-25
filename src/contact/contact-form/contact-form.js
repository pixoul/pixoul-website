import React from "react"
import "./contact-form.scss"
import { Container, Row, Col, Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";

export default function ContactForm(){

  // const onChange = (item, event) => {
  //   this.setState({ [item]: event.target.value });
  // }
  //
  // const sendEmail = e => {
  //  e.preventDefault();
  //  const { firstName, lastName, phone, email, interestedIn } = this.state;
  //  const service_id = "default_service";
  //  const template_id = "template_3l1ZvrRp";
  //  emailjs.send(service_id,
  //   template_id, {
  //     "email": email,
  //     "first_name": firstName,
  //     "last_name": lastName,
  //     "phone": phone,
  //     "interestedIn": interestedIn,
  //   },
  //   'user_y5b1msGPAYKIW4szoHygG')
  //   .then((response) => {
  //       alert('Email sent!');
  //   }, (err) => {
  //       alert('Failed, please try again later');
  //   });
  // }

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
