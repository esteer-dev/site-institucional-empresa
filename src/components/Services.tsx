import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicos" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
            Serviços
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">
            O que fazemos para sua empresa evoluir no digital
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}