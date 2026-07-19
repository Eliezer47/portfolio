import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Actividad en <strong className="purple">GitHub</strong>
      </h1>
      <p style={{ color: "white", maxWidth: "720px" }}>
        Puedes revisar mis repositorios, avances y proyectos publicados en mi
        perfil de GitHub.
      </p>
      <Button
        variant="primary"
        href="https://github.com/Eliezer47"
        target="_blank"
        rel="noopener noreferrer"
        style={{ maxWidth: "220px" }}
      >
        <BsGithub /> &nbsp; Ver GitHub
      </Button>
    </Row>
  );
}

export default Github;
