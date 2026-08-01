export function Footer() {
  return `
    <footer
      class="py-12 border-t border-slate-200/60 dark:border-slate-800/60 text-center relative"
    >
      <div
        class="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div class="flex items-center gap-3">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-heading font-black text-xs shadow-md">
            JP
          </span>
          <p class="text-xs text-slate-500 font-medium">
            © <span id="year"></span> Joel Freddy Pinto Cutili. Hecho con HTML, TailwindCSS & JS Vanilla.
          </p>
        </div>

        <div class="flex items-center gap-6">
          <a
            class="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            href="https://github.com/JhoeJhl"
            target="_blank"
          >
            <i class="fa-brands fa-github text-sm mr-1"></i> GitHub
          </a>
          <a
            class="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            href="https://www.linkedin.com/in/joel-pinto-84219723a/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin text-sm mr-1"></i> LinkedIn
          </a>
          <a
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-sm"
            href="#inicio"
          >
            <span>Volver arriba</span>
            <i class="fa-solid fa-arrow-up text-[10px]"></i>
          </a>
        </div>
      </div>
    </footer>
  `;
}