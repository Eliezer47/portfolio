import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import explora from "../../Assets/Projects/Explora.jpg";
import aduana from "../../Assets/Projects/Aduana.png";
import proximamente from "../../Assets/Projects/Soon.png";
import sistemaInk from "../../Assets/Projects/SistemaInk.svg";
import { CgWebsite } from "react-icons/cg";

const sistemaInkDemoUrl = `${process.env.PUBLIC_URL}/demos/sistema-ink/`;

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="purple">Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Proyectos donde conecto frontend, backend, datos, automatización y
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
                Sistema de gestión cliente-servidor creado para ordenar procesos
                operativos, asegurar datos, facilitar respaldos y entregar una
                solución instalable para entorno Windows.
              </p>

              <div className="case-study-grid">
                <div>
                  <strong>Mi rol</strong>
                  <span>Análisis, arquitectura, backend, escritorio, datos y entrega.</span>
                </div>
                <div>
                  <strong>Stack</strong>
                  <span>.NET, API REST, Windows Desktop, SQL Server y migraciones.</span>
                </div>
                <div>
                  <strong>Módulos</strong>
                  <span>Usuarios, catálogos, clientes, órdenes, servicios y respaldos.</span>
                </div>
                <div>
                  <strong>Entrega</strong>
                  <span>Logs, restauración, instaladores y soporte cliente-servidor.</span>
                </div>
              </div>

              <div className="architecture-flow">
                <span>Escritorio Windows</span>
                <span>API REST</span>
                <span>SQL Server</span>
                <span>Backups + Logs</span>
              </div>

              <div className="case-study-actions">
                <Button
                  className="project-demo-button"
                  href={sistemaInkDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  aria-describedby="sistema-ink-demo-note"
                  aria-label="Explorar demo visual de Sistema Ink (se abre en una pestaña nueva)"
                >
                  <CgWebsite aria-hidden="true" focusable="false" /> &nbsp;
                  Explorar demo visual
                </Button>
                <Button href="mailto:eliezerponcexd@gmail.com" variant="outline-light">
                  Solicitar detalles
                </Button>
              </div>
              <p id="sistema-ink-demo-note" className="case-study-demo-note">
                Demo visual · Solo lectura · Datos ficticios. La lógica interna
                no forma parte de esta demostración.
              </p>
            </Col>
          </Row>
        </section>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={explora}
              isBlog={false}
              title="Explora"
              description="Proyecto asociado a reconocimientos de innovación TIC. Explora propone experiencias turísticas digitales con recorridos virtuales, realidad aumentada, rutas, categorías de turismo y retroalimentación de usuarios para promover destinos de Nicaragua."
              tags={["Innovación TIC", "React", "Turismo", "Realidad aumentada"]}
              ghLink="https://github.com/Eliezer47/Explora"
              demoLink="https://www.linkedin.com/posts/explora-s-a_un-tour-m%C3%A1s-activity-7099947122849894400-6jQh?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aduana}
              isBlog={false}
              title="Aduana System"
              description="Interfaz frontend para manejo aduanero y control interno de pólizas. Integra creación, edición, seguimiento de registros y una experiencia organizada para operaciones administrativas."
              tags={["React", "Gestión", "Operaciones", "Frontend"]}
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
              description="Sistema de gestión desarrollado con .NET, API REST, escritorio Windows y SQL Server. Incluye autenticación, módulos administrativos, catálogos, clientes, órdenes de servicio, respaldos/restauración, migraciones, logs e instaladores."
              tags={[".NET", "SQL Server", "Windows Desktop", "API REST", "Instaladores"]}
              demoLink={sistemaInkDemoUrl}
              demoLabel="Explorar demo visual"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
