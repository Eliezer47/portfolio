import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador .NET y React",
          "React Native y TypeScript",
          "SQL Server y APIs REST",
          "Soporte técnico N2 y CCTV",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
