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
              móviles y sistemas de gestión que simplifican procesos reales.
              <br />
              <br />
              Trabajo con
              <i>
                <b className="purple">
                  {" "}
                  React, React Native, JavaScript y TypeScript{" "}
                </b>
              </i>
              para construir interfaces claras, mantenibles y orientadas al
              usuario.
              <br />
              <br />
              También he desarrollado soluciones con &nbsp;
              <i>
                <b className="purple">C#/.NET, APIs REST y SQL Server</b>
              </i>
              , incluyendo módulos administrativos, autenticación, respaldos,
              restauración e instaladores.
              <br />
              <br />
              En proyectos como{" "}
              <i>
                <b className="purple">Sistema Ink Multiservicios</b>
              </i>
              {" "}me gusta unir análisis, interfaz, lógica de negocio, datos y
              entrega para que el software sea útil desde el primer uso.
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
