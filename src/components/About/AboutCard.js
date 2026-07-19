import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, soy <span className="purple">Eliezer Ponce </span>
            de <span className="purple">Estelí, Nicaragua.</span>
            <br />
            Actualmente trabajo en Ink Multiservicios, garantizando la
            continuidad operativa de la infraestructura tecnológica, equipos
            industriales y el Sistema Ink.
            <br />
            Soy Ingeniero en Ciencias de la Computación y M.Sc. en Ingeniería
            de Software y Sistemas Informáticos.
            <br />
            <br />
            Me interesa crear software que combine buena interfaz, lógica
            sólida, datos confiables, automatización y una entrega práctica para
            usuarios reales.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mantener impresoras industriales, bordadoras y equipos láser
            </li>
            <li className="about-activity">
              <ImPointRight /> Administrar soporte informático, redes e infraestructura
            </li>
            <li className="about-activity">
              <ImPointRight /> Instalar, configurar y mantener sistemas CCTV
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollar y mejorar continuamente el Sistema Ink
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Si lo puedes imaginar, lo puedes programar!"{" "}
          </p>
          <footer className="blockquote-footer">Eliezer Ponce</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
