export function About() {
  return (
    <section id="sobre" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            Sobre
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">
            Uma empresa focada em transformar presença digital em resultado
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            A Nova Prime é uma empresa fictícia criada para representar negócios
            que buscam uma presença digital mais profissional, moderna e
            estratégica.
          </p>

          <p>
            Este projeto foi desenvolvido como parte de um portfólio profissional,
            demonstrando habilidades em estruturação de páginas, componentização,
            responsividade e criação de interfaces comerciais.
          </p>
        </div>
      </div>
    </section>
  );
}