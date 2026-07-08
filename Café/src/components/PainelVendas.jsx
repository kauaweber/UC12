import { useState } from "react";

function PainelVendas() {
  const [cafesVendidos, setCafesVendidos] = useState(0);

  function venderCafe() {
    setCafesVendidos(cafesVendidos + 1);
  }

  function cancelarVenda() {
    if (cafesVendidos > 0) {
      setCafesVendidos(cafesVendidos - 1);
    }
  }

  function fecharCaixa() {
    setCafesVendidos(0);
  }

  return (
    <section
      style={{
        backgroundColor: cafesVendidos >= 50 ? "#d97706" : "#f5e6ca",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h2>Painel de Vendas ☕</h2>

      <h1
        style={{
          color: cafesVendidos >= 10 ? "red" : "#333",
          fontSize: cafesVendidos >= 25 ? "60px" : "40px",
        }}
      >
        {cafesVendidos}
      </h1>

      <p>Cafés vendidos</p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
  <button
    onClick={venderCafe}
    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
  >
    ☕ Vender Café
  </button>

  <button
    onClick={cancelarVenda}
    className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
  >
    ❌ Cancelar Venda
  </button>

  <button
    onClick={fecharCaixa}
    className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
  >
    💰 Fechar Caixa
  </button>
</div>
    </section>
  );
}

export default PainelVendas;