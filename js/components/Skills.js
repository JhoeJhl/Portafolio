export function Skills() {
  return `
    <section
      id="habilidades"
      class="border-t border-slate-200/50 py-24 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/20"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-3xl font-bold tracking-tight text-center">
          Habilidades
        </h2>
        <p class="mt-4 text-slate-600 dark:text-slate-400 text-center">
          Lo que uso y lo que estoy fortaleciendo.
        </p>

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            class="p-8 rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3
              class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6"
            >
              Desarrollo web
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >HTML5</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >CSS3</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >TailwindCSS</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >JavaScript</span
              >
            </div>
          </div>

          <div
            class="p-8 rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3
              class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6"
            >
              Backend & BD
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 text-[14px] font-bold"
                >PHP</span
              >
              <span
                class="px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 text-[14px] font-bold"
                >Laravel 12</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >MySQL</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >PostgreSQL</span
              >
            </div>
          </div>

          <div
            class="p-8 rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3
              class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6"
            >
              Herramientas
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >Git</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >GitHub</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >VS Code</span
              >
              <span
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[14px] font-bold"
                >Linux / WSL</span
              >
            </div>
          </div>

          <div
            class="p-8 rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3
              class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6"
            >
              Soft Skills
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 text-[14px] font-bold uppercase"
                >Responsabilidad</span
              >
              <span
                class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 text-[14px] font-bold uppercase"
                >Trabajo equipo</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}