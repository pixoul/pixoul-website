import React, { useState } from "react"
/* Third-Party */
import * as emailjs from 'emailjs-com'
/* Utils */
import Typography from "utils/typography/typography"
import { Form, Input } from "utils/form"

const PartnershipProgram = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')

  const send = e => {
     e.preventDefault();
     const data = {
        "phone": phone,
        "email": email,
        "name": name,
        "comments": comments
      }

     emailjs.send("default_service", "general_contact", data, 'user_y5b1msGPAYKIW4szoHygG')
  }

  return (
    <div className="partnership-program">
        <div className="contact-intro">
          <Typography variant="header1" align="center" weight="normal">Share the Love, and <br /><strong>Get Paid.</strong></Typography>
          <Typography variant="subtitle1" align="center">We’re always looking for new clients or additions to our freelancer network.  Got the perfect fit in mind?  Let us know—we pay for every quality connection.</Typography>
        </div>

        <Form label="Apply to Our Team" onSubmit={send} >
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

export default PartnershipProgram
