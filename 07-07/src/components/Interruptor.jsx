import { useState } from "react";

function Interruptor() {
  const [ligado, setLigado] = useState(false);

  function trocar() {
    setLigado(!ligado);
  }

  return (
    <div>
      <button
        onClick={trocar}
        style={{
          backgroundColor: ligado ? "green" : "gray",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
        }}
      >
        {ligado ? "Ligado" : "Desligado"}
      </button>
    </div>
  );
}

export default Interruptor;