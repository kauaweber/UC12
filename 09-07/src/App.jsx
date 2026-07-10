import Contador from "./components/Contador";
import Perfil from "./components/Perfil";
import Tema from "./components/Tema";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center p-10">
      <div className="w-full max-w-4xl space-y-8">
        <Contador />
        <Perfil />
        <Tema />
      </div>
    </div>
  );
}

export default App;