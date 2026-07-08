import { useState } from "react";

function Curtidas() {
  const [curtidas, setCurtidas] = useState(0);

  function curtir() {
    setCurtidas(curtidas + 1);
  }

  return (
    <div>
      <h2
        style={{
          color: curtidas >= 100 ? "red" : "black",
        }}
      >
        ❤️ Curtidas: {curtidas}
      </h2>

      <button onClick={curtir}>
        Curtir
      </button>
    </div>
  );
}

export default Curtidas;