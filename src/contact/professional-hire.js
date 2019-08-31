import React, { useState } from "react"
/* Third-Party */
import * as emailjs from 'emailjs-com'
/* Utils */
import Typography from "utils/typography/typography"
import Button from "utils/button/button"
import { Form, Input } from "utils/form"

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
        <Typography variant="h1" color="primary" align="center">Request Your <strong>Free Estimate</strong> <br /> and Get to Work.</Typography>
        <Typography variant="h5" color="secondary" align="center">Whether you’re looking for a single designer, developer, or project manager,—or an entire scrum team—we’ll match you with the perfect fit, fast.</Typography>
      </div>

      <Form label="Get In Touch" onSubmit={send} >
          <Input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="phone"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="comments"
            name="comments"
            placeholder="Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            fullWidth
          />
      </Form>

    </div>
  )
}

export default ProfessionalHire
