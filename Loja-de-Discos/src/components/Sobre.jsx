import SectionTitle from './SectionTitle'

function Sobre({ data }) {
  return (
    <section id={data.id} className="border-b border-borda px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <SectionTitle
            etiqueta={data.etiqueta}
            titulo={data.titulo}
          />

          <div className="mt-6 space-y-5 text-texto-secundario">
            {data.textos.map((texto) => (
              <p key={texto} className="leading-8">
                {texto}
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex h-60 items-center justify-center border border-borda bg-fundo-elevado shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-texto-secundario">
              espaço para imagem
            </span>
          </div>

          <div className="space-y-4">
            {data.itens.map((item) => (
              <div
                key={item}
                className="border-l-4 border-amarelo-selo bg-fundo-base p-4 shadow-sm transition hover:translate-x-1"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-texto-principal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre