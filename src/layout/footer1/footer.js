import React from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "shards-react";

import "./Footer.scss"

export default function Footer(){
  return(
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <ul className="list-collection">
              <li className="list-title">Pixoul, Inc.</li>
              <li className="list-item"><Link to={'/about'}>About</Link></li>
              <li className="list-item"><Link to={'/work'}>Work</Link></li>
              <li className="list-item"><Link to={'/capabilities'}>Capabilities</Link></li>
            </ul>

            <ul className="list-collection">
              <li className="list-title">Capabilities</li>
              <li className="list-item"><Link to={'/capabilities/strategy'}>Strategy</Link></li>
              <li className="list-item"><Link to={'/capabilities/design'}>Design</Link></li>
              <li className="list-item"><Link to={'/capabilities/technology'}>Technology</Link></li>
            </ul>
          </Col>
          <Col>
            <ul className="list-collection right">
              <li className="list-subtitle">We average a 211% increase on ROI.</li>
              <li className="list-item">See how we help ambitous brands use design thinking to dominate digital.</li>
              <li className="list-item"><Button theme="primary" tag={Link} to={'/contact'}>Contact Us</Button></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
