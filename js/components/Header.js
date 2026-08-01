export function Header() {
  return `
    <header class="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6">
      <nav
        class="glass-panel rounded-2xl px-6 py-3.5 shadow-lg shadow-indigo-500/10 transition-all duration-300 flex items-center justify-between border border-slate-800 bg-slate-900/80"
      >
        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-1 bg-slate-800/60 p-1.5 rounded-xl border border-slate-700/60 mx-auto">
          <a
            class="px-5 py-2 text-xs font-bold rounded-lg text-slate-200 hover:text-indigo-400 hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#sobre-mi"
          >
            <i class="fa-solid fa-user text-xs opacity-70"></i>
            Sobre mí
          </a>
          <a
            class="px-5 py-2 text-xs font-bold rounded-lg text-slate-200 hover:text-indigo-400 hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#habilidades"
          >
            <i class="fa-solid fa-code text-xs opacity-70"></i>
            Habilidades
          </a>
          <a
            class="px-5 py-2 text-xs font-bold rounded-lg text-slate-200 hover:text-indigo-400 hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#proyectos"
          >
            <i class="fa-solid fa-folder-open text-xs opacity-70"></i>
            Proyectos
          </a>
          <a
            class="px-5 py-2 text-xs font-bold rounded-lg text-slate-200 hover:text-indigo-400 hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#contacto"
          >
            <i class="fa-solid fa-paper-plane text-xs opacity-70"></i>
            Contacto
          </a>
        </div>

        <!-- Right Side Action Button -->
        <div class="flex items-center gap-3 ml-auto">
          <a
            href="#contacto"
            class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Hablemos
          </a>

          <!-- Mobile Toggle Button -->
          <button
            id="menuBtn"
            class="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 text-sm font-bold md:hidden"
            type="button"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div
        id="mobileMenu"
        class="hidden mt-2 rounded-2xl glass-panel p-6 shadow-2xl transition-all duration-300 md:hidden border border-slate-800 bg-slate-900/95"
      >
        <div class="flex flex-col gap-3 text-center">
          <a class="py-3 rounded-xl text-sm font-bold text-slate-200 hover:bg-indigo-950/40 hover:text-indigo-400 transition-all" href="#sobre-mi">
            Sobre mí
          </a>
          <a class="py-3 rounded-xl text-sm font-bold text-slate-200 hover:bg-indigo-950/40 hover:text-indigo-400 transition-all" href="#sobre-mi">
            Habilidades
          </a>
          <a class="py-3 rounded-xl text-sm font-bold text-slate-200 hover:bg-indigo-950/40 hover:text-indigo-400 transition-all" href="#proyectos">
            Proyectos
          </a>
          <a class="py-3 rounded-xl text-sm font-bold text-slate-200 hover:bg-indigo-950/40 hover:text-indigo-400 transition-all" href="#contacto">
            Contacto
          </a>
          <a
            class="w-full py-3 rounded-xl bg-indigo-600 text-center text-sm font-bold text-white shadow-lg"
            href="#contacto"
          >
            Hablemos
          </a>
        </div>
      </div>
    </header>
  `;
}