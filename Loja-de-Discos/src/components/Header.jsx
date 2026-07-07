import { useState } from 'react'

function Header({ data }) {
  const [erroLogo, setErroLogo] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-borda bg-fundo-base/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-center">
          {!erroLogo ? (
            <img
              src={data.logoSrc}
              alt={data.logoAlt}
              className="h-10 w-[130px] object-contain object-left"
              onError={() => setErroLogo(true)}
            />
          ) : (
            <span className="font-display text-2xl uppercase text-texto-principal">
              SELO<span className="text-amarelo-selo">.</span>
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {data.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-texto-secundario transition hover:text-amarelo-selo"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="text-xs font-bold uppercase tracking-widest text-amarelo-selo md:hidden">
          Menu
        </button>
      </div>
    </header>
  )
}

export default Header