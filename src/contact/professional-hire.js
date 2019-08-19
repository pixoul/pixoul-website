import React, { useState } from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import * as emailjs from 'emailjs-com'
/* Utils */
import Button from "utils/button/button"

const ProfessionalHire = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [sent, setSent] = useState(false)

  const send = e => {
   e.preventDefault();
   const data = {
      "phone": phone,
      "email": email,
      "name": name,
      "comments": comments
    }

   emailjs.send("default_service", "pixoul_website", data, 'user_y5b1msGPAYKIW4szoHygG')
    .then((response) => setSent(true), (err) => {
        setSent(false)
        alert('Failed, please try again later');
    });
  }

  const clear = () => {
    setName('')
    setPhone('')
    setEmail('')
    setComments('')
    setSent(false)
  }

  return (
    <div className="professional-hire">
      <div className="contact-intro">
        <div className="contact-title">Request Your <span className="bold">Free Estimate</span> and Get to Work.</div>
        <div className="contact-description">Whether you’re looking for a single designer, developer, or project manager,—or an entire scrum team—we’ll match you with the perfect fit, fast.</div>
      </div>

      <form className="form">
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <input
                className="form-input"
                id="#name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col sm={12} md={4}>
              <input
                className="form-input"
                type="phone"
                id="#phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
            <Col sm={12} md={4}>
              <input
                className="form-input"
                type="email" id="#email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <input
                className="form-input"
                type="comments"
                id="#comments"
                placeholder="Comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </Col>
          </Row>
        </Container>

        <div className="form-action">
          <Button className="form-button" onClick={send}>Get In Touch</Button>
        </div>
      </form>

    </div>
  )
}

export default ProfessionalHire
