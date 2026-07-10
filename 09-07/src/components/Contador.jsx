import { useEffect, useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (contador === 10) alert("Você chegou em 10!");

    if (contador === 20) document.title = "Contador em 20";

    if (contador === 30)
      setMensagem("🎉 Parabéns! Você chegou em 30!");
  }, [contador]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Contador Inteligente</h2>

      <h1 className="text-8xl font-black text-center text-cyan-400">
        {contador}
      </h1>

      <div className="flex justify-center gap-5 mt-8">
        <button
          onClick={() => setContador(contador + 1)}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold transition"
        >
          +
        </button>

        <button
          onClick={() => {
            setContador(0);
            setMensagem("");
          }}
          className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-bold transition"
        >
          Reset
        </button>
      </div>

      {mensagem && (
        <p className="text-center text-green-400 font-bold mt-6 text-xl">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default Contador;