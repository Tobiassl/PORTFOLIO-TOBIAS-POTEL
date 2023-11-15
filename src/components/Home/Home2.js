import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> PRESENTO </span>
            </h1>
            <p className="home-about-body">
              Soy un apasionado de la programacion y el diseño, al menos he aprendido algo, creo... 🤷‍♂️
             
              <br />
              <br />
              Mi campo de interes es construir nuevos proyectos en el area de la &nbsp;
              <i>
                <b className="purple">programacion web y el diseño de productos digitales </b>
                
              </i>
              <br />
              <br />
              Siempre que es posible, también aplico mi pasión por desarrollar productos con <b className="purple">React.js</b> y otros frameworks como
              &nbsp;
              <i>
                <b className="purple">Astro y Svelte</b>
              </i>
              <br/>
              <br/>
              Ademas, para diseñar productos digitales de alta calidad, utilizo <b className="purple">Figma</b>
              &nbsp;
            </p>
           
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
             No dudes en <span className="purple">conectarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tobiassl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tobiaspotel/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tobiassl_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
