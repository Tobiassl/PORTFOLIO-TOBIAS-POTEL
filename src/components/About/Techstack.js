import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  AiFillHtml5, 
} from "react-icons/ai";
import {
  BsFiletypeCss
} from "react-icons/bs";
import {
  FiFigma
} from "react-icons/fi";
import {
  SiMysql,
  SiAstro,
  SiSvelte
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeCss />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAstro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSvelte />
      </Col>

    </Row>
  );
}

export default Techstack;
