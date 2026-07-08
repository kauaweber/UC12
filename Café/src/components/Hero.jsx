// Hero.jsx
// Primeira seção da página. Recebe título, subtítulo e imagem via props,
// para que o mesmo componente pudesse, em outro projeto, ser reaproveitado
// com outro conteúdo.
import Botao from "../components/Botao";

function Hero({ titulo, subtitulo, imagem }) {
    return (
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Coluna de texto */}
          <div className="flex-1 relative">
            {/* Círculo decorativo atrás do título — o "selo" da marca,
                lembrando a marca que uma xícara deixa na mesa */}
            <svg
              className="absolute -top-10 -left-10 w-40 h-40 text-terracota/20 -z-10"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
            </svg>
  
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight text-cafe-900">
              {titulo}
            </h1>
  
            <p className="mt-6 text-lg text-cafe-600 max-w-md">
              {subtitulo}
            </p>
  
            <div className="mt-8 flex gap-4">
              <Botao texto="Ver cardápio" variante="primario" href="#cardapio" />
              <Botao texto="Sobre nós" variante="secundario" href="#sobre" />
            </div>
          </div>
  
          {/* Coluna de imagem */}
          <div className="flex-1">
            <img
              src={imagem}
              alt="Xícara de café especial servida na cafeteria Grão"
              className="rounded-3xl w-full h-[420px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;