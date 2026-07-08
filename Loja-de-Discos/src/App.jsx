import { conteudo } from './data/conteudo'

import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Catalogo from './components/Catalogo'
import SessaoEscuta from './components/SessaoEscuta'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-fundo-base font-body text-texto-principal">
      <Header data={conteudo.header} />

      <main>
        <Hero data={conteudo.hero} />
        <Sobre data={conteudo.sobre} />
        <Catalogo data={conteudo.catalogo} />
        <SessaoEscuta data={conteudo.sessao} />
      </main>

      <Footer data={conteudo.footer} />
    </div>
  )
}

export default App