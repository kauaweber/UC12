function DiscoCard({ disco }) {
  return (
    <article className="border border-borda bg-fundo-base p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden border border-borda bg-fundo-elevado">
        {disco.estado && (
          <span className="absolute left-3 top-3 z-10 border border-amarelo-selo bg-fundo-base px-2 py-1 text-xs font-bold uppercase text-amarelo-selo shadow">
            {disco.estado}
          </span>
        )}

        <img
          src={disco.imagem}
          alt={`Capa do álbum ${disco.album}`}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="pt-4">
        <h3 className="font-display text-lg uppercase text-texto-principal">
          {disco.album}
        </h3>

        <p className="mt-1 text-sm text-texto-secundario">
          {disco.artista}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-texto-secundario">
            {disco.codigo}
          </span>

          <span className="bg-amarelo-selo px-3 py-2 text-xs font-extrabold text-fundo-base shadow">
            {disco.preco}
          </span>
        </div>
      </div>
    </article>
  )
}

export default DiscoCard