function SessaoEscuta({ data }) {
  return (
    <section
      id={data.id}
      className="border-y border-borda bg-fundo-elevado px-5 py-20"
    >
      <div className="mx-auto max-w-4xl border border-borda bg-fundo-base p-10 text-center shadow-md">
        <p className="mb-5 inline-block border border-vermelho-selo px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-vermelho-selo">
          {data.etiqueta}
        </p>

        <h2 className="font-display text-4xl uppercase text-texto-principal md:text-6xl">
          {data.titulo}
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-texto-secundario">
          {data.texto}
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-amarelo-selo"></div>

        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-amarelo-selo">
          {data.horario}
        </p>
      </div>
    </section>
  )
}

export default SessaoEscuta