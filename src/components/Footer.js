import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <ul className="footer-icons" style={{color: "white"}}>
            <li className="social-icons">
            <FiPhoneCall /> +34 667 47 65 22
            </li>
           
            <li className="social-icons">
       
            <AiOutlineMail /> tobiaspotel@gmail.com
            </li>
            
          </ul>
          
        </Col>

        <Col md="4" className="footer-copywright" >
          <h3>Copyright © {year} Tobiassl</h3>
        </Col>
        <Col md="4" className="footer-body" >
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Tobiassl"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
    
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tobiaspotel/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/tobiassl_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
