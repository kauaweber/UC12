import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  function resetar() {
    setContador(0);
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>

      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      <button onClick={resetar}>Reset</button>
    </div>
  );
}

export default Contador;