import React, { useState } from "react"
import "./contact-form.scss"
import { Container, Row, Col } from 'react-grid-system';
import Button from "utils/button/button"
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
        <form className="form">
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <div className="form-group">
                  <label htmlFor="#name">Name</label>
                  <input className="form-input" id="#name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="form-group">
                  <label htmlFor="#email">Email</label>
                  <input className="form-input" type="email" id="#email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="form-group">
            <label htmlFor="#message">Message</label>
            <textarea className="form-textarea" id="#message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
          </div>

          <Button block className="form-button" onClick={send}>Send Message</Button>
        </form>
      }
    </div>
  )
}
