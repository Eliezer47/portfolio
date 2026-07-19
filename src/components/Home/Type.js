import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analista de programación",
          "SQL Server, SSRS y Power BI",
          "C#/.NET, React Native y Python",
          "Premio Nacional a la Innovación TIC",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
