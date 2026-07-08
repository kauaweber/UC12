// CardProduto.jsx
// Card de um item do cardápio. Puramente apresentacional —
// recebe tudo que precisa via props e não conhece a lista inteira de produtos.

function CardProduto({ nome, descricao, preco }) {
    return (
      <div className="bg-creme-claro rounded-2xl p-6 border border-cafe-900/10 hover:border-terracota/40 transition">
        {/* Placeholder de imagem — substitua pela foto real do produto */}
        <div className="w-full h-40 rounded-xl bg-cafe-900/5 border-2 border-dashed border-cafe-900/20 flex items-center justify-center mb-5">
          <span className="text-xs text-cafe-600 uppercase tracking-wide">
            Imagem do produto
          </span>
        </div>
  
        <h3 className="font-display text-xl font-semibold text-cafe-900">
          {nome}
        </h3>
  
        <p className="mt-2 text-sm text-cafe-600">{descricao}</p>
  
        <span className="mt-4 inline-block font-body font-semibold text-terracota">
          {preco}
        </span>
      </div>
    );
  }
  
  export default CardProduto;