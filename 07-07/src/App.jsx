import Contador from "./components/Contador";
import Curtidas from "./components/Curtidas";
import Interruptor from "./components/Interruptor";
import Tema from "./components/Tema";

function App() {
  return (
    <>
      <Contador />
      <hr />

      <Curtidas />
      <hr />

      <Interruptor />
      <hr />

      <Tema />
    </>
  );
}

export default App;