import SectionTitle from './SectionTitle'
import DiscoCard from './DiscoCard'

function Catalogo({ data }) {
  return (
    <section
      id={data.id}
      className="bg-fundo-elevado border-y border-borda px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          etiqueta={data.etiqueta}
          titulo={data.titulo}
          centralizado
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.discos.map((disco) => (
            <DiscoCard key={disco.id} disco={disco} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalogo