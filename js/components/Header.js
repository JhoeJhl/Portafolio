export function Header() {
  return `
    <header class="sticky top-4 z-50 mx-auto max-w-6xl px-4 sm:px-6">
      <nav
        class="glass-panel rounded-2xl px-5 py-3.5 shadow-lg shadow-indigo-500/5 transition-all duration-300 flex items-center justify-between"
      >
        <!-- Logo Branding -->
        <a
          href="#inicio"
          class="flex items-center gap-3 font-extrabold tracking-tight group"
        >
          <div class="relative">
            <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-70 blur group-hover:opacity-100 transition duration-300"></div>
            <span
              class="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-heading font-black text-sm dark:bg-slate-950 shadow-md group-hover:scale-105 transition-transform"
            >
              JP
            </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-heading font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Joel Pinto
            </span>
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">
              Fullstack Dev
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-1 md:flex bg-slate-100/70 dark:bg-slate-800/40 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/40">
          <a
            class="px-4 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#sobre-mi"
          >
            <i class="fa-solid fa-user text-xs opacity-70"></i>
            Sobre mí
          </a>
          <a
            class="px-4 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#habilidades"
          >
            <i class="fa-solid fa-code text-xs opacity-70"></i>
            Habilidades
          </a>
          <a
            class="px-4 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#proyectos"
          >
            <i class="fa-solid fa-folder-open text-xs opacity-70"></i>
            Proyectos
          </a>
          <a
            class="px-4 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
            href="#contacto"
          >
            <i class="fa-solid fa-paper-plane text-xs opacity-70"></i>
            Contacto
          </a>
        </div>

        <!-- Action Buttons (CTA & Theme Toggle) -->
        <div class="hidden items-center gap-3 md:flex">
          <button
            id="themeBtn"
            class="relative inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm active:scale-95"
            type="button"
            title="Cambiar tema"
          >
            <i class="fa-solid fa-moon text-sm dark:hidden"></i>
            <i class="fa-solid fa-sun text-sm hidden dark:block text-amber-400"></i>
          </button>

          <a
            href="#contacto"
            class="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Hablemos</span>
            <i class="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
          </a>
        </div>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-2 md:hidden">
          <button
            id="themeBtnMobile"
            class="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
            type="button"
          >
            <i class="fa-solid fa-moon text-xs dark:hidden"></i>
            <i class="fa-solid fa-sun text-xs hidden dark:block text-amber-400"></i>
          </button>

          <button
            id="menuBtn"
            class="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 text-sm font-bold"
            type="button"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div
        id="mobileMenu"
        class="hidden mt-2 rounded-2xl glass-panel p-6 shadow-2xl transition-all duration-300 md:hidden border border-slate-200/80 dark:border-slate-800/80"
      >
        <div class="flex flex-col gap-3">
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 transition-all" href="#sobre-mi">
            <i class="fa-solid fa-user text-indigo-500"></i>
            Sobre mí
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 transition-all" href="#habilidades">
            <i class="fa-solid fa-code text-indigo-500"></i>
            Habilidades
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 transition-all" href="#proyectos">
            <i class="fa-solid fa-folder-open text-indigo-500"></i>
            Proyectos
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 transition-all" href="#contacto">
            <i class="fa-solid fa-paper-plane text-indigo-500"></i>
            Contacto
          </a>
          <div class="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
            <a
              class="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-indigo-500/20"
              href="#contacto"
            >
              <span>Hablemos</span>
              <i class="fa-solid fa-paper-plane text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}