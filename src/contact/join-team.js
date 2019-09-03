import React, { useState, useRef } from "react"
/* Third-Party */
import * as emailjs from 'emailjs-com'
/* Utils */
import Typography from "utils/typography/typography"
import { Form, Input, Dropdown } from "utils/form"

const JoinTeam = () => {
  const fileInput = useRef()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState(undefined)
  const [expertise, setExpertise] = useState('')
  const [resume, setResume] = useState(null)

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
  }

  const upload = e => {
    e.preventDefault()
    fileInput.current.click()
  }

  return  (
    <div className="join-team">
      <div className="contact-intro">
        <Typography variant="header1" align="center" weight="normal">Apply to Join <strong>Our Community</strong> <br /> of <strike>Freelancers</strike> Team Members.</Typography>
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

      <Form label="Apply to Our Team" onSubmit={send}>
          <Input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Dropdown
            value={experience}
            onChange={value => setExperience(value)}
            options={['1 - 2 Years', '3 - 5 Years', '5 - 7 Years', '7+ Years']}
            placeholder="Years of Experience"
          />
          <Input
            type="expertise"
            name="expertise"
            placeholder="Your Area of Expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            fullWidth
          />
      </Form>
    </div>
  )
}

export default JoinTeam
