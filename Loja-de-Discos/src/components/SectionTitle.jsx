function SectionTitle({ etiqueta, titulo, centralizado = false }) {
  return (
    <div className={centralizado ? 'text-center' : ''}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-amarelo-selo">
        {etiqueta}
      </p>

      <h2 className="font-display text-3xl uppercase leading-tight text-texto-principal md:text-5xl">
        {titulo}
      </h2>

      <div
        className={`mt-4 h-[2px] bg-amarelo-selo ${
          centralizado ? 'mx-auto w-24' : 'w-24'
        }`}
      />
    </div>
  )
}

export default SectionTitle