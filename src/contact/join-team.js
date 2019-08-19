import React, { useState } from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import * as emailjs from 'emailjs-com'
/* Utils */
import Button from "utils/button/button"

const JoinTeam = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [expertise, setExpertise] = useState('')
  const [resume, setResume] = useState(null)
  const [sent, setSent] = useState(false)

  const send = e => {
   e.preventDefault();
   const data = {
      "email": email,
      "name": name,
      "experience": experience,
      "expertise": expertise
    }

   emailjs.send("default_service", "pixoul_website", data, 'user_y5b1msGPAYKIW4szoHygG')
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

  const upload = (event) => {
    event.preventDefault();
    const data = new FormData()
    data.append('file', resume)
  }

  return  (
    <div className="join-team">
      <div className="contact-intro">
        <div className="contact-title">Apply to Join <span className="bold">Our Community</span> of <span className="strikethrough">Freelancers</span> Team Members.</div>
        <div className="contact-description"></div>
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
                type="email"
                id="#email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col sm={12} md={4}>
              <select
                className="form-select"
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="volvo">1</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <input
                className="form-input"
                type="expertise"
                id="#expertise"
                placeholder="Your Area of Expertise (Front-End Development, UI Design, QA, etc.)"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
              />
            </Col>
          </Row>
        </Container>

        <div className="form-action">
          <input type="file" name="file" className="form-file" onChange={(e) => setResume(e.target.files[0])}/>
          <Button className="form-button" onClick={upload} outline>Attach Resume</Button>
          <Button className="form-button" onClick={send}>Apply to Our Team</Button>
        </div>
      </form>
    </div>
  )
}

export default JoinTeam
