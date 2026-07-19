import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <p className="hero-eyebrow">
                Ink Multiservicios | Soporte tecnológico y software
              </p>

              <h1 className="hero-title">
                Construyo soluciones que conectan operación, datos y software.
              </h1>

              <p className="hero-summary">
                Soy <strong className="main-name">Eliezer Ponce</strong>,
                M.Sc. en Ingeniería de Software. En Ink Multiservicios combino
                soporte tecnológico, infraestructura y mejora continua del
                Sistema Ink para mantener operaciones más ágiles y confiables.
              </p>

              <div className="home-typewriter">
                <Type />
              </div>

              <div className="home-hero-actions">
                <Button as={Link} to="/project" variant="primary">
                  Ver proyectos
                </Button>
                <Button as={Link} to="/resume" variant="outline-light">
                  Ver CV
                </Button>
                <Button
                  href="mailto:eliezerponcexd@gmail.com"
                  variant="outline-light"
                >
                  Contactar
                </Button>
              </div>

              <div className="hero-stack-strip">
                <span>.NET</span>
                <span>SQL Server</span>
                <span>Sistema Ink</span>
                <span>Infraestructura</span>
                <span>Automatización</span>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
