import { useEffect, useState } from "react";

function Perfil() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    document.title = nome || "Perfil";
  }, [nome]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Perfil</h2>

      <input
        type="text"
        placeholder="Digite seu nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full p-4 rounded-xl bg-white/20 outline-none border border-white/20 focus:border-cyan-400"
      />

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-cyan-300">
          {nome ? `Olá, ${nome}! 👋` : "Bem-vindo!"}
        </h3>
      </div>
    </div>
  );
}

export default Perfil;