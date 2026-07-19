import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ink Multiservicios",
          "Sistema Ink y mejora continua",
          "Soporte tecnológico e infraestructura",
          ".NET, SQL Server y automatización",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
