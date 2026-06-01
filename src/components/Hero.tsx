export function Hero() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Consultoria empresarial
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Soluções digitais para empresas que querem crescer
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Criamos estratégias, sites e soluções digitais para ajudar empresas
            a fortalecer sua presença online e gerar novas oportunidades.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Solicitar proposta
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="rounded-2xl bg-white p-6 text-slate-950">
            <p className="text-sm font-semibold text-slate-500">
              Painel estratégico
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Presença digital clara, moderna e profissional.
            </h2>
            <div className="mt-6 space-y-3">
              <div className="h-3 rounded-full bg-slate-200" />
              <div className="h-3 w-4/5 rounded-full bg-slate-200" />
              <div className="h-3 w-2/3 rounded-full bg-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}