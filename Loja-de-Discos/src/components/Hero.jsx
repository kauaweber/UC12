import Botao from './Botao'
import AssinaturaGrafica from './AssinaturaGrafica'

function Hero({ data }) {
  const botoes = data.botoes || []

  return (
    <section
      id={data.id}
      className="grade-fundo border-b border-borda px-5 pb-20 pt-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 inline-block border border-amarelo-selo bg-amarelo-selo px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-fundo-base">
            {data.etiqueta}
          </p>

          <h1 className="max-w-xl font-display text-5xl uppercase leading-[0.9] text-texto-principal md:text-7xl">
            {data.titulo.replace('alguém.', '')}
            <span className="text-amarelo-selo">alguém.</span>
          </h1>

          <p className="mt-6 max-w-lg leading-8 text-texto-secundario">
            {data.texto}
          </p>

          {botoes.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {botoes.map((botao) => (
                <Botao
                  key={botao.href}
                  href={botao.href}
                  variante={botao.variante}
                >
                  {botao.label}
                </Botao>
              ))}
            </div>
          )}
        </div>

        <AssinaturaGrafica />
      </div>
    </section>
  )
}

export default Hero