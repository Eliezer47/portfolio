import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV Eliezer Ponce.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const highlights = [
  {
    title: "Frontend",
    text: "React, React Native, TypeScript, rutas protegidas, formularios y consumo de APIs.",
  },
  {
    title: "Backend y datos",
    text: ".NET, APIs REST, Entity Framework, SQL Server, respaldos, restauración y migraciones.",
  },
  {
    title: "Entrega",
    text: "Builds, instaladores, documentación, soporte, mantenimiento y mejora continua con IA.",
  },
];

const experience = [
  "Helpdesk Support en Joya de Nicaragua, con soporte N2, Office 365, CCTV, inventario y automatización de procesos.",
  "Desarrollo de Sistema Ink Multiservicios con backend .NET, escritorio Windows, SQL Server y entrega cliente-servidor.",
  "Proyectos web con React para gestión de tickets, usuarios, clientes, eventos y operaciones administrativas.",
];

const education = [
  "Maestría en Ingeniería de Software y Sistemas Computacionales.",
  "Ingeniería en Ciencias de la Computación.",
  "Diplomas en desarrollo web, UX, habilidades directivas y Transact-SQL.",
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
                Desarrollo aplicaciones web, móviles y de escritorio conectando
                interfaz, lógica de negocio, API, base de datos y entrega. Mi
                experiencia combina soporte técnico, desarrollo de software y
                automatización de procesos.
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
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
