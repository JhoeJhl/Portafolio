export function Header() {
  return `
    <header class="sticky top-4 z-50 mx-auto max-w-6xl px-4 sm:px-6">
      <nav
        class="glass-panel relative rounded-2xl px-4 sm:px-6 py-3 shadow-xl shadow-indigo-500/5 dark:shadow-indigo-500/10 transition-all duration-300 flex items-center justify-between gap-4 border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80"
      >
        <!-- Línea superior de acento -->
        <div class="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"></div>

        <!-- Brand -->
        <a href="#inicio" class="group flex items-center gap-3 shrink-0">
          <span class="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 text-white font-heading font-black text-xs shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-105">
            JP
          </span>
          <span class="hidden sm:flex flex-col leading-tight">
            <span class="text-sm font-black font-heading tracking-tight text-slate-900 dark:text-white">
              Joel Pinto
            </span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Fullstack Developer
            </span>
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex flex-1 items-center justify-center gap-1">
          <a
            class="relative px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-indigo-600 rounded-lg transition-colors dark:text-slate-300 dark:hover:text-indigo-400 after:content-[''] after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-indigo-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            href="#sobre-mi"
          >
            Sobre mí
          </a>
          <a
            class="relative px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-indigo-600 rounded-lg transition-colors dark:text-slate-300 dark:hover:text-indigo-400 after:content-[''] after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-indigo-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            href="#habilidades"
          >
            Habilidades
          </a>
          <a
            class="relative px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-indigo-600 rounded-lg transition-colors dark:text-slate-300 dark:hover:text-indigo-400 after:content-[''] after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-indigo-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            href="#proyectos"
          >
            Proyectos
          </a>
          <a
            class="relative px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-indigo-600 rounded-lg transition-colors dark:text-slate-300 dark:hover:text-indigo-400 after:content-[''] after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-indigo-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-2 shrink-0">
          <a
            href="#contacto"
            class="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>Hablemos</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>

          <!-- Theme Toggle Button -->
          <button
            id="themeBtn"
            class="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-indigo-400 dark:hover:border-indigo-500/60 transition-all"
            type="button"
            title="Cambiar entre modo claro y oscuro"
            aria-label="Cambiar tema"
          >
            <i class="fa-solid fa-moon dark:hidden"></i>
            <i class="fa-solid fa-sun hidden dark:inline"></i>
          </button>

          <!-- Mobile Toggle Button -->
          <button
            id="menuBtn"
            class="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-bold md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            type="button"
            aria-label="Abrir menú"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div
        id="mobileMenu"
        class="hidden mt-2 rounded-2xl glass-panel p-3 shadow-2xl transition-all duration-300 md:hidden border border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-900/95"
      >
        <div class="flex flex-col gap-1">
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 transition-all" href="#sobre-mi">
            <i class="fa-solid fa-user text-xs w-4 text-center opacity-70"></i>
            <span>Sobre mí</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 transition-all" href="#habilidades">
            <i class="fa-solid fa-code text-xs w-4 text-center opacity-70"></i>
            <span>Habilidades</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 transition-all" href="#proyectos">
            <i class="fa-solid fa-folder-open text-xs w-4 text-center opacity-70"></i>
            <span>Proyectos</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 transition-all" href="#contacto">
            <i class="fa-solid fa-paper-plane text-xs w-4 text-center opacity-70"></i>
            <span>Contacto</span>
          </a>

          <div class="my-2 h-px bg-slate-200 dark:bg-slate-800"></div>

          <a
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-center text-sm font-bold text-white shadow-lg shadow-indigo-500/20"
            href="#contacto"
          >
            <span>Hablemos</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>

          <button
            id="themeBtnMobile"
            class="mt-1 w-full py-3 rounded-xl border border-slate-200 bg-slate-100 text-center text-sm font-bold text-slate-700 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            type="button"
          >
            <i class="fa-solid fa-moon dark:hidden"></i>
            <i class="fa-solid fa-sun hidden dark:inline"></i>
            <span class="dark:hidden">Modo oscuro</span>
            <span class="hidden dark:inline">Modo claro</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
