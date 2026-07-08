// Header.jsx
// Cabeçalho fixo no topo com logo e navegação.
// Recebe a lista de links como prop — o componente não sabe quais são os links,
// só sabe como exibi-los.

function Header({ links }) {
    return (
      <header className="fixed top-0 left-0 w-full bg-creme/90 backdrop-blur-sm z-50 border-b border-cafe-900/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo em texto, usando a fonte de display */}
          <span className="font-display text-2xl font-semibold text-cafe-900">
            Grão
          </span>
  
          {/* Navegação — escondida no mobile, visível a partir de md */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.texto}
                href={link.href}
                className="font-body text-sm text-cafe-600 hover:text-terracota transition"
              >
                {link.texto}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;