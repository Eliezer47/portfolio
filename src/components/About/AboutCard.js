import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, Soy <span className="purple">Eliezer Ponce </span>
            de <span className="purple"> Estelí, Nicaragüa.</span>
            <br />
            Actualmente trabajo como Helpdesk Support en Joya de Nicaragüa.
            <br />
            Tengo el Grado academico de Ingeniero en ciencias de la computacion
            y Actualmente estudio una maestria en ingenieria de software.
            <br />
            <br />
            Además de codificar, ¡hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar VideoJuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Ir al cine
            </li>
            <li className="about-activity">
              <ImPointRight /> Salir en moto
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
