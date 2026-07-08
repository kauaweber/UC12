import { useState } from "react";

function Tema() {
  const [escuro, setEscuro] = useState(false);

  function trocarTema() {
    setEscuro(!escuro);
  }

  return (
    <div
      style={{
        backgroundColor: escuro ? "#222" : "#fff",
        color: escuro ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <button onClick={trocarTema}>
        {escuro ? "Tema Claro" : "Tema Escuro"}
      </button>

      <h1>
        {escuro ? "🌙 Tema Escuro" : "☀️ Tema Claro"}
      </h1>
    </div>
  );
}

export default Tema;