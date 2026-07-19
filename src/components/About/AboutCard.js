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
            Actualmente trabajo como Helpdesk Support en Joya de Nicaragua.
            <br />
            Soy Ingeniero en Ciencias de la Computación y estudio una maestría
            en Ingeniería de Software.
            <br />
            <br />
            Me interesa crear software que combine buena interfaz, lógica
            sólida, datos confiables y una entrega práctica para usuarios reales.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Construir aplicaciones web y móviles
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseñar módulos administrativos y flujos de negocio
            </li>
            <li className="about-activity">
              <ImPointRight /> Trabajar con bases de datos y respaldos
            </li>
            <li className="about-activity">
              <ImPointRight /> Usar IA como apoyo para analizar y mejorar código
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
