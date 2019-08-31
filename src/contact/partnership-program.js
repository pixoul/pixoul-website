import React, { useState } from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import * as emailjs from 'emailjs-com'
/* Utils */
import Typography from "utils/typography/typography"
import Button from "utils/button/button"
import { Form, Input } from "utils/form"

const PartnershipProgram = () => {

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
    <div className="partnership-program">
        <div className="contact-intro">
          <Typography variant="h1" color="primary" align="center">Share the Love, and <br /><strong>Get Paid.</strong></Typography>
          <Typography variant="h5" color="secondary" align="center">We’re always looking for new clients or additions to our freelancer network.  Got the perfect fit in mind?  Let us know—we pay for every quality connection.</Typography>
        </div>
        <Form
          label="Apply to Our Team"
          onSubmit={send}
        >
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <Input
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col sm={12} md={4}>
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>
              <Col sm={12} md={4}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Input
                  type="comments"
                  name="comments"
                  placeholder="Comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </Col>
            </Row>
          </Container>
        </Form>
    </div>
  )
}

export default PartnershipProgram
