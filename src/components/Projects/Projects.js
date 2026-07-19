import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
