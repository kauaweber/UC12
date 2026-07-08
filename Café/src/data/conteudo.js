// conteudo.js
// Guarda todo o conteúdo textual do site separado dos componentes.
// Assim, para editar um texto, não é preciso mexer em nenhum arquivo .jsx.

export const linksNav = [
    { texto: "Início", href: "#inicio" },
    { texto: "Sobre", href: "#sobre" },
    { texto: "Cardápio", href: "#cardapio" },
    { texto: "Contato", href: "#contato" },
  ];
  
  export const produtos = [
    {
      id: 1,
      nome: "Café Coado",
      descricao: "Grãos 100% arábica, torra média, notas de caramelo e frutas vermelhas.",
      preco: "R$ 12,00",
    },
    {
      id: 2,
      nome: "Cappuccino",
      descricao: "Espresso encorpado com leite vaporizado e uma fina camada de espuma.",
      preco: "R$ 15,00",
    },
    {
      id: 3,
      nome: "Prensa Francesa",
      descricao: "Extração lenta que realça o corpo do café, servida em porção individual.",
      preco: "R$ 14,00",
    },
  ];
  
  export const depoimentos = [
    {
      id: 1,
      texto: "O melhor café coado que já tomei na cidade. Virou parada obrigatória de manhã.",
      autor: "Marina Costa",
      cargo: "Cliente desde 2023",
    },
    {
      id: 2,
      texto: "Ambiente aconchegante e atendimento atencioso. Cada xícara é preparada com cuidado.",
      autor: "Rafael Nunes",
      cargo: "Cliente desde 2024",
    },
  ];