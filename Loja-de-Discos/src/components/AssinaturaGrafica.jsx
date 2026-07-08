function AssinaturaGrafica() {
  return (
    <div className="relative border border-borda bg-fundo-elevado p-6 shadow-md">
      <svg viewBox="0 0 360 260" className="w-full">
        <path
          d="M40 70 C90 35, 145 35, 195 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-amarelo-selo"
        />

        <path
          d="M40 120 C115 65, 190 65, 265 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-amarelo-selo/60"
        />

        <path
          d="M40 170 C135 95, 225 95, 320 170"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-amarelo-selo/30"
        />

        <circle cx="40" cy="70" r="7" className="fill-vermelho-selo" />
        <circle cx="265" cy="120" r="7" className="fill-vermelho-selo" />
        <circle cx="320" cy="170" r="7" className="fill-vermelho-selo" />
      </svg>

      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-texto-secundario">
        Ranhuras, capas gastas e histórias que continuam tocando.
      </p>
    </div>
  )
}

export default AssinaturaGrafica