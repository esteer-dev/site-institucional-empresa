export function Footer() {
  return (
    <footer id="contato" className="bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold">Nova Prime</h2>
          <p className="mt-2 text-sm text-slate-400">
            Site institucional demonstrativo para portfólio profissional.
          </p>
        </div>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Entrar em contato
        </a>
      </div>
    </footer>
  );
}