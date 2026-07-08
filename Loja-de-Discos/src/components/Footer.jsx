function Footer({ data }) {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-fundo-base px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-borda pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="font-display text-2xl uppercase text-texto-principal">
            {data.nome}
            <span className="text-amarelo-selo">.</span>
          </strong>

          <p className="mt-2 max-w-md text-sm leading-6 text-texto-secundario">
            {data.texto}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-wide">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-semibold text-texto-secundario transition hover:text-amarelo-selo"
            >
              {link.label}
            </a>
          ))}

          <span className="text-texto-secundario">
            © {ano}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer