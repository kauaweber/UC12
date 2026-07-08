// App.jsx

import Header from "./components/Header";
import Hero from "./components/Hero";
import TituloSecao from "./components/TituloSecao";
import CardProduto from "./components/CardProduto";
import Depoimento from "./components/Depoimento";
import Footer from "./components/Footer";
import PainelVendas from "./components/PainelVendas";

import { linksNav, produtos, depoimentos } from "./data/conteudo";

const heroImagem =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200";

function App() {
  return (
    <div className="font-body">
      <Header links={linksNav} />

      <Hero
        titulo="Café especial, torrado com cuidado"
        subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor."
        imagem={heroImagem}
      />

      {/* Seção Sobre */}
      <section id="sobre" className="py-24 px-6 bg-creme-claro">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full h-72 rounded-2xl bg-cafe-900/5 border-2 border-dashed border-cafe-900/20 flex items-center justify-center">
            <span className="text-xs text-cafe-600 uppercase tracking-wide">
              Imagem da cafeteria
            </span>
          </div>

          <div className="flex-1">
            <span className="font-body text-sm uppercase tracking-widest text-musgo font-medium">
              Nossa história
            </span>
            <h2 className="font-display text-4xl font-semibold text-cafe-900 mt-3">
              Do produtor à xícara
            </h2>
            <p className="mt-4 text-cafe-600 leading-relaxed">
              A Grão nasceu da vontade de aproximar quem produz café de quem o
              aprecia. Trabalhamos direto com pequenos produtores,
              acompanhando cada etapa da torra até o preparo final na loja.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Cardápio */}
      <section id="cardapio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <TituloSecao
            eyebrow="Cardápio"
            titulo="O que preparamos"
            descricao="Uma seleção enxuta, pensada para valorizar cada grão."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {produtos.map((produto) => (
              <CardProduto
                key={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-24 px-6 bg-creme-claro">
        <div className="max-w-6xl mx-auto">
          <TituloSecao eyebrow="Depoimentos" titulo="Quem já provou" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((depoimento) => (
              <Depoimento
                key={depoimento.id}
                texto={depoimento.texto}
                autor={depoimento.autor}
                cargo={depoimento.cargo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Painel de Vendas */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <PainelVendas />
        </div>
      </section>

      <Footer ano={new Date().getFullYear()} links={linksNav} />
    </div>
  );
}

export default App;