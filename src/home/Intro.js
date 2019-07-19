import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from "shards-react";

import bg from "images/bg.png"

const BackgroundImage = () => (
    <Parallax>
        <img src={bg} />
    </Parallax>
);

export default function Intro() {
  return(
    <div><BackgroundImage /></div>
  )
}
