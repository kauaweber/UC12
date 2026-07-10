import { useEffect, useState } from "react";

function Tema() {
  const [tema, setTema] = useState("claro");

  useEffect(() => {
    document.title =
      tema === "claro" ? "Tema Claro" : "Tema Escuro";
  }, [tema]);

  return (
    <div
      className={`rounded-3xl shadow-2xl p-8 transition-all duration-500 ${
        tema === "claro"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Tema</h2>

      <button
        onClick={() =>
          setTema(tema === "claro" ? "escuro" : "claro")
        }
        className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl text-white font-bold transition"
      >
        Alternar Tema
      </button>

      <p className="mt-6 text-xl">
        Tema atual:
        <span className="font-bold ml-2">
          {tema === "claro" ? "☀️ Claro" : "🌙 Escuro"}
        </span>
      </p>
    </div>
  );
}

export default Tema;