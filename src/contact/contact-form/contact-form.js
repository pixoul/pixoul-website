import React, { useState } from "react"
import "./contact-form.scss"
import { Row, Col, Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import * as emailjs from 'emailjs-com';

export default function ContactForm(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const send = e => {
   e.preventDefault();
   const data = {
      "email": email,
      "name": name,
      "message": message
    }

   emailjs.send("default_service", "pixoul_website", data, 'user_y5b1msGPAYKIW4szoHygG')
    .then((response) => {
        setSent(true)
    }, (err) => {
        setSent(false)
        alert('Failed, please try again later');
    });
  }

  const clear = () => {
    setName('')
    setEmail('')
    setMessage('')
    setSent(false)
  }

  return(
    <div className="contact-form">
      { sent ?
        <div className="contact-message">
          <p className="success">Thank you! Someone will be in touch with you soon.</p>
          <Button className="form-button" onClick={clear}>Send Another Message</Button>
        </div>
        :
        <Form className="form">
          <Row>
            <Col>
              <FormGroup>
                <label htmlFor="#name">Name</label>
                <FormInput id="#name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <label htmlFor="#email">Email</label>
                <FormInput type="email" id="#email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm="12"><FormTextarea className="form-message" value={message} onChange={(e) => setMessage(e.target.value)} /></Col>
            <Col sm="12"><Button block className="form-button" onClick={send}>Send Message</Button></Col>
          </Row>
        </Form>
      }
    </div>
  )
}
