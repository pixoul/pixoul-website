import React, { useState, useRef } from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import * as emailjs from 'emailjs-com'
/* Utils */
import Typography from "utils/typography/typography"
import Button from "utils/button/button"
import Dropdown from "utils/dropdown/dropdown"
import { Form, Input } from "utils/form"
/* Icons */
import check from "./images/check.svg"

const JoinTeam = () => {
  const fileInput = useRef()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState(undefined)
  const [expertise, setExpertise] = useState('')
  const [resume, setResume] = useState(null)
  const [sent, setSent] = useState(false)

  const send = e => {
   e.preventDefault();
   const data = {
      "email": email,
      "name": name,
      "experience": experience,
      "expertise": expertise,
      "resume": resume
   }

   emailjs.send("default_service", "join_team", data, 'user_y5b1msGPAYKIW4szoHygG')
    .then((response) => setSent(true), (err) => {
        setSent(false)
        alert('Failed, please try again later');
    });
  }

  const clear = () => {
    setName('')
    setExperience('')
    setEmail('')
    setExpertise('')
    setSent(false)
  }

  const upload = e => {
    e.preventDefault()
    fileInput.current.click()
  }

  return  (
    <div className="join-team">
      <div className="contact-intro">
        <Typography variant="h1" color="primary" align="center">Apply to Join <strong>Our Community</strong> <br /> of <strike>Freelancers</strike> Team Members.</Typography>
      </div>

      <div className="incentive-group">
        <ul className="incentive-list">
          <li className="incentive-item">Stop Freelancing, Start Building a Business</li>
          <li className="incentive-item">Work with Fortune 500 Companies</li>
        </ul>
        <ul className="incentive-list">
          <li className="incentive-item">Weekly 1-on-1 Business Advising</li>
          <li className="incentive-item">Senior-Level Professionals Only</li>
        </ul>
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
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col sm={12} md={4}>
              <Dropdown
                value={experience}
                onChange={value => setExperience(value)}
                options={['1 - 2 Years', '3 - 5 Years', '5 - 7 Years', '7+ Years']}
                placeholder="Years of Experience"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Input
                type="expertise"
                name="expertise"
                placeholder="Your Area of Expertise (Front-End Development, UI Design, QA, etc.)"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
              />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  )
}

export default JoinTeam
