import React, { useState, useRef } from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
import * as emailjs from 'emailjs-com'
/* Utils */
import Button from "utils/button/button"
import Dropdown from "utils/dropdown/dropdown"

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
    fileInput.current.click()
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
          <input ref={fileInput} type="file" name="file" className="form-file" onChange={(e) => setResume(e.target.files[0])}/>
          <Button className="form-button" onClick={upload} outline>{ resume ? 'Resume Uploaded' : 'Attach Resume'}</Button>
          <Button className="form-button" onClick={send}>Apply to Our Team</Button>
        </div>
      </form>
    </div>
  )
}

export default JoinTeam
