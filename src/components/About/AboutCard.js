import React from "react";
import Card from "react-bootstrap/Card";
import Certificado from "../../Assets/Certificados.jpeg";
import CertificadoEOI1 from "../../Assets/CertificadoEOI1.jpg";
import CertificadoEOI2  from "../../Assets/CertificadoEOI2.jpg";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Tobias Potel </span>
            de <span className="purple"> Valencia, España.</span>
            <br />
            Soy diplomado en Desarrollo web front-end en la Universidad Tecnologica Nacional de Argentina (UTN) :
            <br />
            <br /> 
            <img src={Certificado} alt="Certificado" style={{ width: "100%" }}></img>
            <br />
            <br />
            Tambien, soy titulado en Diseño UX/UI en la Escuela de organizacion industrial (EOI) :
            <br />
            <br />
              <img src={CertificadoEOI1} alt="CertificadoEOI1" style={{ width: "100%" }}></img>
              <img src={CertificadoEOI2} alt="CertificadoEOI2" style={{ width: "100%", marginTop: "15px" }}></img>
            <br />
            <br />
            Ademas de programar o diseñar, tengo otros hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicar Futbol
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasear con mi familia
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
