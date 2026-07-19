import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV Eliezer Ponce.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const highlights = [
  {
    title: "Sistema Ink",
    text: "Mejora continua, nuevas funcionalidades, corrección de errores y automatización de procesos internos.",
  },
  {
    title: "Soporte tecnológico",
    text: "Atención técnica, diagnóstico, mantenimiento e infraestructura para continuidad operativa.",
  },
  {
    title: "Infraestructura",
    text: "Redes, equipos, recursos compartidos, seguridad tecnológica y soporte a usuarios.",
  },
];

const experience = [
  "Responsable de soporte tecnológico y mejora continua del Sistema Ink en Ink Multiservicios.",
  "Acompaño la continuidad operativa mediante soporte técnico, infraestructura, redes y atención a usuarios.",
  "Desarrollo mejoras, corrijo errores y automatizo procesos internos para agilizar la operación.",
];

const education = [
  "M.Sc. en Ingeniería de Software y Sistemas Informáticos por UNAN-Managua.",
  "Ingeniería en Ciencias de la Computación por UNAN-Managua.",
  "Diplomas en seguridad informática, ingeniería de software, desarrollo web, UX, habilidades directivas y Transact-SQL.",
];

const awards = [
  "Premio Nacional a la Innovación TIC, primer lugar otorgado por CONICYT en 2021.",
  "Primer lugar en Concurso Juvenil de Aplicaciones Móviles, categoría avanzada, con Explora.",
  "Segundo lugar en Hackathon Nicaragua 2021, categoría Startup.",
];

const coreSkills = [
  "SQL Server",
  "C#/.NET",
  "Sistema Ink",
  "Soporte tecnológico",
  "Infraestructura",
  "Redes",
  "Automatización",
];

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container className="resume-content">
          <Row className="resume-hero">
            <Col lg={8}>
              <span className="resume-kicker">Resumen profesional</span>
              <h1>Perfil técnico orientado a sistemas reales</h1>
              <p>
                Trabajo en Ink Multiservicios conectando soporte tecnológico,
                infraestructura y desarrollo del Sistema Ink. Mi experiencia
                combina programación, diagnóstico técnico, automatización de
                procesos e IA aplicada.
              </p>
            </Col>
            <Col lg={4} className="resume-actions">
              <Button variant="primary" href={pdf} target="_blank">
                <AiOutlineDownload />
                &nbsp;Descargar CV completo
              </Button>
              <Button
                variant="outline-light"
                href="mailto:eliezerponcexd@gmail.com"
              >
                Contactar
              </Button>
            </Col>
          </Row>

          <Row className="resume-highlight-grid">
            {highlights.map((item) => (
              <Col md={4} key={item.title}>
                <div className="resume-highlight-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="resume-detail-grid">
            <Col lg={6}>
              <div className="resume-detail-panel">
                <h2>Experiencia aplicada</h2>
                <ul>
                  {experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="resume-detail-panel">
                <h2>Formación y enfoque</h2>
                <ul>
                  {education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="resume-detail-grid">
            <Col lg={7}>
              <div className="resume-detail-panel">
                <h2>Reconocimientos</h2>
                <ul>
                  {awards.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={5}>
              <div className="resume-detail-panel">
                <h2>Aptitudes clave</h2>
                <div className="resume-skill-list">
                  {coreSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
