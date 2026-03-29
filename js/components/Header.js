export function Header() {
  return `
    <header
      class="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80"
    >
      <nav
        class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#inicio"
          class="flex items-center gap-3 font-extrabold tracking-tight group"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-slate-50 dark:text-slate-950 group-hover:scale-110 transition-transform"
          >
            JP
          </span>
          <span class="text-xs uppercase tracking-widest hidden sm:block"
            >Joel Freddy Pinto Cutili</span
          >
        </a>

        <div class="hidden items-center gap-8 md:flex">
          <a
            class="text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#sobre-mi"
            >Sobre mí</a
          >
          <a
            class="text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#habilidades"
            >Habilidades</a
          >
          <a
            class="text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#proyectos"
            >Proyectos</a
          >
          <a
            class="text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="#contacto"
            >Contacto</a
          >
          <button
            id="themeBtn"
            class="rounded-xl border border-slate-200 p-2.5 hover:bg-white dark:border-slate-800 dark:hover:bg-slate-900 transition-all shadow-sm"
            type="button"
          >
            🌓
          </button>
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <button
            id="themeBtnMobile"
            class="rounded-xl border border-slate-200 p-2 dark:border-slate-800"
          >
            🌓
          </button>
          <button
            id="menuBtn"
            class="rounded-xl border border-slate-200 p-2 dark:border-slate-800"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        id="mobileMenu"
        class="hidden border-t border-slate-200 bg-white/95 px-6 py-6 dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
      >
        <div class="flex flex-col gap-5 text-center">
          <a class="text-lg font-medium" href="#sobre-mi">Sobre mí</a>
          <a class="text-lg font-medium" href="#habilidades">Habilidades</a>
          <a class="text-lg font-medium" href="#proyectos">Proyectos</a>
          <a class="text-lg font-medium" href="#contacto">Contacto</a>
          <a
            class="rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white dark:bg-slate-50 dark:text-slate-950"
            href="#contacto"
            >Hablemos</a
          >
        </div>
      </div>
    </header>
  `;
}