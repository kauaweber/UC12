function Botao({ children, href, variante = 'primario' }) {
  const estilos = {
    primario:
      'bg-amarelo-selo text-fundo-base border-amarelo-selo hover:bg-[#8f6923] hover:border-[#8f6923]',

    secundario:
      'bg-transparent text-texto-principal border-borda hover:border-amarelo-selo hover:text-amarelo-selo',
  }

  return (
    <a
      href={href}
      className={`inline-block border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] transition-all duration-300 ${estilos[variante]}`}
    >
      {children}
    </a>
  )
}

export default Botao