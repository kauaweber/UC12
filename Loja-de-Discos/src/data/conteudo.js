export const conteudo = {
  header: {
    logoSrc: '/selo_logo.png',
    logoAlt: 'Logo da Selo',
    links: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Catálogo', href: '#catalogo' },
      { label: 'Sessão', href: '#sessao' },
    ],
  },

  hero: {
    id: 'inicio',
    etiqueta: 'Loja de discos usados',
    titulo: 'Cada disco já foi de alguém.',
    texto:
      'Compramos, avaliamos e vendemos discos de vinil com história. Nada de algoritmo, só garimpo, ouvido e cuidado.',
    botoes: [
      { label: 'Ver catálogo', href: '#catalogo', variante: 'primario' },
      { label: 'Sobre a loja', href: '#sobre', variante: 'secundario' },
    ],
  },

  sobre: {
    id: 'sobre',
    etiqueta: 'Sobre a loja',
    titulo: 'Do sebo pra tua estante',
    textos: [
      'A Selo nasceu de uma coleção que foi crescendo até virar loja. Hoje compramos acervos, separamos os discos com calma e colocamos tudo na prateleira com preço justo.',
      'Cada disco passa por uma avaliação simples: estado da capa, estado do vinil e se ainda dá vontade de ouvir. A ideia é vender disco usado sem esconder defeito.',
    ],
    itens: [
      'Avaliação manual dos discos',
      'Notas de conservação visíveis',
      'Acervos novos toda semana',
    ],
  },

  catalogo: {
    id: 'catalogo',
    etiqueta: 'Catálogo em destaque',
    titulo: 'O que chegou essa semana',
    discos: [
      {
        id: 1,
        album: 'Favourite Worst Nightmare',
        artista: 'Arctic Monkeys',
        preco: 'R$ 89',
        estado: 'VG+',
        codigo: 'SELO-014',
        imagem: '/discos/favourite-worst-nightmare.jpg',
      },
      {
        id: 2,
        album: 'The Dark Side of the Moon',
        artista: 'Pink Floyd',
        preco: 'R$ 110',
        estado: 'VG+',
        codigo: 'SELO-002',
        imagem: '/discos/dark-side-of-the-moon.jpg',
    },
      {
        id: 3,
        album: 'IGOR',
        artista: 'Tyler, The Creator',
        preco: 'R$ 78',
        estado: 'VG',
        codigo: 'SELO-007',
        imagem: '/discos/igor.jpg',
      },
      {
        id: 4,
        album: 'Beatles',
        artista: 'Beatles',
        preco: 'R$ 338',
        estado: 'LP',
        codigo: 'SELO-032',
        imagem: '/discos/beatles.jpg',
      },
      {
        id: 5,
        album: 'Thriller',
        artista: 'Michael Jackson',
        preco: 'R$ 82',
        estado: 'VG+',
        codigo: 'SELO-018',
        imagem: '/discos/michel.jpg',
    },
    {
      id: 6,
      album: 'A Night at the Opera',
      artista: 'Queen',
      preco: 'R$ 95',
      estado: 'NM',
      codigo: 'SELO-019',
      imagem: '/discos/a-night-at-the-opera.jpg',
  },
  {
    id: 7,
    album: 'The Marshall Mathers LP',
    artista: 'Eminem',
    preco: 'R$ 89',
    estado: 'VG+',
    codigo: 'SELO-020',
    imagem: '/discos/marshall-mathers-lp.jpg',
      },
    ],
  },

  sessao: {
    id: 'sessao',
    etiqueta: 'Todo sábado',
    titulo: 'Sessão de escuta',
    texto:
      'Traga um disco da tua coleção e toca pra loja inteira ouvir. A entrada é livre e o café fica por nossa conta.',
    horario: 'Sábado · 18h às 21h',
  },

  footer: {
    nome: 'Selo',
    texto: 'Loja de discos usados · Porto Alegre',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
}