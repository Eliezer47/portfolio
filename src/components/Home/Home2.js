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
              <span className="purple"> PERMITEME </span> PRESENTARME
            </h1>
            <p className="home-about-body">
              Explorador del mundo digital en busca de la armonía entre la
              innovación tecnológica y la elevación de la experiencia humana.
              <br />
              <br />
              Me gusta el desarrollo Móvil con
              <i>
                <b className="purple">
                  {" "}
                  React Native, Javascript o TypeScript{" "}
                </b>
              </i>
              <br />
              <br />
              Mi campo de interés es la construcción de nuevas &nbsp;
              <i>
                <b className="purple">Tecnologias y productos moviles </b> y
                productos web con{" "}
                <b className="purple"> Wordpress u otras tecnologias</b>
              </i>
              <br />
              <br />
              Siempre que sea posible, trato de aprender nuevas tecnologias y
              habilidades como <b className="purple">Node.js</b> y
              <i>
                <b className="purple">TypeScript</b>
              </i>
              &nbsp; y nuevos frameworks como
              <i>
                <b className="purple"> Flutter</b>
              </i>
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
              Sientete libre de <span className="purple">contactar </span>con
              migo
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
                  href="www.linkedin.com/in/eliezer47"
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
