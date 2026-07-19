import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import explora from "../../Assets/Projects/Explora.jpg";
import aduana from "../../Assets/Projects/Aduana.png";
import proximamente from "../../Assets/Projects/Soon.png";
import sistemaInk from "../../Assets/Projects/SistemaInk.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="purple">Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos proyectos donde he aplicado frontend, backend, datos y
          soluciones para procesos reales.
        </p>

        <section className="case-study-panel">
          <Row className="align-items-center">
            <Col lg={5} className="case-study-visual">
              <img
                src={sistemaInk}
                alt="Arquitectura del Sistema Ink Multiservicios"
                className="img-fluid"
              />
            </Col>
            <Col lg={7} className="case-study-content">
              <span className="case-study-kicker">Caso de estudio</span>
              <h2>Sistema Ink Multiservicios</h2>
              <p>
                Sistema de gestión cliente-servidor creado para llevar procesos
                operativos a una solución más ordenada, respaldable y fácil de
                mantener.
              </p>

              <div className="case-study-grid">
                <div>
                  <strong>Mi rol</strong>
                  <span>Análisis, backend, escritorio, datos y entrega.</span>
                </div>
                <div>
                  <strong>Stack</strong>
                  <span>.NET, API REST, Windows Desktop y SQL Server.</span>
                </div>
                <div>
                  <strong>Módulos</strong>
                  <span>Usuarios, catálogos, clientes, servicios y respaldos.</span>
                </div>
                <div>
                  <strong>Entrega</strong>
                  <span>Migraciones, logs, instaladores y entorno cliente-servidor.</span>
                </div>
              </div>

              <div className="architecture-flow">
                <span>Escritorio Windows</span>
                <span>API REST</span>
                <span>SQL Server</span>
                <span>Backups + Logs</span>
              </div>

              <div className="case-study-actions">
                <Button href="mailto:eliezerponcexd@gmail.com" variant="primary">
                  Solicitar más detalles
                </Button>
                <Button href="#/resume" variant="outline-light">
                  Ver perfil técnico
                </Button>
              </div>
            </Col>
          </Row>
        </section>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={explora}
              isBlog={false}
              title="Explora"
              description="Explora es una plataforma turística de Nicaragua que ofrece tours virtuales en 360° y realidad aumentada para mostrar destinos. Facilita rutas y opciones de transporte, categoriza los destinos en diferentes tipos de turismo, y permite a los usuarios calificar y comentar sobre los sitios visitados, proporcionando retroalimentación valiosa y mejorando la experiencia de viaje."
              tags={["React", "Turismo", "Realidad aumentada"]}
              ghLink="https://github.com/Eliezer47/Explora"
              demoLink="https://www.linkedin.com/posts/explora-s-a_un-tour-m%C3%A1s-activity-7099947122849894400-6jQh?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aduana}
              isBlog={false}
              title="Aduana System"
              description="La interfaz de frontend para el manejo aduanero y control interno de pólizas es una plataforma web diseñada para facilitar la gestión eficiente y segura de pólizas de seguro y operaciones aduaneras. Esta herramienta integra múltiples funcionalidades que permiten a los usuarios crear, editar y supervisar pólizas, además de gestionar registros aduaneros, todo desde una única interfaz intuitiva y fácil de usar."
              tags={["React", "Gestión", "Operaciones"]}
              ghLink="https://github.com/Eliezer47/sistema_aduana"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proximamente}
              isBlog={false}
              title="YourTicket"
              description="Sistema web para la gestión de eventos y órdenes de tickets. Incluye login, rutas protegidas, administración de usuarios, clientes, vendedores, eventos y zonas, mostrando flujos reales de negocio sobre una SPA en React."
              tags={["React", "Rutas protegidas", "Panel administrativo"]}
              ghLink="https://github.com/Eliezer47/YourTicket"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sistemaInk}
              isBlog={false}
              title="Sistema Ink Multiservicios"
              description="Sistema de gestión desarrollado con .NET, API REST, escritorio Windows y SQL Server. Incluye autenticación, módulos administrativos, catálogos, clientes, órdenes de servicio, respaldos y restauración, migraciones, logs e instaladores para entrega en entorno cliente-servidor."
              tags={[".NET", "SQL Server", "Windows Desktop", "API REST"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
