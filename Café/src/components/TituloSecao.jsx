// TituloSecao.jsx
// Cabeçalho reutilizável para o início de cada seção da página.
// Centraliza a estrutura (eyebrow + título + descrição) num único lugar.

function TituloSecao({ eyebrow, titulo, descricao }) {
    return (
      <div className="max-w-xl mx-auto text-center mb-14">
        {/* Eyebrow: texto pequeno acima do título, dá contexto rápido */}
        <span className="font-body text-sm uppercase tracking-widest text-musgo font-medium">
          {eyebrow}
        </span>
  
        <h2 className="font-display text-4xl font-semibold text-cafe-900 mt-3">
          {titulo}
        </h2>
  
        {descricao && (
          <p className="mt-4 text-cafe-600">{descricao}</p>
        )}
      </div>
    );
  }
  
  export default TituloSecao;