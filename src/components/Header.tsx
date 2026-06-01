export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-lg font-bold text-slate-900">Nova Prime</span>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#sobre" className="hover:text-slate-950">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-slate-950">
            Serviços
          </a>
          <a href="#contato" className="hover:text-slate-950">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}