import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const workflowSteps = [
  {
    title: "Entiendo el proceso",
    text: "Ubico usuarios, tareas repetitivas, datos críticos y puntos donde el software debe quitar fricción.",
  },
  {
    title: "Modelo datos y reglas",
    text: "Trabajo consultas, reportes, integraciones, módulos y permisos para ordenar la operación.",
  },
  {
    title: "Construyo y valido",
    text: "Conecto interfaz, API, base de datos, respaldos, instaladores y soporte cuando el proyecto lo requiere.",
  },
  {
    title: "Mejoro con IA",
    text: "Uso ChatGPT y Codex para analizar, depurar, documentar y avanzar más rápido sin perder criterio técnico.",
  },
];

const profileHighlights = [
  {
    metric: "M.Sc.",
    label: "Ingeniería de Software y Sistemas Informáticos",
  },
  {
    metric: "2021",
    label: "Premio Nacional a la Innovación TIC por CONICYT",
  },
  {
    metric: "Ink",
    label: "Soporte tecnológico, infraestructura y continuidad operativa",
  },
  {
    metric: "Sistema",
    label: "Desarrollo, mantenimiento y mejora continua del Sistema Ink",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> PERMÍTEME </span> PRESENTARME
            </h1>
            <p className="home-about-body">
              Soy desarrollador de Nicaragua enfocado en aplicaciones web,
              móviles, datos y sistemas de gestión que simplifican procesos
              reales.
              <br />
              <br />
              Actualmente trabajo como
              <i>
                <b className="purple">
                  {" "}responsable de soporte tecnológico y Sistema Ink en Ink Multiservicios{" "}
                </b>
              </i>
              , donde apoyo la continuidad operativa y la mejora de procesos
              internos.
              <br />
              <br />
              Mi trabajo combina &nbsp;
              <i>
                <b className="purple">infraestructura tecnológica, soporte técnico, desarrollo de software y automatización</b>
              </i>
              , manteniendo una visión práctica entre operación, usuarios y
              sistemas.
              <br />
              <br />
              En proyectos como{" "}
              <i>
                <b className="purple">Sistema Ink Multiservicios</b>
              </i>
              {" "}desarrollo mejoras, reviso funcionalidades y automatizo
              procesos para agilizar las operaciones internas.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="profile-highlight-section">
          {profileHighlights.map((item) => (
            <Col lg={3} sm={6} className="profile-highlight-col" key={item.metric}>
              <div className="profile-highlight-card">
                <strong>{item.metric}</strong>
                <span>{item.label}</span>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="workflow-section">
          <Col md={12}>
            <h1 className="workflow-heading">
              Mi forma de <strong className="purple">construir</strong>
            </h1>
          </Col>
          {workflowSteps.map((step) => (
            <Col md={3} sm={6} className="workflow-card-col" key={step.title}>
              <div className="workflow-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME</h1>
            <p>
              Siéntete libre de <span className="purple">contactar </span>
              conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Eliezer47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/EliezerPonce47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eliezer47/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/eliezer_ponce/"
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
