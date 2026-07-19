import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ink Multiservicios",
          "Sistema Ink y mejora continua",
          "Soporte a impresoras, láser y bordadoras",
          "Redes, CCTV e infraestructura tecnológica",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
