import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/Kong.png";
import editor from "../../Assets/Projects/CLIMA.png";
import chatify from "../../Assets/Projects/sw.jpeg";
import bitsOfCode from "../../Assets/Projects/LAVANDERIA.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Algunos de mis <strong className="purple">Proyectos web</strong>
        </h1>
        <p style={{ color: "white" }}>
          Puedes ver todos mis proyectos en mi GitHub
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sitios web low cost"
              description="Una web simple, hecha con HTML, CSS y JS en el que ofrezco servicio de sitio web a bajo costo. Esta alojada, puedes encontrarla en google si la buscas."
              ghLink="https://github.com/Tobiassl/SERVICIO-VENTA-PAGINAS-WEBS"
              demoLink="https://sitiosweblowcost.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Lavanderia Web Site"
              description="Un sitio web hecho para un cliente dueño de una lavanderia ubicada en Valencia. Creado con HTML, CSS y JS"
              ghLink="https://github.com/Tobiassl/LAVANDERIA-WEB-SITE"
              demoLink="https://www.pslavanderia.es/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="App Weather"
              description="Una aplicacion web creada en React + Vite para mostrar el clima de cualquier lugar en el mundo, utilizando la API de OpenWeatherMap."
              ghLink="https://github.com/Tobiassl/APP-WEATHER-REACT-VITE"
              demoLink="https://tobiassl.github.io/APP-WEATHER-REACT-VITE/"              
            />
          </Col>

          <h1 className="project-heading">
          Proyecto <strong className="purple">App KONG (Figma)</strong>
        </h1>
        <p style={{ color: "white" }}>
          Puedes ver el prototipo de la App en Figma haciendo click en el boton Ver Prototipo, debajo
        </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="App KONG (Beta)"
              description="Una App para la compania KONG, en la cual puedes registrar a tu mascota y ver todos los datos de su salud de una forma accesible, entre otras funciones. Hecho en Figma."
              ghLink={false}
              figmaLink="https://www.figma.com/proto/RVUNgF8syXMHX6TF8eLzIx/KONG?page-id=0%3A1&type=design&node-id=1848-21757&viewport=286%2C645%2C0.09&t=udlOS3zzlwqtkCN1-1&scaling=scale-down&starting-point-node-id=1653%3A14920&show-proto-sidebar=1&mode=design"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
